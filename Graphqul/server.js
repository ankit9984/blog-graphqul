import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './schemaGql.js';
import resolvers from './resolvers.js';
import mongoose from 'mongoose';
import { JWT_SECRET, MONGO_URI } from './config.js';
import './models/User.js';
import './models/Quotes.js';
import jwt from 'jsonwebtoken';

// Connect to MongoDB
mongoose.connect(MONGO_URI);

// Set up Mongoose event listeners
mongoose.connection.on('connected', () => {
    console.log('Connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database', err);
});

//Middleware
const context = ({req}) => {
    const {authorization} = req.headers;
    if(authorization){
        const {userId} = jwt.verify(authorization, JWT_SECRET);
        return {userId};
    }
}

// Create Apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
