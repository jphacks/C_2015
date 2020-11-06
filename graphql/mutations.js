/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFailure = /* GraphQL */ `
  mutation CreateFailure(
    $input: CreateFailureInput!
    $condition: ModelFailureConditionInput
  ) {
    createFailure(input: $input, condition: $condition) {
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
export const updateFailure = /* GraphQL */ `
  mutation UpdateFailure(
    $input: UpdateFailureInput!
    $condition: ModelFailureConditionInput
  ) {
    updateFailure(input: $input, condition: $condition) {
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
export const deleteFailure = /* GraphQL */ `
  mutation DeleteFailure(
    $input: DeleteFailureInput!
    $condition: ModelFailureConditionInput
  ) {
    deleteFailure(input: $input, condition: $condition) {
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
export const createSaying = /* GraphQL */ `
  mutation CreateSaying(
    $input: CreateSayingInput!
    $condition: ModelSayingConditionInput
  ) {
    createSaying(input: $input, condition: $condition) {
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
export const updateSaying = /* GraphQL */ `
  mutation UpdateSaying(
    $input: UpdateSayingInput!
    $condition: ModelSayingConditionInput
  ) {
    updateSaying(input: $input, condition: $condition) {
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
export const deleteSaying = /* GraphQL */ `
  mutation DeleteSaying(
    $input: DeleteSayingInput!
    $condition: ModelSayingConditionInput
  ) {
    deleteSaying(input: $input, condition: $condition) {
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
export const createMetoo = /* GraphQL */ `
  mutation CreateMetoo(
    $input: CreateMetooInput!
    $condition: ModelMetooConditionInput
  ) {
    createMetoo(input: $input, condition: $condition) {
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
export const updateMetoo = /* GraphQL */ `
  mutation UpdateMetoo(
    $input: UpdateMetooInput!
    $condition: ModelMetooConditionInput
  ) {
    updateMetoo(input: $input, condition: $condition) {
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
export const deleteMetoo = /* GraphQL */ `
  mutation DeleteMetoo(
    $input: DeleteMetooInput!
    $condition: ModelMetooConditionInput
  ) {
    deleteMetoo(input: $input, condition: $condition) {
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
export const createSorry = /* GraphQL */ `
  mutation CreateSorry(
    $input: CreateSorryInput!
    $condition: ModelSorryConditionInput
  ) {
    createSorry(input: $input, condition: $condition) {
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
export const updateSorry = /* GraphQL */ `
  mutation UpdateSorry(
    $input: UpdateSorryInput!
    $condition: ModelSorryConditionInput
  ) {
    updateSorry(input: $input, condition: $condition) {
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
export const deleteSorry = /* GraphQL */ `
  mutation DeleteSorry(
    $input: DeleteSorryInput!
    $condition: ModelSorryConditionInput
  ) {
    deleteSorry(input: $input, condition: $condition) {
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
export const createNice = /* GraphQL */ `
  mutation CreateNice(
    $input: CreateNiceInput!
    $condition: ModelNiceConditionInput
  ) {
    createNice(input: $input, condition: $condition) {
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
export const updateNice = /* GraphQL */ `
  mutation UpdateNice(
    $input: UpdateNiceInput!
    $condition: ModelNiceConditionInput
  ) {
    updateNice(input: $input, condition: $condition) {
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
export const deleteNice = /* GraphQL */ `
  mutation DeleteNice(
    $input: DeleteNiceInput!
    $condition: ModelNiceConditionInput
  ) {
    deleteNice(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createOnesingle = /* GraphQL */ `
  mutation CreateOnesingle(
    $input: CreateOnesingleInput!
    $condition: ModelOnesingleConditionInput
  ) {
    createOnesingle(input: $input, condition: $condition) {
      id
      owner
      onesignalId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOnesingle = /* GraphQL */ `
  mutation UpdateOnesingle(
    $input: UpdateOnesingleInput!
    $condition: ModelOnesingleConditionInput
  ) {
    updateOnesingle(input: $input, condition: $condition) {
      id
      owner
      onesignalId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOnesingle = /* GraphQL */ `
  mutation DeleteOnesingle(
    $input: DeleteOnesingleInput!
    $condition: ModelOnesingleConditionInput
  ) {
    deleteOnesingle(input: $input, condition: $condition) {
      id
      owner
      onesignalId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
