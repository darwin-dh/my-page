<template>
  <v-app>
    <v-container>
      <h1>Form</h1>
      <v-row>
        <v-col lg="6">
          <v-form ref="form" lazy-validation width="300">
            <v-text-field v-model="asunto" placeholder="Asunto"></v-text-field>
            <v-text-field v-model="email" placeholder="Correo"></v-text-field>
            <v-textarea v-model="area" placeholder="text area"></v-textarea>
            {{ area }}
            <v-btn color="success" class="mr-4" @click="enviar()">
              Enviar
            </v-btn>

            <v-btn color="warning"> Reset Validation </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      asunto: '',
      email: '',
      area: '',
      header: `<header style="background:#0090fe; text-align:center;color:#fff" >
        <h1>Trantor tech</h1>
      
      </header>`,
    }
  },
  methods: {
    enviar() {
      this.$axios.$post('/mail/send', {
        subject: this.asunto,
        html: `${this.header}-${this.area}- ${this.email}`,
      })
      //
    },
  },
  computed: {},
  mounted() {},
}
</script>
<style scoped>
</style>