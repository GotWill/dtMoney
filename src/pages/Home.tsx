import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Sumarry } from '../components/Sumarry'
import * as C from './styles'
import { transactionsContexts } from '../contexts/transactionsContexts'
import { dateFormatter, priceFormatter } from '../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Home() {
  const transactions = useContextSelector(transactionsContexts, (context) => {
    return context.transactions
  })
  console.log(transactions)
  return (
    <div>
      <Header />
      <Sumarry />

      <C.TransactionsContainer>
        <SearchForm />
        <C.Table>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <C.PriceHighlight variant={item.type}>
                      {item.type === 'outcome' && '- '}
                      {priceFormatter.format(item.price)}
                    </C.PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.created_at))}</td>
                </tr>
              )
            })}
          </tbody>
        </C.Table>
      </C.TransactionsContainer>
    </div>
  )
}
