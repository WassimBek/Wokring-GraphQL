//import ApolloServer from @apollo/sever package for init the server
import {ApolloServer} from '@apollo/server'
// import startStandaloneServer for start runnig the server
import {startStandaloneServer} from '@apollo/server/standalone'

// import config for .env File
import { config } from 'dotenv';

import { typeDefs } from './Schema.js'

import { readFileSync } from 'fs'

config()

const data = JSON.parse(readFileSync("./db.json"))


const resolvers = {
    Query: {
        games() {
            return data.games
        },
        reviews() {
            return data.reviews
        },
        authors () {
            return data.authors 
        }
    }
}

const PORT = process.env.PORT || 3000
const server = new ApolloServer({
    // and that for how data structuring in graphQl
    typeDefs ,
    // and that for handeling request and query
    resolvers
})

const {url} =await startStandaloneServer(server , {
    listen : {port : PORT}
})

console.log("Server ready at port ",PORT)