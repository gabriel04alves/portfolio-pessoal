<template>
    <section id="academic-education">
        <div>
            <h1>
                <b>
                    Formação acadêmica
                </b>
            </h1>
        </div>
        <ul>
            <li>
                <div class="logo">
                    <img src="https://descomplica-pae-backend.s3.amazonaws.com/logotipo_ifc_removebg_preview_be413df28b.png"
                        alt="">
                </div>
                <div>
                    <p>
                        <b>
                            Téc. Informática
                        </b>
                    </p>
                    <p>
                        2022 - IFC
                    </p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img src="https://descomplica-pae-backend.s3.amazonaws.com/logotipo_ifc_removebg_preview_be413df28b.png"
                        alt="">
                </div>
                <div>
                    <p>
                        <b>
                            Bacharelado em Sistemas de Informação
                        </b>
                    </p>
                    <p>
                        Em andamento - IFC
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup></script>

<style scoped>
section {
    padding: 10%;
    color: var(--color-text-primary);
}

h1 {
    text-align: center;
    margin-bottom: 1vh;
}

h1 b {
    font-size: 1.75rem;
}

p b {
    font-size: 1.25rem;
}

ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 5vw;
}

ul li {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 3vh;
}

.logo img {
    margin-bottom: 2vh;
}

img {
    padding: 1rem 4rem;
    width: 40%;
    background-color: var(--color-image-background);
}


@media (min-width: 600px) and (max-width: 1365px) {
    section {
        padding: 10% 0%;
    }
}



@media (min-width: 1366px) {
    section {
        padding: 5%;
    }

    h1 b {
        font-size: 2rem;
    }
}
</style>