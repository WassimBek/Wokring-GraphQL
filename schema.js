export const typeDefs = `#graphql

    type Game {
        id: ID!
        title: String! 
        platform: [String!]!
        # Adding ! if you want something required
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews: [Review]
        #adding querry variable for single data         
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    #Mutation is for delete or post or put requests 

    type Mutation {
        # deleteGame is for
        deleteGame(id: ID!): Game
        addGame(game: addGameInput): Game!
    }
    input addGameInput {
        title: String! 
        platform: [String!]!
    }
`
