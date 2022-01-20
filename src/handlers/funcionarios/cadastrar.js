'use strict'

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { funcionarios } = require('../../infra/repositories')(dynamoDb)

module.exports.handler = (event, _, callback) => {

  const data = JSON.parse(event.body)

  funcionarios.create({
    idade: data.idade,
    nome: data.nome,
    cargo: data.cargo
  }, (error, data) => {
    if (error) {
      console.error(error)
      callback(new Error(error))
      return
    }

    callback(null, { statusCode: 201, body: JSON.stringify(data.Items) })
  })
}