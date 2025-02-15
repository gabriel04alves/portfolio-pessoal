import emailjs from "@emailjs/browser";

export const sendEmail = async (form) => {
  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    alert("Email enviado com sucesso!");
    form.reset();
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    alert("Erro ao enviar email. Tente novamente.");
  }
};
