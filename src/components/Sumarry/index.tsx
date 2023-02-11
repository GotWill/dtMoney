import * as C from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Sumarry() {
  const summary = useSummary()

  return (
    <C.SumarryContent>
      <C.SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </C.SumarryCard>

      <C.SumarryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </C.SumarryCard>

      <C.SumarryCard bg="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </C.SumarryCard>
    </C.SumarryContent>
  )
}
