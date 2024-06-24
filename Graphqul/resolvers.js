import {quotes, users} from './fakedb.js'
import {randomBytes} from 'crypto'
import mongoose from 'mongoose';
import './models/User.js'
import './models/Quotes.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config.js';

const User = mongoose.model('User');
const Quote = mongoose.model('Quote');
const resolvers = {
    Query: {
        users: async () => await User.find({}),
        user:async (_,{_id}) => await User.findOne({_id}),
        quotes:async () => await Quote.find({}).populate('by', '_id firstName'),
        iquote:async (_,{by}) => await Quote.find({by}),
        myprofile: async (_,args, {userId}) => {
            if(!userId) throw new Error('You must be logged in');
            return await User.findOne({_id:userId})
        }
    }, 
    User: {
        quotes:async (users) => await Quote.find({by:users._id})
    },
    Mutation: {
        signupUser: async (_,{userNew}) => {
            const user = await User.findOne({email: userNew.email});
            if(user){
                throw new Error('User already exists with this email')
            };
            
           const hashedPassword = await bcrypt.hash(userNew.password, 10);

           const newUser = new User({
                ...userNew,
                password: hashedPassword
           });
           return await newUser.save();
        },
        signinUser: async  (_,{userSignin}) => {
            const user = await User.findOne({email: userSignin.email});
            if(!user){
                throw new Error('User does not exitsts with that eamil')
            };

            const isMatch = await bcrypt.compare(userSignin.password, user.password);
            if(!isMatch){
                throw new Error('Email or password is invalid')
            };
            const token = jwt.sign({userId: user._id}, JWT_SECRET);
            return {token};
        },
        createQuote: async (_,{name},{userId}) => {
            if(!userId) throw new Error('You must be logged in');
            const newQuote = new Quote({
                name,
                by:userId
            });
            await newQuote.save();
            return 'Quote saved successfully'
        }
    }
};

export default resolvers;