<script lang="ts">
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import Repos from "@/components/Repos.vue";
import Loader from "@/components/Loader.vue";
import {validatePage} from "@/functions/functions";

export default {
  components: {Loader, Repos, Card, Search},

  data() {
      return {
        github_data: {},
        github_repos: {}
      }
  },

  methods: {
    github_profile(e: {}) {
      this.github_data = e
      document.querySelector('.card')?.removeAttribute('style')
    },

    github_repositories(r: {}) {
      this.github_repos = r
    },

    search_page(e: {}) {
      validatePage(e);
    },

    repos_page(e: {}) {
      validatePage(e)
    },

    repos_hide(e: {}){
      validatePage(e)
    }
  }
}
</script>

<template>
  <main>
    <Search @github_profile="github_profile"
            @github_repositories="github_repositories"/>

    <Card @search_page="search_page"
          @repos_page="repos_page"
          @repos_hide="repos_hide"
          :data="github_data"/>

    <Repos :repos="github_repos"/>
  </main>
</template>

<style scoped>

</style>