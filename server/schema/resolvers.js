const { Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllMatchups: async () => {
      return Matchup.find({});
    },
    getMatchup: async(_parent, { matchupId}) => {
      return Matchup.findOne({ _id: matchupId });
    },
  },
}

module.exports = resolvers;
