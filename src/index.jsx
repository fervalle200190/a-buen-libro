import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import {
     ApolloClient,
     InMemoryCache,
     ApolloProvider,
     // useQuery,
     // gql,
     HttpLink,
     from,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from "./auth"
import { SnackbarProvider } from "notistack"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const errorLink = onError(({ graphqlErrors }) => {
     if (graphqlErrors) {
          graphqlErrors.map(({ message }) => {
               alert(`Graphql error ${message}`)
          })
     }
})
const link = from([
     errorLink,
     new HttpLink({ uri: "https://www.abuenlibro.cl/api/graphql", withCredentials: true }),
     // new HttpLink({uri: 'http://localhost:8000/api/graphql', withCredentials: true})
])

const client = new ApolloClient({
     cache: new InMemoryCache(),
     link: link,
     fetchOptions: {
          mode: "no-cors",
     },
     addTypename: false,
})

const queryClient = new QueryClient()

ReactDOM.render(
     <React.StrictMode>
          <Router>
               <AuthProvider>
                    <QueryClientProvider client={queryClient}>
                         <ApolloProvider client={client}>
                              <SnackbarProvider maxSnack={10}>
                                   <App />
                              </SnackbarProvider>
                         </ApolloProvider>
                    </QueryClientProvider>
               </AuthProvider>
          </Router>
     </React.StrictMode>,
     document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
