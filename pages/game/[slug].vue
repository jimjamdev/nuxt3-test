<template>
  game slug: {{ $route.params.slug }}
  <pre>{{ data.game[0] }}</pre>
  <Image :image-id="data.game[0].header_image.id" />
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route?.params?.slug;
console.log('route', slug);
/**
 * We get the initial data from our graphql backend
 * Preferably we would use functions in the @nuxtjs/composition-api or /queries to get the data from the store
 * */
const query = gql`
  query getGame($slug: String!) {
    game(filter: { slug: { _eq: $slug } }) {
      id
      name
      slug
      header_image {
       id
      }
      game_translations {
        title
        thumbnail {
            id
        }
      }
    }
  }
`
const variables = { slug }
const { data } = await useAsyncQuery(query, variables)

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
