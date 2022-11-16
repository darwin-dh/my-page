<template>
  <v-app>
    <v-main class="white">
      <v-row>
        <div class="fijo blue-grey grey darken-4">
          <LandingIcons/>
        </div>

        <v-col class="fondoGris pl-15" sm="6" cols="12">
          <LandingComponet1 />
        </v-col>
        <v-col class="fondo_black" sm="6" cols="12">
          <LandingComponet2 />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {

    }
  },
}
</script>
<style scoped>
.fijo {
  width: 20px;
  padding: 30px;
  position: fixed;
}
.fondo_black {
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(35, 38, 55, 0.8),
      rgba(35, 38, 55, 0.179)
    ),
    url('../static/city.jpg');
}
</style>>


