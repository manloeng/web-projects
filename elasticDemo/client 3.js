const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200',  log: 'error' })

module.exports = client;