const DynamoDbAdapter = require('../../databases/DynamoDbImp')

class Repository extends DynamoDbAdapter {
  constructor(dynamoDocumentClient){
    super('Funcionarios', dynamoDocumentClient)
  }
}

module.exports = dynamoDocumentClient => new Repository(dynamoDocumentClient)