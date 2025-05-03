<template>
    <section id="academic-education">
        <h1 class="title--education">Formação acadêmica</h1>
        <div class="container--education">
            <div class="item--line-1">
                <img class="icon--logo_institution"
                    src="https://descomplica-pae-backend.s3.amazonaws.com/logotipo_ifc_removebg_preview_be413df28b.png"
                    alt="Logo IFC">
                <h3 class="title--course">Bacharelado em Sistemas de Informação</h3>
                <p class="title--date">2023 - Em andamento</p>
            </div>
            <div class="item--line-1">
                <img class="icon--logo_institution"
                    src="https://descomplica-pae-backend.s3.amazonaws.com/logotipo_ifc_removebg_preview_be413df28b.png"
                    alt="Logo IFC">
                <h3 class="title--course">Téc. Informática</h3>
                <p class="title--date">2020 - 2022</p>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
section {
    padding: 5% 15%;
    font-size: 1rem;
    display: flex;
    flex-flow: column;
    color: var(--color-text-primary);
}

h1 {
    text-align: center;
}

.container--education {
    display: flex;
    flex-flow: column wrap;
    gap: 3vh;
    margin-top: 5vh;
}


.item--line-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.25rem;
}

.title--course {
    text-align: left;
    font-weight: 500;
    width: 100%;
    margin-left: 1vw;
    padding: 1vh;
    text-wrap: nowrap;
}

.title--date {
    width: 100%;
    color: var(--color-text-secondary);
    text-align: right;
    text-wrap: nowrap;
}

.icon--logo_institution {
    width: 5vh;
    background-color: var(--color-image-background);
    padding: 0.5vh;
}

@media (max-width: 1365px) {
    section {
        padding: 25%;
    }

    .container--education {
        gap: 3vh;
    }

    .item--line-1 {
        flex-flow: wrap;
        justify-content: start;
    }

    .icon--logo_institution {
        width: 5vh;
    }

    .title--course,
    .title--date {
        width: min-content;
        font-size: 1rem;
        margin-bottom: 1vh;
    }
}
</style>