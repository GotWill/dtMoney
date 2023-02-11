import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

type transactionsProps = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: string
}

type CreateTransactionInput = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

type transactionsContextType = {
  transactions: transactionsProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const transactionsContexts = createContext({} as transactionsContextType)

type childrenProps = {
  children: ReactNode
}

export function TransactionsProvider({ children }: childrenProps) {
  const [transactions, setTransactions] = useState<transactionsProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, type, category } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        created_at: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )
  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])
  return (
    <transactionsContexts.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </transactionsContexts.Provider>
  )
}
