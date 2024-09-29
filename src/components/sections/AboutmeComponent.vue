<template>
  <section id="section-about_me">
    <h1 class="title">
      <b> Sobre mim </b>
    </h1>
    <p>
      Sou estudante de Sistemas de Informação e já me formei como técnico em
      Informática. Estudo tecnologia diariamente com o objetivo de me tornar um
      desenvolvedor de software. Possuo conhecimentos em JavaScript e seus
      principais frameworks, Python e Git, além de hardware e virtualização.
      Tenho experiência na área de suporte, o que me proporcionou competências
      no atendimento ao cliente. No momento, além dos estudos em programação,
      tenho interesse em temas como arquitetura limpa, gestão de pessoas e
      desenvolvimento pessoal.
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
