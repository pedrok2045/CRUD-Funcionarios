'use strict'

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { funcionarios } = require('../../infra/repositories')(dynamoDb)

module.exports.handler = (event, _, callback) => {

  const data = JSON.parse(event.body)
  const params = ['nome', 'idade', 'cargo']
  const values = [data.nome, data.idade, data.cargo]

  funcionarios.update(event.pathParameters.id, params, values, (error, data) => {
    if (error) {
      console.error(error)
      callback(new Error(error))
      return
    }

    callback(null, { statusCode: 200, body: JSON.stringify(data) })
  })
}