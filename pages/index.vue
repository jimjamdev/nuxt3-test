<template>
  <div>
    <p>Content inside <code>default</code> layout</p>
    <Input name="search" />
    <ul>
    <li v-for="game in games.game">
      {{ game.name }}
    </li>
    </ul>
    <Button disabled>Button</Button>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import Input from "~/components/input/input.vue";

const query = gql`
  query getGames($limit: Int!) {
    game(limit: $limit) {
      id
      name
    }
  }
`
const variables = { limit: 5 }
const { data: games } = await useAsyncQuery(query, variables)
</script>
