import { gql } from "@apollo/client"

export const getBook = gql`
     query bookDetail($ISBN: ID!) {
          bookDetail(ISBN: $ISBN) {
               ISBN
               name
               year
               height
               width
               pages
               bookBindings {
                    name
               }
               editorial {
                    id
                    name
               }
               collection {
                    name
                    id
               }
               ageRange {
                    name
               }
               editors {
                    id
                    name
                    lastName
               }
               authors {
                    id
                    name
                    lastName
               }
               illustrationOrgs {
                    id
                    name
               }
               illustrators {
                    id
                    name
                    lastName
               }
               genre {
                    id
                    name
               }
               subGenres {
                    id
                    name
               }
               keyWords {
                    id
                    name
               }
               score {
                    id
                    name
               }
               review
               quote
               imageOne
               imageTwo
               imageThree
               imageFour
          }
     }
`

export const getBooks = gql`
     query bookSearch(
          $bookBindings: [String]
          $ilustrations: [String]
          $genre: [String]
          $editorials: [String]
          $keyWords: [String]
          $score: [String]
          $startYear: Int
          $endYear: Int
          $ageRange: [String]
          $page: Int
     ) {
          bookSearch(
               bookBindings: $bookBindings
               ilustrations: $ilustrations
               genre: $genre
               editorials: $editorials
               keyWords: $keyWords
               score: $score
               startYear: $startYear
               endYear: $endYear
               ageRange: $ageRange
               page: $page
          ) {
               pages
               books {
                    ISBN
                    name
                    imageOne
                    authors {
                         name
                         lastName
                    }
                    score {
                         name
                    }
                    imageOne
               }
          }
     }
`

export const getFilters = gql`
     query getFilters {
          getBookBindings {
               name
          }
          getIllustrations {
               name
          }
          getGenres {
               name
          }
          getKeyWords {
               name
          }
          getScores {
               name
          }
          getEditorials {
               name
          }
          getAgeRanges {
               name
          }
     }
`

export const booksSearchBar = gql`
     query booksSearchBar {
          booksSearchBar {
               ISBN
               name
          }
     }
`

export const registerUser = gql`
     mutation createUser($email: String!, $password: String!, $lastName: String!, $name: String!) {
          createUser(email: $email, password: $password, lastName: $lastName, firstName: $name) {
               email
               firstName
               lastName
          }
     }
`

export const loginUser = gql`
     mutation userLogin($email: String!, $password: String!) {
          userLogin(username: $email, password: $password) {
               id
               isStaff
               isSuperuser
               username
               password
               firstName
               lastName
          }
     }
`

export const searchBooks = gql`
     query bookSearch($name: String, $genre: [String], $ageRange: [String], $authorsNames: [String], $startYear: Int) {
          bookSearch(
               genre: $genre
               ageRange: $ageRange
               name: $name
               authorsNames: $authorsNames
               startYear: $startYear
          ) {
               pages
               books {
                    ISBN
                    name
                    imageOne
                    authors {
                         name
                         lastName
                    }
                    score {
                         name
                    }
                    imageOne
               }
          }
     }
`
export const createBookShelf = gql`
     mutation createBookShelf($book: String!, $user: Int!) {
          createShoppingCart(book: $book, user: $user) {
               id
               user {
                    username
                    email
               }
          }
     }
`
export const bookShelf = gql`
     query shoppingCartSearch($user: Int!) {
          shoppingCartSearch(user: $user) {
               id
               book {
                    ISBN
                    name
                    genre {
                         name
                    }
                    imageOne
                    authors {
                         name
                         lastName
                    }
                    score {
                         name
                    }
               }
          }
     }
`
export const checkBook = gql`
     query shoppingCartSearch($user: Int!, $book: String!) {
          shoppingCartSearch(user: $user, book: $book) {
               id
          }
     }
`

export const deleteBook = gql`
     mutation deleteShoppingCart($id: ID!) {
          deleteShoppingCart(id: $id) {
               user {
                    username
               }
          }
     }
`
