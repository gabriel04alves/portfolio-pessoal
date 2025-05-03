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
    flex-flow: column;
    gap: 2rem;
    margin-top: 2rem;
}

.item--line-1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.title--course {
    font-weight: 500;
    flex: 1;
}

.title--date {
    color: var(--color-text-secondary);
    min-width: 120px;
    text-align: right;
}

.icon--logo_institution {
    width: 48px;
    height: 48px;
    background-color: var(--color-image-background);
    padding: 4px;
}

@media (max-width: 768px) {
    section {
        padding: 5% 10%;
    }

    .item--line-1 {
        flex-wrap: wrap;

    }

    .title--course {
        width: calc(100% - 60px);
        order: 1;
    }

    .icon--logo_institution {
        width: 40px;
        height: 40px;
        order: 0;
    }

    .title--date {
        margin-left: 52px;
        order: 2;
        min-width: auto;
    }
}
</style>