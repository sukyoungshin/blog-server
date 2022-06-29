const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    postForHome: () => [...new Array(9)],
  }),
  Post: () => ({
    id: () => 1,
    title: () => "id labore ex et quam laborum",
    content: () =>
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    createDate: () => "2022-06-22",
    imgSrc: () => "/cat.webp",
    postUrl: () => "/",
    user: () => {
      return {
        id: 11,
        name: "suKyoung",
        userId: "2022-01",
      };
    },
    likeInfo: () => {
      return {
        numberOfLikes: 1,
        isLikeClickUser: false,
      };
    },
    commentInfo: () => {
      return {
        numberOfComments: 1,
      };
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
