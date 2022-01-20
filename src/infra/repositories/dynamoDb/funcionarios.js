const dynamoDbAdapter = require('../../databases/dynamoDbImp')

class repository extends dynamoDbAdapter {
  constructor(dynamoDocumentClient){
    super('Funcionarios', dynamoDocumentClient)
  }
}

module.exports = dynamoDocumentClient => new repository(dynamoDocumentClient)