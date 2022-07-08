<template>

    <div class="dark">
      <h1>Practica page</h1>
      <div class="d-flex align-center">
        <v-card
          class="mx-auto my-12 "
          elevation="2"
          outlined
          v-for="(data, i) in datos"
          :key="i"
          max-width="370"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title v-text="data.title"></v-card-title>
          <v-btn class="white" fab mx-auto my-12>
            <nuxt-link :to="``" v-text="data.id"></nuxt-link>
          </v-btn>
          <v-divider></v-divider>
          <v-card-text v-text="data.body"> </v-card-text>
        </v-card>
      </div>
    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: '',
  layout: 'blog',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['obtener']),
  },
  computed: {
    ...mapState(['nombre', 'datos']),
  },
  async mounted() {
    await this.obtener()
  },
}
</script>
<style scoped>
</style>