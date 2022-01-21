const Database = require('./Database')
const uuid = require('uuid')

class DynamoDB extends Database {
  constructor(tableName, dynamoDocumentClient) {
    super(tableName)
    this.dynamoDb = dynamoDocumentClient
  }

  findById(id, callback) {
    const params = {
      TableName: this.tableName,
      Key: { id }
    }

    this.dynamoDb.get(params, (error, data) => callback(error, data))
  }

  findAll(callback) {
    const params = { TableName: this.tableName }
    this.dynamoDb.scan(params, (error, data) => callback(error, data))
  }

  create(object, callback) {

    const params = {
      TableName: this.tableName,
      Item: { ...object, id: uuid.v1() }
    }

    this.dynamoDb.put(params, (error, data) => callback(error, data))
  }

  update(id, params, values, callback) {

    let expressionParams = this.configExpressionParams(params, values)
    let query = this.buildQuery(params)

    const _params = {
      TableName: this.tableName,
      Key: { id },
      ExpressionAttributeValues: expressionParams,
      UpdateExpression: query,
      ReturnValues: 'ALL_NEW'
    }

    this.dynamoDb.update(_params, (error, data) => callback(error, data.Attributes))
  }

  remove(id, callback) {
    const params = { TableName: this.tableName, Key: { id } }
    this.dynamoDb.delete(params, (error, _) => callback(error, {}))
  }

  configExpressionParams(params, values){
    let expressionParams = {}
    params.forEach((param, index) => expressionParams[`:${param}`] = values[index])
    return expressionParams
  }
  
  buildQuery(params){
    let query = 'set '
      params.forEach(param => query += `${param} = :${param}, `)
      const paramsSemVirgulaNoFinal = query.replace(/,\s$/g, '')
      return paramsSemVirgulaNoFinal
  }
}

module.exports = DynamoDB