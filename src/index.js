const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  PostForHome: () => ({
    id: () => 1,
    title: () => "어쩌구",
    content: () => "저쩌구",
    createDate: () => "2022-06-22",
    imgSrc: () => "/dd",
    postUrl: () => "/zz",
    user: () => {
      return {
        id: 11,
        name: "suKyoung",
        userId: "zzzz01",
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
