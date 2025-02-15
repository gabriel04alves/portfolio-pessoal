<template>
  <section id="section-about_me">
    <h1 class="title">
      <b> Sobre mim </b>
    </h1>
    <p>
      Atualmente, sou estudante de Sistemas de Informação e tenho formação técnica em Informática. Desenvolvo com
      JavaScript e TypeScript, utilizando o framework Vue.js, além de Python com Django Rest Framework. Além disso, me
      interesso por arquitetura de software, inteligência artificial, análise de dados e desenvolvimento pessoal. Estou
      sempre em busca de aprendizado e novos desafios na área de tecnologia.
    </p>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  display: flex;
  gap: 3vh;
  flex-flow: column;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
  padding: 15% 10%;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
  font-weight: light;
  color: var(--color-text-focus);
}

i {
  font-size: 1rem;
}

@media (min-width: 600px) {
  section {
    padding: 5%;
  }

  p {
    font-size: 1.3rem;
    width: 70%;
  }
}
</style>
