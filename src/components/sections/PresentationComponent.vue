<template>
  <section id="section-presentation">
    <div class="texts_and_links-container">
      <div class="title_and_desc-container">
        <h1 ref="title"></h1>
        <p ref="subtitle"></p>
      </div>

      <div class="links-container">
        <a href="https://github.com/gabriel04alves" target="_blank">
          <i class="fab fa-github"></i> Github
        </a>
        <a href="https://linkedin.com/in/gabriel04alves" target="_blank">
          <i class="fab fa-linkedin"></i> Linkedin
        </a>
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1EVhcHgJ0QDU9li_SDxGYnCjTsHVWWZKQ&export=download"
          target="_blank">
          <i class="far fa-file"></i> Currículo
        </a>
      </div>
    </div>

    <div class="">
      <img src="https://avatars.githubusercontent.com/u/94906382?v=4" alt="Minha Foto" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useTypewriter } from "../../services/useTypewriter";

export default {
  name: "PresentationComponent",
  setup() {
    const title = ref(null);
    const subtitle = ref(null);

    useTypewriter([
      {
        ref: title,
        strings: [
          {
            text: "<b>Opa, meu nome é Gabriel Alves...</b>",
            pause: 1500,
          },
        ],
        options: { loop: false, delay: 75 },
      },
      {
        ref: subtitle,
        strings: [
          {
            text: `Atualmente, sou estudante de Sistemas de Informação e tenho formação técnica em Informática. Desenvolvo com
      JavaScript e TypeScript, utilizando o framework Vue.js, além de Python com Django Rest Framework. Também, me
      interesso por arquitetura de software, inteligência artificial, análise de dados e desenvolvimento pessoal.`,
            pause: 4900,
          },
        ],
        options: { loop: false, delay: 75 },
      },
    ]);

    return {
      title,
      subtitle,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  height: auto;
  margin-bottom: 5vh;
  padding: 8vh 6%;
}

.texts_and_links-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 4vh;
  width: 95%;
  margin-top: 5vh;
  color: var(--color-text-primary);
}

.title_and_desc-container {
  display: flex;
  flex-flow: column wrap;
  gap: 1vh;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.links-container {
  display: flex;
  flex-flow: wrap;
  gap: 5vw;
  text-decoration: none;
  color: var(--color-text-primary);
}

.links-container a {
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: transform 0.3s ease;
}

.links-container a:hover {
  transform: translate(0.5vh, 0.5vh);
}

img {
  border-radius: 50%;
  height: 25vh;
}

@media (min-width: 600px) and (max-width: 1365px) {}

@media (min-width: 1366px) {
  section {
    flex-direction: row;
    height: 96vh;
    margin-top: 0;
    padding: 0;
  }

  img {
    height: auto;
  }

  .texts_and_links-container {
    width: 50%;
    margin-top: 0;
    align-items: start;
  }

  .links-container a {
    font-size: 1.3rem;
  }

  .links-container {
    gap: 3vw;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
