<template>
  <div class="service">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: { Type: String, required: true },
    description: { Type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.service {
  .title {
    color: #935e92;
    font-weight: bold;
  }
  .description {
    color: #293947;
    line-height: 1.5;
  }
}
</style>
