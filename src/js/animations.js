let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');

let titleType = new Typewriter(title, {
  loop: false,
  delay: 75,
});

let subtitleType = new Typewriter(subtitle, {
  loop: false,
  delay: 75,
});

titleType
  .pauseFor(1500)
  .typeString(
    '<b>Olá, meu nome é Gabriel Alves</b>'
  )
  .start();

subtitleType
  .pauseFor(7500)
  .typeString(
    `Sou um desenvolvedor de software em constante aprimoramento. Aqui, você poderá descobrir mais sobre mim.
      <img class="flag-subtitle-presentation" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg"></img>
      <img class="flag-subtitle-presentation" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"></img>`
  )
  .start(); 