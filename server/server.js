const { gql } = require('apollo-server');
const { ApolloServer } = require('apollo-server');
const casual = require("casual").functions();

var array_of = ( name, address, email, phone) => {
	var result = [];
	for (var i = 0; i < 2000; i++) {
		result.push({name: name(), address: address(), email: email(), phone: phone()});
	}
	return result;
};

const typeDefs = gql`
    type Person {
         name: String
         address: String
         email: String
         phone: String
        }
      type Query {
        Person: [Person]
      }
    `
  const resolvers = {
    Query: {
      Person: () => array_of(casual.name, casual.address,casual.email, casual.phone )
    },
  };
  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen({ port: 9000 }).then(serverInfo => console.log(`Server running at ${serverInfo.url}`));