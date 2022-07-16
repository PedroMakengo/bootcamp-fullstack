<template>
  <section class="section">
    <div class="card">
      <component :is="view" />
    </div>
  </section>
</template>

<script>
import Question from "@/components/Question.vue";
import QuestionList from "@/components/QuestionList.vue";
import ResponseQuestion from "@/components/ResponseQuestion.vue";
export default {
  data() {
    return {
      view: "Question",
    };
  },
  components: {
    Question,
    QuestionList,
    ResponseQuestion,
  },
};
</script>

<style scoped>
.section {
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  justify-content: center;
  align-items: center;
}

.card {
  width: 25%;

  display: grid;
  margin: 0 auto;
  border-radius: 0.5rem;

  background: #292d30;

  color: #fff;
  padding-block: 2rem;
}
</style>
