<template>
  <div>
    <p>Content inside <code>default</code> layout</p>
    <pre>
      {{ data }}
    </pre>
    <Button disabled>Button</Button>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const query = gql`
  query getGames($limit: Int!) {
    game(limit: $limit) {
      id
      name
    }
  }
`
const variables = { limit: 5 }

const { data } = await useAsyncQuery(query, variables)
</script>
