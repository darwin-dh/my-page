<template>
  <div>
    <v-row
      v-for="datos in proyectos"
      :key="datos.id"
      class="d-flex align-center"
    >
      <v-col sm="5" cols="12">
        <img :src="require(`~/static/img/${datos.img}`)" alt="" width="100%" />
      </v-col>
      <v-col sm="6" cols="12" class="mx-auto text-center-cls">
        <h4 v-text="`${datos.title}-${datos.id}`"></h4>
        <blockquote v-text="datos.descripcion"></blockquote>
        <v-row class="d-flex align-center mt-1">
          <v-col>
            <h4>Modules</h4>
            <ul v-for="(modulo, i) in datos.modulos" :key="i">
              <li v-text="modulo"></li>
            </ul>
          </v-col>
          <v-col>
            <v-btn color="purple darken-1" dark width="150" rounded elevation="5">
              Learn More
              <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      proyectos: [
        {
          id: 1,
          title: 'Ecommer',
          img: 'galaPro.png',
          descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel provident culpa quas dolorem aliquid modi odit. Quo rerum ipsa assumenda maxime molestias facilis ducimus, rem voluptatibus tempore provident voluptatum. ',
          modulos: {
            name: 'facturacion1',
            name2: 'facturacion3',
            name3: 'facturacion4',
          },
        },
        {
          id: 2,
          title: 'Mecanicas',
          img: 'mecanciaPro.png',
          descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel provident culpa quas dolorem aliquid modi odit. Quo rerum ipsa assumenda maxime molestias facilis ducimus, rem voluptatibus tempore provident voluptatum. ',
          modulos: {
            name: 'facturacion1',
            name2: 'facturacion3',
            name3: 'facturacion4',
          },
        },
        {
          id: 3,
          title: 'Bike Ecommer',
          img: 'bikePro.png',
          descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel provident culpa quas dolorem aliquid modi odit. Quo rerum ipsa assumenda maxime molestias facilis ducimus, rem voluptatibus tempore provident voluptatum. ',
          modulos: {
            name: 'facturacion1',
            name2: 'facturacion3',
            name3: 'facturacion4',
          },
        },
        {
          id: 4,
          title: 'Barber shop',
          img: 'barberPro.png',
          descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel provident culpa quas dolorem aliquid modi odit. Quo rerum ipsa assumenda maxime molestias facilis ducimus, rem voluptatibus tempore provident voluptatum. ',
          modulos: {
            name: 'facturacion1',
            name2: 'facturacion3',
            name3: 'facturacion4',
          },
        },
        {
          id: 5,
          title: 'Consultorios Medicos',
          img: 'macPro7.png',
          descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel provident culpa quas dolorem aliquid modi odit. Quo rerum ipsa assumenda maxime molestias facilis ducimus, rem voluptatibus tempore provident voluptatum. ',
          modulos: {
            name: 'facturacion1',
            name2: 'facturacion3',
            name3: 'facturacion4',
          },
        },
      ],
    }
  },
  methods: {},
  computed: {},
  mounted() {},
}
</script>
<style scoped>
</style>