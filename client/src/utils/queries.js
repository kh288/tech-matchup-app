import { gql } from "@apollo/client";

export const QUERY_MATCHUPS = gql`
  query getAllMatchups {
    matchup {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_SINGLE_MATCHUP = gql`
  query getMatchup($matchupId: ID!) {
    matchup(matchupId: $matchupId) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
