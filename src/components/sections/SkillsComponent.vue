<template>
    <section id="section-stack">
        <h1>
            <b> Stack </b>
        </h1>
        <ul>
            <li>
                <i class="fab fa-html5"></i>
                <p class="skill-name"></p>
            </li>
            <li>
                <i class="fab fa-css3"></i>
                <p class="skill-name"></p>
            </li>
            <li>
                <i class="fab fa-js"></i>
            </li>
            <li>
                <img src="../../assets/icons/ts.svg"></img>
            </li>
            <li>
                <i class="fab fa-vuejs"></i>
            </li>
            <li>
                <i class="fab fa-node"></i>
            </li>
            <li>
                <i class="fab fa-python"></i>
            </li>
            <li>
                <img src="../../assets/icons/django.svg"></img>
            </li>
            <li>
                <i class="fab fa-git-alt"></i>
            </li>
            <li>
                <i class="fab fa-linux"></i>
            </li>
            <li>
                <i class="fab fa-docker"></i>
            </li>
            <li>
                <i class="fas fa-database icon"></i>
            </li>
            <li>
                <i class="fas fa-server icon"></i>
            </li>
        </ul>
    </section>

</template>

<script setup></script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    padding: 10%;
    color: var(--color-text-primary);
    font-size: 1rem;

}

ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 5vw;
}

ul li {
    display: inline;
    margin-top: 3vh;
}

ul li i,
img {
    color: var(--color-accent);
    font-size: 3rem;
    height: 3rem;
    user-select: none;
}

@media (min-width: 600px) {
    section {
        padding: 3%;
        font-size: 1.25rem;
    }

    ul li i,
    img {
        font-size: 3.5rem;
        height: 3.5rem;
    }
}
</style>
