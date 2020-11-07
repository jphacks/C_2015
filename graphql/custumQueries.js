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
        sayings {
          items {
            id
            content
            owner
            failureID
          }
        }
        metoos {
          items {
            id
            owner
            failureID
          }
        }
        sorrys {
          items {
            id
            owner
            failureID
          }
        }
        nices {
          items {
            id
            owner
            failureID
          }
        }
      }
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
        failure {
          id
          title
          content
          owner
        }
        likes {
          items {
            id
            owner
            sayingID
          }
          nextToken
        }
      }
      nextToken
    }
  }
`
