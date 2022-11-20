<template>
    <input type="text" v-model="search" placeholder="Search games..." /> <pre>{{ search }}</pre>
  <Grid>
      <!-- This is our client loaded content that comes from filtered games -->
      <div v-if="search&&filteredGames().length !== 0" v-for="game in filteredGames()" :key="game">
        <game-thumbnail :game="game" :width="214" :height="214" />
      </div>
      <div v-else-if="search&&filteredGames().length === 0">
        <p>No games found for {{ search }}}</p>
      </div>
      <!-- This is our default view, this has to be here for our default server side rendered content/speed/SEO -->
      <div v-else v-for="game in games.game" :key="game.id">
        <game-thumbnail :game="game" :width="214" :height="214" />
      </div>
  </Grid>
</template>

<script lang="ts" setup>
/**
 * We get the initial data from our graphql backend
 * Preferably we would use functions in the @nuxtjs/composition-api or /queries to get the data from the store
 * This would allow us to also use fragments and not have to worry about the data we get back
 * */
const query = gql`
  query getGames($limit: Int!) {
    game(limit: $limit) {
      id
      name
      slug
      game_translations {
        title
        thumbnail {
            id
        }
      }
    }
  }
`
const variables = { limit: 10 }
const { data: games } = await useAsyncQuery(query, variables)

/** test Pinia - seems to be buggy/crashing */
/*const gamesStore = useGameStore();

/* We can use the filtered data in our template. Client side only */
let search = ref();
function filteredGames() {
  const gamesArray = games._value.game // for some reason we can't use games.game - thanks vue
  const searchValue = search.value ? search.value.toLowerCase() : undefined;
  return searchValue && gamesArray.filter(game => game.name.toLowerCase().includes(searchValue));
}

</script>

<style lang="scss" scoped>
/** We need to create an input component, not here */
  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: $bodyTextColor;
    background-color: $bodyBackgroundColor;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
</style>
