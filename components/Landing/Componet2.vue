<template>
  <v-container>
    <PermanentesMenu/>
        <section class="carousel">
      <v-carousel hide-delimiters :show-arrows="false" height="300" contain>
        <v-carousel-item :src="Image" contain></v-carousel-item>
      </v-carousel>
    </section>
    <section class="d-flex align-center">
      <div
        v-for="(img, i) in items"
        :key="i"
        class="d-inline-flex justify-center ml-1"
      >
        <v-img
          :src="img.src"
          alt=""
          max-width="200"
          @click="verimg(img)"
          class="verimg fill-height"
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
          src:'salud.png',
        },
        {
          src:'salud.png',
        },
        {
          src:'salud.png',
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
</style>