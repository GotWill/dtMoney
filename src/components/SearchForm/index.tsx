import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as C from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { transactionsContexts } from '../../contexts/transactionsContexts'
import { useContextSelector } from 'use-context-selector'

const schema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof schema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    transactionsContexts,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(schema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <C.FormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações "
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </C.FormContainer>
  )
}
