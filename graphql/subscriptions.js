/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOnesingle = /* GraphQL */ `
  subscription OnCreateOnesingle($owner: String!) {
    onCreateOnesingle(owner: $owner) {
      id
      owner
      onesignalId
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
      onesignalId
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
      onesignalId
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
  }
`;
export const onUpdateFailure = /* GraphQL */ `
  subscription OnUpdateFailure($owner: String) {
    onUpdateFailure(owner: $owner) {
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
  }
`;
export const onDeleteFailure = /* GraphQL */ `
  subscription OnDeleteFailure($owner: String) {
    onDeleteFailure(owner: $owner) {
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
  }
`;
export const onCreateSaying = /* GraphQL */ `
  subscription OnCreateSaying($owner: String) {
    onCreateSaying(owner: $owner) {
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
  }
`;
export const onUpdateSaying = /* GraphQL */ `
  subscription OnUpdateSaying($owner: String) {
    onUpdateSaying(owner: $owner) {
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
  }
`;
export const onDeleteSaying = /* GraphQL */ `
  subscription OnDeleteSaying($owner: String) {
    onDeleteSaying(owner: $owner) {
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
  }
`;
export const onCreateMetoo = /* GraphQL */ `
  subscription OnCreateMetoo($owner: String) {
    onCreateMetoo(owner: $owner) {
      id
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      failure {
        id
        title
        content
        owner
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      saying {
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
          nextToken
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
      createdAt
      updatedAt
      saying {
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
          nextToken
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
      createdAt
      updatedAt
      saying {
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
          nextToken
        }
      }
    }
  }
`;
