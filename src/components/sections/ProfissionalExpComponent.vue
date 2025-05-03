<template>
    <section id="section-profissional_exp">
        <h1 class="title--exp_prof">Experiência </h1>
        <div class="container--exp_prof">
            <div class="item--exp_prof">
                <div class="item--line-1">
                    <img class="icon--logo_enterprise"
                        src="https://multipedidos.com.br/wp-content/uploads/2022/02/marca-mp-vertical-colorida-405x400-1.png"
                        alt="">
                    <h3 class="title--position">Estágiario de suporte</h3>
                    <p class="title--date"> Set 2023 - Jan 2024</p>
                </div>
                <p class="description--exp_prof">
                    Atuei no atendimento ao cliente e suporte técnico, realizando vendas, ajustes de planos e
                    solucionando problemas de hardware e software. Também fui responsável por reportar bugs, contribuir
                    para melhorias no sistema e organizar dados nas plataformas dos clientes.
                </p>
            </div>
            <div class="item--exp_prof">
                <div class="item--line-1">
                    <i class="icon--logo_enterprise fa-regular fa-calendar"></i>
                    <h3 class="title--position">Desenvolvimento profissional</h3>
                    <p class="title--date"> Jan 2024 - o momento</p>
                </div>
                <p class="description--exp_prof">Período dedicado ao aprimoramento das minhas habilidades em
                    desenvolvimento de software, com foco em
                    JavaScript, TypeScript, Python e SQL. Durante esse tempo, participei de projetos acadêmicos,
                    realizei formações complementares, aperfeiçoei projetos pessoais e explorei novas tecnologias para
                    expandir meu conhecimento. O objetivo desse período é me preparar ainda mais para futuras
                    oportunidades.</p>
            </div>

        </div>
    </section>
</template>

<script setup></script>

<style scoped>
section {
    padding: 5% 25%;
    font-size: 1rem;
    color: var(--color-text-primary);
    background-color: var(--color-background-secondary);

}

.container--exp_prof {
    display: flex;
    flex-flow: column wrap;
    gap: 3vh;
    margin-top: 5vh;
}

.title--exp_prof {
    text-align: center;
    font-size: 1.75rem;
    color: var(--color-text-primary);
}

.item--line-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.25rem;
}

.title--position {
    text-align: left;
    font-weight: 500;
    width: 100%;
    margin-left: 1vw;
    padding: 1vh;
    text-wrap: nowrap;
}

.description--exp_prof {
    margin-top: 1vh;
    color: var(--color-text-secondary);
    font-size: 1.1rem;
}

.title--date {
    width: 100%;
    color: var(--color-text-secondary);
    text-align: right;
    text-wrap: nowrap;
}

.icon--logo_enterprise {
    width: 5vh;
    font-size: 3vh;
    color: var(--color-accent);
}

@media (max-width: 1365px) {
    section {
        padding: 10% 12%;
    }

    .container--exp_prof {
        gap: 3vh;
    }

    .item--line-1 {
        flex-flow: wrap;
        justify-content: start;
    }

    .icon--logo_enterprise {
        width: 5vh;
    }

    .title--position,
    .title--date {
        width: min-content;
        font-size: 1rem;
        margin-bottom: 1vh;
    }
}
</style>