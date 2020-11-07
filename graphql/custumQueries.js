export const listFailures = /* GraphQL */ `
  query ListFailures(
    $filter: ModelFailureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFailures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        owner
        createdAt
        updatedAt
        sayings {
          items {
            id
            content
            owner
            failureID
            createdAt
            updatedAt
          }
          nextToken
        }
        metoos {
          items {
            id
            owner
            failureID
            createdAt
            updatedAt
          }
          nextToken
        }
        sorrys {
          items {
            id
            owner
            failureID
            createdAt
            updatedAt
          }
          nextToken
        }
        nices {
          items {
            id
            owner
            failureID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`
export const listSayings = /* GraphQL */ `
  query ListSayings(
    $filter: ModelSayingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSayings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        failureID
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          createdAt
          updatedAt
        }
        likes {
          items {
            id
            owner
            sayingID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`
