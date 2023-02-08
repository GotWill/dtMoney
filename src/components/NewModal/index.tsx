import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as C from './styles'

export function NewModal() {
    return (
        <Dialog.Portal>
            <C.Overlay />
            <C.Content>
                <C.CloseButton>
                    <X size={24}/>
                </C.CloseButton>

                <Dialog.Title>Nova transação </Dialog.Title>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="text" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <C.TransactionType>
                        <C.TransactionTypeButton value='income' variant='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </C.TransactionTypeButton>

                        <C.TransactionTypeButton value='outcome' variant='outcome'>
                            <ArrowCircleDown size={24}/>
                            Saída
                        </C.TransactionTypeButton>
                    </C.TransactionType>

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>

            </C.Content>
        </Dialog.Portal>
    )
}