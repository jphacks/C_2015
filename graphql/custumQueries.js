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
          startedAt
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
          startedAt
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
          startedAt
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
          startedAt
        }
      }
      nextToken
      startedAt
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
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`
