'use strict'

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { funcionarios } = require('../../infra/repositories')(dynamoDb)

module.exports.handler = (event, _, callback) => {

  funcionarios.remove(event.pathParameters.id, (error, data) => {
    if (error) {
      console.error(error)
      callback(new Error(error))
      return
    }

    callback(null, { statusCode: 200, body: JSON.stringify(data) })
  })
}