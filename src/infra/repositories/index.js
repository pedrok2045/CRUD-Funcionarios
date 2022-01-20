module.exports = (dbInstance) => {
  return {
    funcionarios: require('../repositories/dynamoDb').funcionarios(dbInstance)
  }
}