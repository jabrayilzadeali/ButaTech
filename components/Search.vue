<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" />

    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
		<nuxt-link class="search-results" :to="{ name: 'blogs-slug', params: { slug: article.slug }}">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('blogs')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  }
}
</script>