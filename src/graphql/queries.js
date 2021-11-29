import {
    gql,
  } from '@apollo/client'

export const getBook = gql`
  query bookDetail($ISBN: ID!) {
    bookDetail(ISBN: $ISBN) {
        ISBN,
        name,
        height,
        width,
        pages,
        maxAge,
        review,
        quote,
    }
}
`