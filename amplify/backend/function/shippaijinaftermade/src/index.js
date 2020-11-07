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
const axios = require('axios')

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
      axios({
        method: "post",
        url: "https://onesignal.com/api/v1/notifications",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${process.env.ONESINGAL_REST_API_KEY}`
        },
        data: {
          app_id: '0e1b6663-04df-4018-8e54-009c0450bd93',
          headings: {
            ja: 'あなたの失敗談に名言がつきました'
          },
          contents: {
            ja: 'meigen'
          },
          include_player_ids: [result.data.getOnesingle]
        }
      })
    }).catch((error) => {
      console.log(error)
    })
    console.log('end')

  });
  return Promise.resolve('Successfully processed DynamoDB record');
};