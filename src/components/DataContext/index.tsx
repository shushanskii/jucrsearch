import React, {createContext, FC, useState} from 'react'
import {useQuery} from "@apollo/client"
import { gql } from '__generated__/gql'

const SEARCH = gql(`
  query search($query: String!) {
    search(query: $query, type: REPOSITORY, first: 1) {
      codeCount
      userCount
      issueCount
      repositoryCount
      userCount
      wikiCount
    }
  }
`)

export const DataContext = createContext<any>({})

const DataContextProvider: FC<any> = ({children}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, error, data } = useQuery(SEARCH)

  return (
    <DataContext.Provider value={state}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider