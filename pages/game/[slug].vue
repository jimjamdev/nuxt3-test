<template>
  <section class="background-image">
    <h1 class="banner-title">{{ translations.title }}</h1>
    <Image :image-id="game.header_image.id" width="1920" height="900" fit="cover" quality="95" />
  </section>
 <article class="content">
   <h2 class="header">{{ translations.title }}</h2> <!-- Should be a heading component -->
   <p>{{ translations.body }}</p> <!-- Should be a paragraph component -->
 </article>
  <footer>
    <NuxtLink to="/" class="button">Back</NuxtLink>
  </footer>
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
        body
        body_html
        thumbnail {
            id
        }
      }
    }
  }
`
const variables = { slug }
const { data } = await useAsyncQuery(query, variables)
const game = data._value.game[0]
const translations = game.game_translations[0]

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
 article.content {
   z-index: 1;

   h2.header {
     display: flex;
     align-content: center;
     align-self: center;
     text-align: center;
     font-size: 2rem;
     text-decoration: underline;
   }

 }
 section.background-image {
   position: relative;
   width: 100%;
   z-index: 0;
   h1.banner-title {
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
     position: absolute;
     height: 100%;
     width: 100%;
     margin: 0;
     padding: 0;
     text-transform: uppercase;
     z-index: 1;
   }
   .image {
     width: 100%;
     height: 100%;
   }
 }
</style>
