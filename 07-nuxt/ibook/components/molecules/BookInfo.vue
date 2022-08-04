<template>
  <div class="book-info">
    <h2>{{ $book.title }}</h2>

    <div class="book-description" v-html="$book.description"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style scoped></style>
