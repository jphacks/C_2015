/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOnesingle = /* GraphQL */ `
  subscription OnCreateOnesingle($owner: String!) {
    onCreateOnesingle(owner: $owner) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOnesingle = /* GraphQL */ `
  subscription OnUpdateOnesingle($owner: String!) {
    onUpdateOnesingle(owner: $owner) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOnesingle = /* GraphQL */ `
  subscription OnDeleteOnesingle($owner: String!) {
    onDeleteOnesingle(owner: $owner) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFailure = /* GraphQL */ `
  subscription OnCreateFailure($owner: String) {
    onCreateFailure(owner: $owner) {
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
export const onUpdateFailure = /* GraphQL */ `
  subscription OnUpdateFailure($owner: String) {
    onUpdateFailure(owner: $owner) {
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
export const onDeleteFailure = /* GraphQL */ `
  subscription OnDeleteFailure($owner: String) {
    onDeleteFailure(owner: $owner) {
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
export const onCreateSaying = /* GraphQL */ `
  subscription OnCreateSaying($owner: String) {
    onCreateSaying(owner: $owner) {
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
export const onUpdateSaying = /* GraphQL */ `
  subscription OnUpdateSaying($owner: String) {
    onUpdateSaying(owner: $owner) {
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
export const onDeleteSaying = /* GraphQL */ `
  subscription OnDeleteSaying($owner: String) {
    onDeleteSaying(owner: $owner) {
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
export const onCreateMetoo = /* GraphQL */ `
  subscription OnCreateMetoo($owner: String) {
    onCreateMetoo(owner: $owner) {
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
export const onUpdateMetoo = /* GraphQL */ `
  subscription OnUpdateMetoo($owner: String) {
    onUpdateMetoo(owner: $owner) {
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
export const onDeleteMetoo = /* GraphQL */ `
  subscription OnDeleteMetoo($owner: String) {
    onDeleteMetoo(owner: $owner) {
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
export const onCreateSorry = /* GraphQL */ `
  subscription OnCreateSorry($owner: String) {
    onCreateSorry(owner: $owner) {
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
export const onUpdateSorry = /* GraphQL */ `
  subscription OnUpdateSorry($owner: String) {
    onUpdateSorry(owner: $owner) {
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
export const onDeleteSorry = /* GraphQL */ `
  subscription OnDeleteSorry($owner: String) {
    onDeleteSorry(owner: $owner) {
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
export const onCreateNice = /* GraphQL */ `
  subscription OnCreateNice($owner: String) {
    onCreateNice(owner: $owner) {
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
export const onUpdateNice = /* GraphQL */ `
  subscription OnUpdateNice($owner: String) {
    onUpdateNice(owner: $owner) {
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
export const onDeleteNice = /* GraphQL */ `
  subscription OnDeleteNice($owner: String) {
    onDeleteNice(owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
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
