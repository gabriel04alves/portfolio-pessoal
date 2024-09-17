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
        <a
          href="https://drive.usercontent.google.com/download?id=1ms_JlvmnYVl_VMZhvX8hNwdWax3JlbEz&export=download"
          target="_blank"
        >
          <i class="far fa-file"></i> Currículo
        </a>
      </div>
    </div>

    <div class="">
      <img
        src="https://avatars.githubusercontent.com/u/94906382?v=4"
        alt="Minha Foto"
      />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useTypewriter } from "../composables/useTypewriter";

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
            text: "<b>Olá, meu nome é Gabriel Alves...</b>",
            pause: 1500,
          },
        ],
        options: { loop: false, delay: 75 },
      },
      {
        ref: subtitle,
        strings: [
          {
            text: `Sou um desenvolvedor de software em constante aprimoramento. Aqui, você poderá descobrir mais sobre mim. <i class="fa-regular fa-lightbulb"></i>`,
            pause: 7500,
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
}

.texts_and_links-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 3vh;
  width: 75%;
  margin-top: 5vh;
  color: var(--font-color-main);
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
  color: var(--font-color-second);
}

.links-container {
  display: flex;
  flex-flow: wrap;
  gap: 3vw;
  text-decoration: none;
  color: var(--font-color-main);
}

.links-container a {
  font-size: 1rem;
  text-decoration: none;
  color: var(--font-color-main);
  transition: transform 0.3s ease;
}

.links-container a:hover {
  transform: translate(0.5vh, 0.5vh);
}

img {
  border-radius: 50%;
  height: 25vh;
}

@media (min-width: 901px) {
  section {
    flex-direction: row;
    height: 100vh;
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
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
