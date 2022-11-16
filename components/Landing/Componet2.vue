<template>
  <v-container class="d-flex flex-column justify-space-between align-end alto">
    <PermanentesMenu />
    <section class="carousel">
      <v-carousel hide-delimiters :show-arrows="false" height="300" contain>
        <v-carousel-item :src="Image" contain></v-carousel-item>
      </v-carousel>
    </section>
    <section class="d-flex align-center px-5 py-2 rounded-lg">
      <div
        v-for="(img, i) in items"
        :key="i"
        class="d-inline-flex justify-center ml-1 rounded-lg"
        :class="img.fondo"
      >
        <div class="rounded-xl d-flex align-center">
          <v-img
            :src="img.src"
            max-width="100"
            @click="verimg(img)"
            class="verimg fill-height rounded-xl"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-text class="caption white--text" c text>
            {{ img.text }}</v-text
          >
        </div>
      </div>
      <div class="ml-10" width="100px" height="100" dark>
        <v-btn color="white" rounded text elevation="6">
          learn more
          <v-icon> mdi-laptop</v-icon>
        </v-btn>
      </div>
    </section>
  </v-container>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      foto: '',
      Image: '',
      items: [
        {
          src: 'salud.png',
          text: 'lore iasd asda das dad2sjkdhjs ouayaa jjjajajnj goila',
          fondo: 'greePer',
        },
        {
          src: 'salud.png',
          text: 'lore iasd asda das dad2sjkdhjs ouayaa jjjajajnj goila',
          fondo:"bluePer"
        },
        {
          src: 'salud.png',
          text: 'lore iasd asda das dad2sjkdhjs ouayaa jjjajajnj goila',
          fondo: "yelloPer"
        },
      ],
    }
  },
  methods: {
    ver(id) {
      console.log('id', id)
    },
    verimg(img) {
      this.Image = img.src
    },
  },
  computed: {},
  mounted() {},
}
</script>
<style scoped>
.alto {
  height: 100vh;
}
.carousel {
  max-width: 1000px;
  width: 90%;
  margin: auto;
  margin-top: 170px;
}
.verimg {
  opacity: 0.8;
  margin: auto;
}
.verimg:hover {
  opacity: 1;
  cursor: pointer;
}
.bg-balck {
  background: rgba(255, 255, 255, 0.473);
}
.greePer{
  background: #04525659;
}
.bluePer{
  background: #9ab8baa1;
}
.yelloPer{
  background: #ddf7f883;
}
</style>