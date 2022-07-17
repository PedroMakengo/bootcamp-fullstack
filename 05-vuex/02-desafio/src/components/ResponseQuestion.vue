<template>
  <div class="template">
    <header class="header">
      <a href="#" @click="getCurrentComponent('QuestionList')">
        <img src="@/assets/images/arrow-left.svg" alt="Arrow Left" />
      </a>
      <div class="header-title">
        <p>Basecamp é pra mim ?</p>
      </div>
    </header>

    <div class="response">
      <p>{{ $response }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $response() {
      return this.$store.getters.$response;
    },
  },
  created() {
    this.$store.dispatch("fetchResponse");
  },
  methods: {
    getCurrentComponent(component) {
      this.$store.dispatch("fetchComponent", component);
    },
  },
};
</script>

<style>
.response {
  margin-top: 3rem;
}
</style>
