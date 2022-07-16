<template>
  <div class="faq">
    <div class="col-a">
      <img src="@/assets/images/astronaut.svg" alt="" />
      <h2>Perguntas frequentes</h2>
      <p>Escolha a categoria desejada</p>
    </div>

    <ul class="itens">
      <li>
        <img src="@/assets/images/rocket.svg" alt="" />
        <span>Basecamp</span>
      </li>
      <li>
        <img src="@/assets/images/astronaut-helmet.svg" alt="" />
        <span>Bootcamp</span>
      </li>
      <li>
        <img src="@/assets/images/student-hat.svg" alt="" />
        <span>Cataline</span>
      </li>
      <li>
        <img src="@/assets/images/partnership.svg" alt="" />
        <span>Parcerias</span>
      </li>
    </ul>
  </div>
</template>

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
  background: #31373f;
  transition: all 0.5s;

  border-radius: 0.2rem;
}

.faq .itens li span {
  font-weight: 500;
  margin-left: 0.8rem;
}

h2 {
  margin: 1rem 0 0.5rem 0;
}

li img {
  width: 50%;
}
</style>
