import * as C from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Sumarry(){
    return (
        <C.SumarryContent>
            <C.SumarryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </C.SumarryCard>

            <C.SumarryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </C.SumarryCard>

            <C.SumarryCard bg='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </C.SumarryCard>
        </C.SumarryContent>
    )
}