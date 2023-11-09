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
        games: [Game]
        authors: [Author]
    }

`
