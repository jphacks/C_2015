require('isomorphic-fetch')
const AWSAppSyncClient = require('aws-appsync').default
const { AUTH_TYPE } = require('aws-appsync')
const gql = require('graphql-tag')
const query = gql(`
  query getFailure($id: ID!) {
    getFailure (id: $id) {
      title
      owner
    }
  }
`)

exports.handler = event => {
  //eslint-disable-line
  const client = new AWSAppSyncClient({
    url: process.env['API_SHIPPAIJIN_GRAPHQLAPIENDPOINTOUTPUT'],
    region: process.env['REGION'],
    auth: {
      type: AUTH_TYPE.API_KEY,
      apiKey: process.env['API_SHIPPAIJIN_GRAPHQLAPIKEYOUTPUT']
    },
    disableOffline: true
  })
  event.Records.forEach(record => {
    const newItem = record.dynamodb.NewImage
    console.log(newItem)
    const content = newItem.content.S
    const failureId = newItem.failureID.S
    console.log('start')
    client.query({
      query,
      variables: {
        id: failureId
      }
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
    console.log('end')

  });
  return Promise.resolve('Successfully processed DynamoDB record');
};