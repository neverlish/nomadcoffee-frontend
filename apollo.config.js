module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: 'backend',
      url: 'https://instaclone-backend-neverlish.herokuapp.com/graphql',
    }
  }
}