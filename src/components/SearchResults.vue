<template>
    <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex
                v-for="card in imageList"
                :key="card.id"
                v-bind="{ [`md${card.flex}`]: true }"
              >
                <v-card>
                  <v-img
                    :src="card.urls.regular"
                    height="500px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
  
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
</template>

<script>

import { EventBus } from './../main.js';

export default{
    data(){
        return{
            imageList: [],
            searchTerm: "",
        }
    },
    mounted() {
    this.fetch();
     EventBus.$on("search",this.filterImages);
  },
  methods: {
      fetch(){
          this.$http.get('https://api.unsplash.com/photos/?client_id=0bdaecbc9af5c906c81b97f47606b789f9749797191d28600bbaa4f1c0332684').then((res)=>{
            this.imageList = res.body;
        });
      },
      filterImages(sk){
          if(sk.length<=2 && this.imageList.length<1){
              this.fetch();
          }else{
             this.$http.get('https://api.unsplash.com/search/photos?client_id=0bdaecbc9af5c906c81b97f47606b789f9749797191d28600bbaa4f1c0332684&page=1&query='+sk).then(res=>{
                  //console.log(res);
                 this.imageList = res.body.results;
             });
          }
      }
  }
}
</script>