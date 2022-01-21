const DynamoDb = require('../../databases/DynamoDb')

class Repository extends DynamoDb {
  constructor(dynamoDocumentClient){
    super('Funcionarios', dynamoDocumentClient)
  }
}

module.exports = dynamoDocumentClient => new Repository(dynamoDocumentClient)