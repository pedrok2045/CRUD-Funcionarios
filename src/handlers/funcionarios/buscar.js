'use strict'

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { funcionarios } = require('../../infra/repositories')(dynamoDb)

module.exports.handler = (event, _, callback) => {

  funcionarios.findById(event.pathParameters.id, (error, data) => {
    if (error) {
      console.error(error)
      callback(new Error(error))
      return
    }

    const response = data.Item ? {
      statusCode: 200, body: JSON.stringify(data.Item)
    } : {
      statusCode: 404,
      body: JSON.stringify({ message: "Funcionário não encontrado." })
    }

    callback(null, response)
  })
}