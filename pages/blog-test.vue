<template>
  <article>
    <!-- {{ page }} -->
    <h1>Okay</h1>
    <div class='side'>
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  }
}
</script>

<style scoped>

article {
  display: flex;
}

.side {
  width: 24px;
  padding: 5rem;
}
h1 {
  /* my custom h1 style */
  background-color: blue;
}
</style>