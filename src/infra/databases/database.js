module.exports = class {
  constructor(table){
    this.tableName = table
  }

  findById(id, callback){
    throw new Error('METHOD_NOT_IMPLEMENTED')
  }

  findAll(callback){
    throw new Error('METHOD_NOT_IMPLEMENTED')
  }

  create(object, callback){
    throw new Error('METHOD_NOT_IMPLEMENTED')
  }

  update(id, params, values, callback){
    throw new Error('METHOD_NOT_IMPLEMENTED')
  }

  remove(id, callback){
    throw new Error('METHOD_NOT_IMPLEMENTED')
  }

}