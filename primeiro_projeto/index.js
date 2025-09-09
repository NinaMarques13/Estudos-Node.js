import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { create } from 'node:domain'
import { title } from 'node:process'
import { describe } from 'node:test'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    database.create({
        title: 'vlog 01',
        description: 'o primeiro vlog',
        duration: 320,
    })
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Olá mundo!'
})

server.put('/videos/:id', () => {
    return 'Salve!'
})
server.delete('/videos/:id', () => {
    return 'Salve!'
})


server.listen({
    port: 3333,
})