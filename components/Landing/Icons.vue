<template>
  <div class="iconos ">
    <section class="btn_1">
      <v-btn icon class="">
        <v-icon color="white">mdi mdi-home </v-icon>
      </v-btn>
    </section>
    <section class="iconos_redes d-flex flex-column">
      <v-btn icon class="blue-grey darken-3 mb-3">
        <v-icon color="white"> mdi-facebook </v-icon>
      </v-btn>
      <v-btn icon class="blue-grey darken-3 mb-3">
        <v-icon color="white"> mdi-instagram </v-icon>
      </v-btn>
      <v-btn icon class="blue-grey darken-3">
        <v-icon color="white"> mdi-github </v-icon>
      </v-btn>
    </section>

    <section class="btn_1">
      <!--       <v-btn icon class="">
        <v-icon color="white" @click="vercaja"> mdi-format-align-justify </v-icon>
      </v-btn> -->
    </section>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {},
}
</script>
<style scoped>
.iconos {
  height: 98.1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0.1rem;

}
.iconos_redes {
  padding-top: 250px;
}
</style>