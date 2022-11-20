<template>
  <div>
    <p>Content inside <code>default</code> layout</p>
    <input type="text" v-model="search" placeholder="Search games..." /> <pre>{{ search }}</pre>
    <h2>Searched</h2>
      <div v-if="search&&filteredGames().length !== 0" v-for="game in filteredGames()" :key="game">
        <game-thumbnail :game="game" :width="50" :height="50" />
      </div>
      <div v-else-if="search&&filteredGames().length === 0">
        <p>No games found for {{ search }}}</p>
      </div>
      <div v-else v-for="game in games.game" :key="game.id">
        <game-thumbnail :game="game" :width="50" :height="50" />
      </div>
    <Button disabled>Button</Button>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
    <pre>{{ gamesStore }}</pre>
  </div>
</template>

<script lang="ts" setup>

/** We get the initial data from our graphql backend */
const query = gql`
  query getGames($limit: Int!) {
    game(limit: $limit) {
      id
      name
      game_translations {
        title
        thumbnail {
            id
        }
      }
    }
  }
`
const variables = { limit: 5 }
const { data: games } = await useAsyncQuery(query, variables)

/** test Pinia */
/*const gamesStore = useGameStore();

/* We can use the filtered data in our template */
let search = ref();
function filteredGames() {
  const gamesArray = games._value.game // for some reason we can't use games.game - thanks vue
  const searchValue = search.value ? search.value.toLowerCase() : undefined;
  return searchValue && gamesArray.filter(game => game.name.toLowerCase().includes(searchValue));
}

</script>
