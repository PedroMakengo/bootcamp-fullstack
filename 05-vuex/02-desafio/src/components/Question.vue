<template>
  <div class="faq">
    <header class="col-a">
      <img src="@/assets/images/astronaut.svg" alt="" />
      <h2>Perguntas frequentes</h2>
      <p>Escolha a categoria desejada</p>
    </header>

    <ul class="itens">
      <li
        v-for="question in $allCategories"
        :key="question.id"
        @click="getQuestions(question.title)"
      >
        <img :src="getIcon(question)" alt="" />
        <span>{{ question.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories;
    },
  },

  created() {
    this.$store.dispatch("fetchCategories");
  },

  methods: {
    getIcon(category) {
      return require(`@/assets/images/${category.icon}`);
    },

    getQuestions(category) {
      this.$store.dispatch("fetchComponent", "QuestionList");
      this.$store.dispatch("fetchUniqueQuestion", category);
    },
  },
};
</script>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: 1fr;
  padding-inline: 1rem;
  grid-gap: 2rem;
}

.faq .col-a {
  height: 80%;
  padding-inline: 2rem;
}

.faq .itens {
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
}

.faq .itens li {
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: center;
  align-items: center;

  padding-block: 1rem;
  padding-inline: 2rem;
  transition: all 0.5s;

  cursor: pointer;
}

.faq .itens li:hover {
  width: 100%;
  background: #3f4452;
  transition: all 0.5s;

  border-radius: 0.2rem;
}

.faq .itens li span {
  font-weight: 400;
  margin-left: 0.8rem;
}

h2 {
  margin: 1rem 0 0.5rem 0;
}

li img {
  width: 50%;
}
</style>
