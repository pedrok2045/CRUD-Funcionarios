# CRUD de funcionários na AWS Lambda usando Serverless

### Desafio no qual foi necessário aprender do zero a utilizar os serviços da Amazon Web Services (AWS) e colocar uma API online utilizando tanto o serviço Lambda quanto o API Gateway, além do DynamoDb, banco de dados não relacional proprietário da Amazon.
<br/><br/>

# Documentação:
  * [<h2>API<h2/>](#api)
  * [<h2>Infra<h2/>](#infra)
  * [<h2>Handlers<h2/>](#handlers)
  * [<h2>Serverless<h2/>](#serverless)

<br/><br/><br/>

# API
<br/>

## Buscar todos os funcionários: 
### método: GET
### URL: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios
### retorno: Lista de objetos
### statusCode: 200
<br/>
<br/>

## Buscar funcionário por ID: 
### método: GET
### URL: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios
### urlParam: id
### url de exemplo: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios/69fa8bf0-7a07-11ec-be7a-75d52e599e08
### retorno: Objeto json
### statusCode: 200
<br/>
<br/>

## Cadastrar funcionário: 
### método: POST
### URL: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios
### formato aceito: JSON
### propriedades aceitas: nome, idade e cargo
### statusCode: 201
### exemplo de objeto json válido: 
```
  {
    "nome": "Maria da Silva",
    "idade": 34,
    "cargo": "Desenvolvedora" 
  }
```
<br/>
<br/>

## Atualizar dados do funcionário: 
### método: PUT
### URL: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios
### urlParam: id
### formato aceito: JSON
### propriedades aceitas: nome, idade e cargo
### url de exemplo: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios/69fa8bf0-7a07-11ec-be7a-75d52e599e08
### retorno: Objeto json
### statusCode: 200
### exemplo de objeto json válido: 
```
  {
    "nome": "Maria da Silva",
    "idade": 34,
    "cargo": "Gerente Regional de Desenvolvimento" 
  }
```
<br/>
<br/>

## Excluir funcionário: 
### método: DELETE
### URL: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios
### urlParam: id
### url de exemplo: https://obdbt8rvy6.execute-api.sa-east-1.amazonaws.com/dev/funcionarios/69fa8bf0-7a07-11ec-be7a-75d52e599e08
### statusCode: 200

<br/>
<br/><br/>
<br/>

# Infra

## Pasta databases: 
### O arquivo "Database" serve como uma classe abstrata de modo que ao utilizar qualquer banco de dados, este deverá extender tal classe, mantendo assim a modularidade da aplicação e, ainda, essa extensão da classe também deverá atuar como uma classe abstrata, como é o caso do arquivo "DynamoDb", contendo apenas código genérico, para ser implementada utilizando-se das entidades e recursos que o sistema necessitar posteriormente.
<br/>

## Pasta repositories:
### Aqui ficarão as implementações dos bancos de dados, de modo que apenas o arquivo "index" desta pasta seja utilizado em handlers. Nesse repositório, os arquivos foram criados de modo que handlers, ao carregar o repositório, passe para o mesmo uma instância/conexão do banco de dados a ser utilizado, pois atualmente tal instância/conexão é provida pelo container da aplicação, necessitando que tal dependência seja passada até à implementação do banco de dados. Foi utilizado o recurso de colocar arquivos com o nome de "index" nas pastas para facilitar o trabalho com os mesmos. A classe "Funcionarios" dentro da pasta "dynamoDb" é uma implementação que estende a classe "DynamoDb".
<br/>
<br/>
<br/>
<br/>

# Handlers

## Os handlers da aplicação foram separados em pastas e arquivos de modo a facilitar caso a aplicação veja a crescer futuramente. Seus códigos ficaram com poucas linhas, devido à arquitetura da aplicação. Como já foi citado anteriormente, toda a lógica que trabalha com o banco de dados está nos repositórios que, quando carregados pelos handlers, recebem uma instância/conexão do banco de dados a ser utilizado.
<br/>
<br/>
<br/>
<br/>

# Serverless
## O arquivo de configuração dos recursos em nuvem está configurado para usar os servidores de São Paulo, contém configurações do dynamoDB, permissões da plataforma e do banco de dados e configurações tanto do banco de dados quanto do roteamento usando o API Gateway.