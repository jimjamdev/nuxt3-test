/**
 * Preferably great common functions for endpoints
 */

export const fetchGames = async ({ limit = 5}) => {
    const query = gql`
        query getGames($limit: Int!) {
        game(limit: $limit) {
          id
          name
          game_translations {
            title
          }
        }
      }`

    /** Maybe we clean up our data here, any transforms etc */
    /** Or create common function transformGames(query) */
    /** Should this go to composables/queries? */
    const data = {
        ...query,
    }

    return data
};
