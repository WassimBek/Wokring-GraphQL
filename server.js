//import ApolloServer from @apollo/sever package for init the server
import {ApolloServer} from '@apollo/server'
// import startStandaloneServer for start runnig the server
import {startStandaloneServer} from '@apollo/server/standalone'

const PORT = process.env.PORT || 3000
const server = new ApolloServer({

})

const {url} =await startStandaloneServer(server , {
    listen : {port : PORT}
})

console.log("Server ready at port ",PORT)