/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFailure = /* GraphQL */ `
  query GetFailure($id: ID!) {
    getFailure(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
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
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSaying = /* GraphQL */ `
  query GetSaying($id: ID!) {
    getSaying(id: $id) {
      id
      content
      owner
      failureID
      failure {
        id
        title
        content
        owner
        sayings {
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
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
      createdAt
      updatedAt
    }
  }
`;
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
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMetoo = /* GraphQL */ `
  query GetMetoo($id: ID!) {
    getMetoo(id: $id) {
      id
      owner
      failureID
      failure {
        id
        title
        content
        owner
        sayings {
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMetoos = /* GraphQL */ `
  query ListMetoos(
    $filter: ModelMetooFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetoos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        failureID
        failure {
          id
          title
          content
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSorry = /* GraphQL */ `
  query GetSorry($id: ID!) {
    getSorry(id: $id) {
      id
      owner
      failureID
      failure {
        id
        title
        content
        owner
        sayings {
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSorrys = /* GraphQL */ `
  query ListSorrys(
    $filter: ModelSorryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSorrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        failureID
        failure {
          id
          title
          content
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNice = /* GraphQL */ `
  query GetNice($id: ID!) {
    getNice(id: $id) {
      id
      owner
      failureID
      failure {
        id
        title
        content
        owner
        sayings {
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNices = /* GraphQL */ `
  query ListNices(
    $filter: ModelNiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        failureID
        failure {
          id
          title
          content
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      owner
      sayingID
      saying {
        id
        content
        owner
        failureID
        failure {
          id
          title
          content
          owner
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        sayingID
        saying {
          id
          content
          owner
          failureID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOnesingle = /* GraphQL */ `
  query GetOnesingle($id: ID!) {
    getOnesingle(id: $id) {
      id
      owner
      onesignalId
      createdAt
      updatedAt
    }
  }
`;
export const listOnesingles = /* GraphQL */ `
  query ListOnesingles(
    $filter: ModelOnesingleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnesingles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        onesignalId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchFailures = /* GraphQL */ `
  query SearchFailures(
    $filter: SearchableFailureFilterInput
    $sort: SearchableFailureSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchFailures(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        content
        owner
        sayings {
          nextToken
        }
        metoos {
          nextToken
        }
        sorrys {
          nextToken
        }
        nices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchSayings = /* GraphQL */ `
  query SearchSayings(
    $filter: SearchableSayingFilterInput
    $sort: SearchableSayingSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchSayings(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
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
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
