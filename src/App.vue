<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light">Smart Gallery</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <Search />
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <SearchResults />
    </v-content>
  </v-app>
</template>

<script>
import Search from './components/Search';
import SearchResults from './components/SearchResults';

export default {
  name: 'App',
  components: {
     Search,
     SearchResults
  },
  data () {
    return {
      //
    }
  }
}
</script>
