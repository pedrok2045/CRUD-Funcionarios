const funcionariosRepository = require('./Funcionarios')

module.exports = {
  funcionarios: (dbInstance) => funcionariosRepository(dbInstance)
}