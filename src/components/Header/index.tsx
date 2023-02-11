import * as C from './styles'
import logoImg from '../../assets/Logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewModal } from '../NewModal'

export function Header() {
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <C.Button>Nova transação</C.Button>
          </Dialog.DialogTrigger>

          <NewModal />
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}
