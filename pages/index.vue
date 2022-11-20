<template>
  <div>
    <p>Content inside <code>default</code> layout</p>
    <input type="text" v-model="search" placeholder="Search games..." /> <pre>{{ search }}</pre>
    <ul>
      <li v-for="game in games.game" :key="game.id">
        <game-thumbnail :name="game.name" />
      </li>
      </ul>
    <h2>Searched</h2>
<!--    <ul>
    <li v-for="game in filteredGames()" :key="game">
      {{ game.name }}
    </li>
      <li class="item error" v-if="search&&!filteredGames().length">
        <div>No results found!</div>
      </li>
    </ul>-->
    <Button disabled>Button</Button>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const store = useStore()
console.warn('store', store)

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

console.warn('games', JSON.stringify(games, null, 2))

/* We can use the filtered data in our template */
let search = ref();
/*function filteredGames() {
  const gamesArray = games._value.game
  console.warn('games', JSON.stringify(gamesArray));
  return gamesArray
}*/

</script>
