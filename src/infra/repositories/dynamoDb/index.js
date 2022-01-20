const funcionariosRepository = require('./funcionarios')

module.exports = {
  funcionarios: (dbInstance) => funcionariosRepository(dbInstance)
}