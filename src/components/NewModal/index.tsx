import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as C from './styles'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { transactionsContexts } from '../../contexts/transactionsContexts'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.string().transform((val) => parseFloat(val)),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionInputs = z.infer<typeof newTransactionSchema>

export function NewModal() {
  const createTransaction = useContextSelector(
    transactionsContexts,
    (context) => {
      return context.createTransaction
    },
  )

  const { control, register, handleSubmit, reset } =
    useForm<newTransactionInputs>({
      resolver: zodResolver(newTransactionSchema),
      defaultValues: {
        type: 'income',
      },
    })

  async function handleCreateNewtransaction(data: newTransactionInputs) {
    const { description, price, type, category } = data

    console.log(data)

    await createTransaction({
      description,
      price,
      type,
      category,
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <C.Overlay />
      <C.Content>
        <C.CloseButton>
          <X size={24} />
        </C.CloseButton>

        <Dialog.Title>Nova transação </Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewtransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input
            type="text"
            placeholder="Preco"
            required
            {...register('price')}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <C.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <C.TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </C.TransactionTypeButton>

                  <C.TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </C.TransactionTypeButton>
                </C.TransactionType>
              )
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </C.Content>
    </Dialog.Portal>
  )
}
