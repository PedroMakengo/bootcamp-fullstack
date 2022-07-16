<template>
  <div class="template">
    <header class="header">
      <a href="#">
        <img src="@/assets/images/arrow-left.svg" alt="Arrow Left" />
      </a>
      <div class="header-title">
        <h2>Basecamp</h2>
        <p>Selecione uma pergunta</p>
      </div>
      <img src="@/assets/images/rocket.svg" alt="" />
    </header>
    <div class="faq-list">
      <h1>Trabalhando</h1>
    </div>
  </div>
</template>

<style scoped>
.template {
  padding-inline: 2rem;
}

header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
}
</style>
