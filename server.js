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
        },
        review (parent , args , context) {
            return data.reviews.find(data => data.id == args.id)
        },
        game(parent , {id} , context){
            return data.games.find(data => data.id == id)
        },
        author(parent , {id} , context){
            return data.authors.find(data => data.id == id)
        }
    },
    Game: {
        // so parent is the data that i got from the resolvers games or game in Query 
        // adn that's used if i need related data example : game and review they related by game_id in reviews 
        reviews(parent){
            return data.reviews.filter(reviewdata => reviewdata.game_id == parent.id)
        }
    },
    Author:{
        reviews(parent){
            return data.reviews.filter(reviewdata => reviewdata.author_id == parent.id)
        },
    },
    Review: {
        game(parent){
            return data.games.find(gameData => gameData.id == parent.game_id)
        },
        author(parent){
            return data.authors.find(authorData => authorData.id == parent.author_id)
        },
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