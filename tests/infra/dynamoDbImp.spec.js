const dynamoDbImp = require('../../src/infra/databases/dynamoDbImp')

describe("Checks the integrity of functions used in dynamoDbImp.", () => {
  test("Should format the query to be used in a dynamoDb command.", () => {
    const db = new dynamoDbImp('', null)
    const newQuery = db.buildQuery(['param1', 'param2', 'param3'])
    expect(newQuery).toBe("set param1 = :param1, param2 = :param2, param3 = :param3")
  })

  test("Should generate an object with right format to be used in a dynamoDb update command.", () => {
    const db = new dynamoDbImp('', null)
    const params = ['param1', 'param2', 'param3']
    const values = [10, 20, 30]
    const expression = db.configExpressionParams(params, values)
    expect(expression).toStrictEqual({ ":param1": 10, ":param2": 20, ":param3": 30 })
  })
})