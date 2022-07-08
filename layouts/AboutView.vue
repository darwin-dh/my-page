<template>
  <v-app>
    <div class="contenedor">
      <v-container class="d-flex align-center justify-space-between">
        <section class="logo">
          <img :src="logo" alt="" width="110" />
        </section>
        <PermanentesMenu />
      </v-container>
      <section class="titulos mt-15 d-flex justify-space-center align-center">
        <article>
          <h1>HALIFAX WORDPRESS1 & WEB APP DEVELOPMENT</h1>
          <p>
            Specializing in custom theme development. If you're a business
            seeking a web presence or are looking to hire, contact me here.
          </p>
          <v-btn color="purple darken-1" dark rounded width="200px">
            Get Start
          </v-btn>
        </article>
      </section>
    </div>

    <article class="contenido pt-5">
      <h2 class="text-center mb-5">Services</h2>
      <AboutCardServices class="mb-5" />
    </article>
    <section class="">
      <v-divider></v-divider>
      <h2 class="text-center mt-5">System 1</h2>
      <article class="contenido">
       <AboutCardsProyectos/>
      </article>
    </section>
  </v-app>
</template>
<script>
export default {
  name: 'About',

  data() {
    return {
      logo: 'logo-Dh.png',
    }
  },
  methods: {},
  computed: {},
  mounted() {},
}
</script>
<style scoped>
.contenedor {
  /*   position: relative;
 */
  color: #fff;
  /*  background: linear-gradient(to bottom, #0660f0, #332179),url('../static/fondolinea.png');  */
  background: linear-gradient(to right, rgb(6, 96, 240), rgba(60, 30, 141, 0.819)),
    url('../static/fondo3.jpg');

  background-attachment: fixed;
  height: 456px;
  border-bottom-right-radius: 36%;
  border-bottom-left-radius: 36%;
}
.wave2 {
  height: 300px;
  color: #fff;
  background: linear-gradient(to bottom, #0660f0, #332179);
}
.titulos {
  width: 90%;
  margin: auto;
  max-width: 600px;
  text-align: center;
}
h1 {
  font-size: 50px;
}
.contenido {
  max-width: 1100px;
  width: 90%;
  margin: auto;

}
</style>