import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql,
  HttpLink,
  from,
} from '@apollo/client'
import {onError} from '@apollo/client/link/error'

const errorLink = onError (({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message}) => {
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({uri: 'http://127.0.0.1:8000/graphql', withCredentials: true})
])

const client = new ApolloClient({
  // uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
  link: link,
  fetchOptions: {
    mode: 'no-cors',
  },
})

// client.query({
//   query: gql`
//     query bookDetail {
//       bookDetail(ISBN: 9789563642384) {
//         ISBN,
//         name
//       }
//     }
//   `
// })
// .then(result => console.log(result.data.bookDetail))


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
