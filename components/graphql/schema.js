'use strict';

const dataStore = require('./dataStore'),
  Graphql = require('graphql'),
  productType = new Graphql.GraphQLObjectType({
    name: 'Product',
    fields:{
      productid: {type: new GraphQLNonNull(Graphql.GraphQLString)},
      description: {type: new GraphQLNonNull(Graphql.GraphQLString)},
      price: {type: Graphql.GraphQLFloat}
    }
  }),
  queryType =  new Graphql.GraphQLObjectType({
    name: 'Query',
    description: 'query products',
    fields:{
      user: {
        type: new Graphql.GraphQLList(productType),
        args: {
          productid: {type: Graphql.GraphQLString}
        },
        resolve: (source, args => dataStore.getProduct(args.productid))
      }
    }
  }),

  mutationType =  new Graphql.GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation of the products',
    fields: {
      addProduct: {
        type: productType,
        args:{
          productid: { type: new GraphQLNonNull(Graphql.GraphQLString) },
          description: { type: new GraphQLNonNull(Graphql.GraphQLString) },
          price: { type: Graphql.GraphQLFloat }
        },
        resolve: (source, args) => dataStore.addProduct(args)
      },
      deleteProduct: {
        type: productType,
        args: {
          productid: {type: new Graphql.GraphQLNonNull(Graphql.GraphQLString)}
        },
        resolve: (source, args) => dataStore.deleteProduct(args.productid)
      }
    }
  });

  module.exports = new Graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
  });