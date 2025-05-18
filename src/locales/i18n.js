import { computed } from "vue";
import { useLanguageStore } from "../stores/languageStore";

const translations = {
  pt: {
    // Formação
    education: "Formação",
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

    // Blog
    articles: "Artigos",
    view_all_posts: "Ver todos os artigos",
    no_posts: "Nenhum artigo encontrado.",
    back_to_articles: "Mais Artigos",
    post_not_found: "Artigo não encontrado",
  },
  en: {
    // Education
    education: "Education",
    course_bachelor: "Bachelor's in Information Systems",
    course_tech: "Technical Degree in Informatics",
    in_progress: "Ongoing",

    // Professional Experience
    experience: "Work Experience",
    job_dev: "Software Developer",
    job_prof_dev: "Self-Development",
    job_intern: "Support Intern",
    current: "Present",
    desc_dev:
      "I work in software development, contributing to projects that serve the IFC community. I'm involved in every stage of the development lifecycle, from requirements analysis to final delivery. I also apply agile methodologies to streamline workflows and drive continuous improvement.",
    desc_prof_dev:
      "A period focused on enhancing my software development skills, with emphasis on JavaScript, TypeScript, Python, and SQL. I took part in academic projects, completed supplementary courses, improved personal projects, and explored new technologies to broaden my expertise. This phase was aimed at preparing myself for future professional opportunities.",
    desc_intern:
      "Provided customer service and technical support, including sales, plan adjustments, and resolving hardware/software issues. I also reported bugs, suggested system improvements, and organized data across client platforms.",

    // Contacts
    contacts: "Get in touch",
    send_message: "Send a Message!",
    send: "Send",
    your_name: "Your Name",
    your_email: "Your Email",
    your_message: "Your Message",

    // Presentation
    presentation_title: "<b>Hey there! I'm Gabriel Alves.</b>",
    presentation_subtitle: `I'm currently an Information Systems student with a technical degree in Informatics. I develop using JavaScript and TypeScript with the Vue.js framework, as well as Python with Django Rest Framework. I'm also passionate about software architecture, artificial intelligence, data analysis, and personal development.`,
    presentation_button: "Learn More",

    // Projects
    projects: "Projects",
    see_on_github: "View on GitHub",
    live_demo: "Live Preview",

    // Header
    stack: "Tech Stack",
    curriculum: "Resume",

    // Blog
    articles: "Articles",
    view_all_posts: "View all articles",
    no_posts: "No articles found.",
    back_to_articles: "More articles",
    post_not_found: "Article not found",
  },
};

export function useI18n() {
  const languageStore = useLanguageStore();
  return {
    t: (key) => translations[languageStore.currentLanguage][key] || key,
    lang: computed(() => languageStore.currentLanguage),
  };
}
