/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getFailure = /* GraphQL */ `
  query GetFailure($id: ID!) {
    getFailure(id: $id) {
      id
      title
      content
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      sayings {
        items {
          id
          content
          owner
          failureID
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncFailures = /* GraphQL */ `
  query SyncFailures(
    $filter: ModelFailureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFailures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
      likes {
        items {
          id
          owner
          sayingID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncSayings = /* GraphQL */ `
  query SyncSayings(
    $filter: ModelSayingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSayings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        owner
        failureID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getMetoo = /* GraphQL */ `
  query GetMetoo($id: ID!) {
    getMetoo(id: $id) {
      id
      owner
      failureID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMetoos = /* GraphQL */ `
  query SyncMetoos(
    $filter: ModelMetooFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMetoos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        failureID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getSorry = /* GraphQL */ `
  query GetSorry($id: ID!) {
    getSorry(id: $id) {
      id
      owner
      failureID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSorries = /* GraphQL */ `
  query SyncSorries(
    $filter: ModelSorryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSorries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        failureID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getNice = /* GraphQL */ `
  query GetNice($id: ID!) {
    getNice(id: $id) {
      id
      owner
      failureID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        sayings {
          nextToken
          startedAt
        }
        metoos {
          nextToken
          startedAt
        }
        sorrys {
          nextToken
          startedAt
        }
        nices {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNices = /* GraphQL */ `
  query SyncNices(
    $filter: ModelNiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        failureID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      owner
      sayingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      saying {
        id
        content
        owner
        failureID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        failure {
          id
          title
          content
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        saying {
          id
          content
          owner
          failureID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        sayingID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        saying {
          id
          content
          owner
          failureID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
