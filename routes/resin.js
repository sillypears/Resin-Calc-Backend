'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('@fastify/mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    url: process.env.DB_URL
  })

  fastify.get('/resins', async function(request, reply){
    if (request.query['test']) {
      return this.mongo.client.db('resins').collection('test-resins').find().toArray()
    }
    return this.mongo.client.db('resins').collection('resin').find().toArray()
  })

    fastify.register(require("@fastify/cors"), {
      origin: "*",
      methods: ["GET"]
    });
    fastify.get('/resins2', async function(request, reply){
      if (request.query['test']) {
        return this.mongo.client.db('resins').collection('test-resins').find().toArray()
      }
      return this.mongo.client.db('resins').collection('resin').find().toArray()
    })

}