<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-card v-for="item in items" :key="item.title" width="200px" height="260px" class='mx-2 my-2'>
        <v-card-title primary-title>
          <div>
            <p class="mb-0">{{item.title}}</p>
          </div>
        </v-card-title>
        <v-card-media :src="require('@/assets/card.jpeg')" height="150px" ></v-card-media>
        <v-card-actions>
          <v-btn icon >
            <v-icon small color='grey'>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color='grey'>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color='grey'>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters('presentations', {
    items: 'getList'
  }),
  created () {
    this.$store.dispatch('presentations/getPresentations')
  },
  name: 'Edetailers'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
