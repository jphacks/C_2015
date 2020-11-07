/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFailure = /* GraphQL */ `
  subscription OnCreateFailure {
    onCreateFailure {
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
export const onUpdateFailure = /* GraphQL */ `
  subscription OnUpdateFailure {
    onUpdateFailure {
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
export const onDeleteFailure = /* GraphQL */ `
  subscription OnDeleteFailure {
    onDeleteFailure {
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
export const onCreateSaying = /* GraphQL */ `
  subscription OnCreateSaying {
    onCreateSaying {
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
export const onUpdateSaying = /* GraphQL */ `
  subscription OnUpdateSaying {
    onUpdateSaying {
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
export const onDeleteSaying = /* GraphQL */ `
  subscription OnDeleteSaying {
    onDeleteSaying {
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
export const onCreateMetoo = /* GraphQL */ `
  subscription OnCreateMetoo {
    onCreateMetoo {
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
export const onUpdateMetoo = /* GraphQL */ `
  subscription OnUpdateMetoo {
    onUpdateMetoo {
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
export const onDeleteMetoo = /* GraphQL */ `
  subscription OnDeleteMetoo {
    onDeleteMetoo {
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
export const onCreateSorry = /* GraphQL */ `
  subscription OnCreateSorry {
    onCreateSorry {
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
export const onUpdateSorry = /* GraphQL */ `
  subscription OnUpdateSorry {
    onUpdateSorry {
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
export const onDeleteSorry = /* GraphQL */ `
  subscription OnDeleteSorry {
    onDeleteSorry {
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
export const onCreateNice = /* GraphQL */ `
  subscription OnCreateNice {
    onCreateNice {
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
export const onUpdateNice = /* GraphQL */ `
  subscription OnUpdateNice {
    onUpdateNice {
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
export const onDeleteNice = /* GraphQL */ `
  subscription OnDeleteNice {
    onDeleteNice {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
