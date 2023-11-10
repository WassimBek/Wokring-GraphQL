export const typeDefs = `#graphql

    type Game {
        id: ID!
        title: String! 
        platform: [String!]!
        # Adding ! if you want something required
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
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

`
