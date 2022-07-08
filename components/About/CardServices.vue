<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4" v-for="datos in proyectos" :key="datos.id">
        <v-card outlined elevation="4" shaped>
          <div class="text-center">
            <v-img
              :src="datos.src"
              :alt="datos.titulo"
              width="400px"
              height="200px"
              contain
            ></v-img>

            <h4 v-text="datos.titulo" class="mt-1 mb-2"></h4>
          </div>
        </v-card>
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
          id: '1',
          src: 'system.svg',
          titulo: 'Web development',
        },
        {
          id: '2',
          src: 'landing.svg',
          titulo: 'Landing Page',
        },
        {
          id: '3',
          src: 'ecommerce.svg',
          titulo: 'Ecommerce',
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
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.card > div {
  text-align: center;
  border-radius: 5px;
}
</style>