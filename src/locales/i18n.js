import { computed } from "vue";
import { useLanguageStore } from "../stores/languageStore";

const translations = {
  pt: {
    // Formação
    education: "Formação acadêmica",
    course_bachelor: "Bacharelado em Sistemas de Informação",
    course_tech: "Téc. Informática",
    in_progress: "Em andamento",

    // Experiência Profissional
    experience: "Experiência",
    job_dev: "Desenvolvedor de Software",
    job_prof_dev: "Desenvolvimento profissional",
    job_intern: "Estagiário de suporte",
    current: "Atualmente",
    desc_dev:
      "Atuo no desenvolvimento de software, participando de projetos que visam atender às demandas da comunidade do IFC. Estou envolvido em todas as etapas do processo de desenvolvimento, desde a análise de requisitos até a entrega da solução final. Além do desenvolvimento, aplico metodologias ágeis para organizar o fluxo de trabalho e contribuir para a melhoria contínua dos projetos.",
    desc_prof_dev:
      "Período dedicado ao aprimoramento das minhas habilidades em desenvolvimento de software, com foco em JavaScript, TypeScript, Python e SQL. Durante esse tempo, participei de projetos acadêmicos, realizei formações complementares, aperfeiçoei projetos pessoais e explorei novas tecnologias para expandir meu conhecimento. O objetivo desse período é me preparar ainda mais para futuras oportunidades.",
    desc_intern:
      "Atuei no atendimento ao cliente e suporte técnico, realizando vendas, ajustes de planos e solucionando problemas de hardware e software. Também fui responsável por reportar bugs, contribuir para melhorias no sistema e organizar dados nas plataformas dos clientes.",

    // Contatos
    contacts: "Contatos",
    send_message: "Deixe seu recado!",
    send: "Enviar",
    your_name: "Seu Nome",
    your_email: "Seu Email",
    your_message: "Sua Mensagem",

    // Apresentação
    presentation_title: "<b>Opa, meu nome é Gabriel Alves...</b>",
    presentation_subtitle: `Atualmente, sou estudante de Sistemas de Informação e tenho formação técnica em Informática. Desenvolvo com
JavaScript e TypeScript, utilizando o framework Vue.js, além de Python com Django Rest Framework. Também, me
interesso por arquitetura de software, inteligência artificial, análise de dados e desenvolvimento pessoal.`,
    presentation_button: "Saiba mais",

    // Projetos
    projects: "Projetos",
    see_on_github: "Veja no GitHub",
    live_demo: "Demo ao vivo",

    // Header
    stack: "Stack",
    curriculum: "Currículo",
  },
  en: {
    // Formation
    education: "Academic Education",
    course_bachelor: "Bachelor in Information Systems",
    course_tech: "Technical in Informatics",
    in_progress: "In progress",

    // Professional Experience
    experience: "Experience",
    job_dev: "Software Developer",
    job_prof_dev: "Professional Development",
    job_intern: "Support Intern",
    current: "Current",
    desc_dev:
      "I work in software development, participating in projects aimed at meeting the demands of the IFC community. I am involved in all stages of the development process, from requirements analysis to final delivery. In addition to development, I apply agile methodologies to organize workflow and contribute to continuous project improvement.",
    desc_prof_dev:
      "Period dedicated to improving my software development skills, focusing on JavaScript, TypeScript, Python, and SQL. During this time, I participated in academic projects, completed complementary courses, improved personal projects, and explored new technologies to expand my knowledge. The goal of this period is to further prepare myself for future opportunities.",
    desc_intern:
      "I worked in customer service and technical support, handling sales, plan adjustments, and solving hardware and software issues. I was also responsible for reporting bugs, contributing to system improvements, and organizing data on client platforms.",

    // Contacts
    contacts: "Contacts",
    send_message: "Leave your message!",
    send: "Send",
    your_name: "Your Name",
    your_email: "Your Email",
    your_message: "Your Message",

    // Presentation
    presentation_title: "<b>Hi, my name is Gabriel Alves...</b>",
    presentation_subtitle: `Currently, I am an Information Systems student and have a technical degree in Informatics. I develop with
JavaScript and TypeScript using the Vue.js framework, as well as Python with Django Rest Framework. I am also interested in software architecture, artificial intelligence, data analysis, and personal development.`,
    presentation_button: "Learn more",

    // Projects
    projects: "Projects",
    see_on_github: "See on GitHub",
    live_demo: "Live Demo",

    // Header
    stack: "Stack",
    curriculum: "Resume",
  },
};

export function useI18n() {
  const languageStore = useLanguageStore();
  return {
    t: (key) => translations[languageStore.currentLanguage][key] || key,
    lang: computed(() => languageStore.currentLanguage),
  };
}
