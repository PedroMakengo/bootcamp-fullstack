<template>
  <section class="section">
    <div class="card">
      <transition name="fade" appear mode="out-in">
        <component :is="$currentView" />
      </transition>
    </div>
  </section>
</template>

<script>
import Question from "@/components/Question.vue";
import QuestionList from "@/components/QuestionList.vue";
import ResponseQuestion from "@/components/ResponseQuestion.vue";

export default {
  computed: {
    $currentView() {
      return this.$store.getters.$currentView;
    },
  },

  created() {
    this.$store.dispatch("fetchComponent", "Question");
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

  /* background: #333844; */
  background-image: linear-gradient(180deg, #3f4452, #26282c);

  color: #fff;
  padding-block: 2rem;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
