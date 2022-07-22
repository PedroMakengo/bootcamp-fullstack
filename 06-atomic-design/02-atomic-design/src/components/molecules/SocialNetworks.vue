<template>
  <div class="social-networks">
    <SocialLink
      name="Pedro Makengo"
      icon="github.svg"
      to="https://github.com/PedroMakengo"
    />
    <SocialLink
      name="Pedro Makengo"
      icon="twitter.svg"
      to="https://github.com/PedroMakengo"
    />
    <SocialLink
      name="Pedro Makengo"
      icon="facebook.svg"
      to="https://github.com/PedroMakengo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SocialLink } from "@/components/atoms";

export default defineComponent({
  components: { SocialLink },
});
</script>

<style lang="scss" scoped>
.social-networks {
  display: grid;
  grid-gap: 1rem;
}
</style>
