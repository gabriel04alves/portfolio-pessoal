<template>
    <section id="section-contacts">
        <h1>
            <b>
                Contatos
            </b>
        </h1>
        <div>
            <a href="https://wa.me/5547984950238">
                <i class="fab fa-whatsapp"></i>
                <p>+55 (47) 98495-0238</p>
            </a>
            <a href="mailto:gabriel52.alves@gmail.com">
                <i class="far fa-envelope icon"></i>
                <p>gabriel52.alves@gmail.com</p>
            </a>
            <a href="https://linkedin.com/in/gabriel04alves">
                <i class="fab fa-linkedin"></i>
                <p>/gabriel04alves</p>
            </a>
            <a href="https://github.com/gabriel04alves">
                <i class="fab fa-github"></i>
                <p>/gabriel04alves</p>
            </a>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
section {
    display: flex;
    flex-flow: column;
    padding: 10%;
    gap: 2vh;
}

h1 {
    font-size: 1.8rem;
    color: var(--color-text-primary);
}

a {
    display: flex;
    align-items: center;
    gap: 1vw;
    font-size: 1.3rem;
    margin: 1.2vh 0 0 0;
    height: 3vh;
    width: fit-content;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: transform 0.3s ease;
}

a:hover {
    transform: translate(0.5vh, -0.5vh);
}


@media (min-width: 600px) and (max-width: 1365px) {
    section {
        padding: 5%;
    }

    a {
        margin: 0;
    }
}

@media (min-width: 1366px) {
    section {
        padding: 5%;
    }
}
</style>