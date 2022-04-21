<template>
  <article>
    <!-- {{ page }} -->
    <h1>Okay</h1>
    <div id='side'>
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

<style>

article {
  display: flex;
}

div#side {
  font-size: 15px;
  background-color: green;
}

/* h1#bombadi {
  font-size: 500px;
} */

#side h1 {
  font-size: 500px;
}

h1#maraqlidi {
  padding: 5rem;
  font-size: 500px;
  background-color: yellow;
}
h1 {
  /* my custom h1 style */
  background-color: blue;
}

.nuxt-content{
  background-color: blue
}
</style>