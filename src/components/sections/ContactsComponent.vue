<template>
    <section id="section-contacts">
        <div class="container--contacts">
            <h1 class="title--contacts">
                <b>
                    {{ t('contacts') }}
                </b>
            </h1>
            <div class="items--contacts">
                <a class="item--contact" href="https://wa.me/5547984950238">
                    <i class="fab fa-whatsapp"></i>
                    <p>+55 (47) 98495-0238</p>
                </a>
                <a class="item--contact" href="mailto:gabriel52.alves@gmail.com">
                    <i class="far fa-envelope icon"></i>
                    <p>gabriel52.alves@gmail.com</p>
                </a>
                <a class="item--contact" href="https://linkedin.com/in/gabriel04alves">
                    <i class="fab fa-linkedin"></i>
                    <p>/gabriel04alves</p>
                </a>
                <a class="item--contact" href="https://github.com/gabriel04alves">
                    <i class="fab fa-github"></i>
                    <p>/gabriel04alves</p>
                </a>
            </div>
        </div>
        <hr>
        <div class="container--send-email">
            <h1 class="title--contacts">{{ t('send_message') }}</h1>
            <div class="form--contact">
                <form ref="form" @submit.prevent="handleSendEmail">
                    <input type="text" name="from_name" :placeholder="t('your_name')" required>
                    <input type="email" name="from_email" :placeholder="t('your_email')" required>
                    <textarea name="message" :placeholder="t('your_message')" required></textarea>
                    <button class="btn--submit-contact-form" type="submit">
                        <i class="fa fa-paper-plane"></i>
                        {{ t('send') }}
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { sendEmail } from "../../services/emailService";
import { useI18n } from "../../locales/i18n";

const { t } = useI18n();
const form = ref(null);

const handleSendEmail = async () => {
    await sendEmail(form.value);
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 10%;
    gap: 2vh;

    /* background-color: var(--color-background-secondary); */
}

.title--contacts {
    font-size: 1.8rem;
    color: var(--color-text-primary);
}


.item--contact {
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

.item--contact:hover {
    transform: translate(0.5vh, -0.5vh);
}

.container--send-email {
    padding: 0 25% 0 0;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin-top: 2vh;
}

input,
textarea {
    padding: 1vh;
    width: 100%;
    border: solid 0.5px var(--color-text-primary);
    border-radius: 5px;

    /* background-color: var(--color-background-secondary); */

    font-size: 0.9rem;
    /* color: var(--color-text-primary); */
}

.btn--submit-contact-form {
    padding: 1vh;
    width: 75%;
    border: none;
    border-radius: 5px;
    background-color: var(--color-accent);
    color: var(--color-text-primary);
    font-size: 1rem;
    cursor: pointer;

    align-self: center;
}

@media (min-width: 0) and (max-width: 999px) {
    section {
        padding: 15%;
        gap: 4vh;
        justify-content: center;
    }

    .container--contacts {
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
        gap: 2vh;
        text-align: center;

    }

    .container--send-email {
        padding: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    hr {
        display: none;
    }

    .items--contacts {
        display: flex;
        flex-flow: column wrap;
        gap: 1vh;
    }

    .item--contact {
        margin: 0;
    }
}

@media (min-width: 1366px) {
    section {
        padding: 5%;
    }
}
</style>