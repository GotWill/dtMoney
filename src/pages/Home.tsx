import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Sumarry } from "../components/Sumarry";
import * as C from './styles'

export function Home() {
    return (
        <div>
            <Header />
            <Sumarry />


            <C.TransactionsContainer>
                <SearchForm/>
                <C.Table>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <C.PriceHighlight variant="income">
                                    R$ 12.000,00
                                </C.PriceHighlight>

                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <C.PriceHighlight variant="outcome">
                                   - R$ 59,00
                                </C.PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </C.Table>
            </C.TransactionsContainer>

        </div>
    )
}