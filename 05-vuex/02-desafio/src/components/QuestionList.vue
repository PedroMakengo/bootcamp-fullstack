<template>
  <div class="template">
    <header class="header">
      <a href="#" @click="getCurrentComponent('Question')">
        <img src="@/assets/images/arrow-left.svg" alt="Arrow Left" />
      </a>
      <div class="header-title">
        <h2>Testando</h2>
        <p>Selecione uma pergunta</p>
      </div>
      <img src="@/assets/images/rocket.svg" alt="" />
    </header>
    <ul class="faq-list">
      <li
        v-for="question in $allQuestions"
        :key="question.id"
        @click="getCurrentComponent('ResponseQuestion', question.id)"
      >
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    $allQuestions() {
      return this.$store.getters.$allQuestions;
    },
    $allCategories() {
      return this.$store.getters.$allCategories;
    },
  },
  created() {
    this.$store.dispatch("fetchUniqueQuestion");
  },

  methods: {
    getCurrentComponent(component, id) {
      this.$store.dispatch("fetchComponent", component);
      this.$store.dispatch("fetchResponse", id);
    },
  },
};
</script>

<style scoped>
.faq-list {
  margin-top: 2rem;
}

.faq-list li {
  display: grid;
  padding-block: 1rem;
  padding-inline: 1rem;
  transition: all 0.5s;
  cursor: pointer;
}

.faq-list li:hover {
  background: #3f4452;
  transition: all 0.5s;

  border-radius: 0.2rem;
}
</style>
