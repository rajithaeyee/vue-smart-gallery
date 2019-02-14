<template>
    <v-flex xs12 sm6 md3>
          <v-text-field
            label="Search"
            v-model="searchKey"
            @change="search()"
          ></v-text-field>
    </v-flex>
</template>
<script>
import { EventBus } from './../main.js';
export default {
    data() {
      return {
        searchKey: "",
      };
    },
    methods: {
     search() {
        EventBus.$emit("search", this.searchKey);
       }
    },
  };
</script>