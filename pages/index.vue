<template>
  <div>
    <p>Content inside <code>default</code> layout</p>
    <input type="text" @change="handleSearch" /> {{ search}}
    <ul>
    <li v-for="game in games.game" @keyup="handleSearch">
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

const handleSearch = (e: any) => {
  console.log(e.target.value)
}

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
