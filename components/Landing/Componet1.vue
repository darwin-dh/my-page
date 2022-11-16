<template>
  <v-container>
    <section class="contenedor">
      <article class="textos">
        <h1>
          Front-end , Back-end Developer <br />
          & Mentor
        </h1>
        <p class="mt-10">
          I desing and code beautifully simple things , and I love what I do.
        </p>
      </article>
      <v-btn
      to="/about"
        class="blue darken-1"
        color="white"
        dark
        elevation="3"
        rounded
        width="200"
      >
        See more <v-icon class="ml-5">mdi-arrow-right</v-icon>
      </v-btn>
      <article class="d-flex front_back justify-space-between">
        <div>
          <h4>
            Front-end
            <v-icon class="ml-2">mdi-application-brackets-outline</v-icon>
          </h4>
          <blockquote>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            <br />
            architecto est, nihil sint molestiae rep
          </blockquote>
        </div>
        <div>
          <h4>
            Back-End
            <v-icon class="ml-2">mdi-server</v-icon>
          </h4>
          <blockquote>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            <br />
            architecto est, nihil sint molestiae rep
          </blockquote>
        </div>
      </article>
    </section>
  </v-container>
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
.contenedor {
  display: flex;
  flex-direction: column;
  margin-top: 200px;
}
.textos h1 {
  font-size: 2.8rem;
  line-height: 1;
}
.textos p {
  font-weight: 500;
}
.purpleP {
  margin-top: 50px;
}
.front_back {
  margin-top: 120px;
}
.front_back blockquote {
  font-size: 14px;
  font-weight: 500;
}
</style>