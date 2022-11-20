<template>
  <Container>
    <header>
      <img class="logo" src="~/assets/images/logo.webp" alt="Premier Gaming" width="210" height="87" />
    </header>
    <slot />
  </Container>
</template>

<style lang="scss" scoped>
  main {
    min-height: 100vh;
    position: relative;
  }
  header {
    display: flex;
    justify-content: center;
    padding: 1rem;

    .logo {
      width: 210px;
      height: 87px;
      margin: 1rem;
    }
  }
</style>
