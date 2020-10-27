<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-main>
      <Header />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/Header.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
})
</script>
