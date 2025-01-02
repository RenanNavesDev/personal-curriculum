document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menuToggle'); // Botão de toggle do menu
const navLinks = document.getElementById('navLinks'); // Links de navegação
const scrollToTopButton = document.getElementById('scrollToTop');
    
    
    // Adiciona o evento de clique no botão de toggle do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'show' para mostrar ou ocultar os links de navegação
        navLinks.classList.toggle('show');
    });

 // Mostra ou esconde o botão de rolagem para o topo
   window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block'; // Mostra o botão
    } else {
        scrollToTopButton.style.display = 'none'; // Esconde o botão
    }
});

// Adiciona um evento de clique para rolar para o topo
scrollToTopButton.addEventListener('click', function(e) {
 e.preventDefault(); // Previne o comportamento padrão do link
 window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
});

});
let currentLanguage = 'en'; // Idioma atual
 // Objetos de texto para tradução
 const texts = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        title: "Summary",
        content: "Hi! I’m a front-end developer in training, passionate about building responsive and interactive websites that truly make a difference for users. My journey into the world of web development began in May 2024, and since then, I’ve fully immersed myself in learning technologies like HTML5, CSS3, and JavaScript. I have experience with tools like Git and GitHub, which I use to organize my projects and collaborate more effectively. Recently, I’ve started exploring CSS frameworks like Bootstrap and Tailwind CSS to improve my ability to create beautiful, functional, and responsive interfaces. Ensuring that the websites I build work seamlessly on devices of all sizes is always one of my top priorities. Currently, I’m diving deeper into advanced JavaScript concepts and studying the fundamentals of UX/UI design to deliver even better user experiences. I’ve also started learning React, a library that has greatly expanded my understanding of how to build modern, scalable, and dynamic applications. My passion for technology has always been a part of who I am, but it’s closely tied to my love for games and dogs. These interests inspire me to think creatively, design dynamic interfaces, and value empathy and connection in everything I do. From a young age, I’ve been surrounded by computers, and today they remain a fundamental part of my life. I’m incredibly grateful to my first mentor, Professor Gabriel Salvador, who played a vital role in helping me take my first steps in this field and motivated me to keep going. In 2025, I’ll begin studying Systems Analysis, which will help me solidify my knowledge and move closer to achieving my dream of specializing in web development. I’m excited about what the future holds and ready to take on challenges as I continue learning and growing. My goal is to become a skilled front-end developer, creating projects that are useful, accessible, and impactful. Let’s build something amazing together!",
        figma:"Renan Naves 2024 - Layout inspired  by Figma templates",
    },
    pt: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        title: "Resumo",
        content: "Olá! Sou um desenvolvedor front-end em formação, apaixonado por criar sites responsivos e interativos que realmente façam diferença para os usuários. Minha jornada no universo do desenvolvimento web começou em maio de 2024, e desde então, mergulhei de cabeça no aprendizado de tecnologias como HTML5, CSS3 e JavaScript. Tenho experiência com ferramentas como Git e GitHub, que utilizo para organizar meus projetos e facilitar a colaboração. Recentemente, comecei a explorar frameworks CSS, como Bootstrap e Tailwind CSS, para aprimorar minhas habilidades na criação de interfaces bonitas, funcionais e responsivas. Sempre me preocupo em garantir que os sites que desenvolvo funcionem perfeitamente em dispositivos de todos os tamanhos. Atualmente, estou aprofundando meus conhecimentos em JavaScript avançado e estudando os fundamentos de UX/UI design para oferecer experiências ainda melhores para os usuários. Também iniciei meus estudos em React, uma biblioteca que tem ampliado minha visão sobre como construir aplicações dinâmicas, escaláveis e modernas. Minha paixão por tecnologia é algo que sempre esteve presente, mas ela anda lado a lado com meu amor por jogos e cachorros. Esses interesses me inspiram a ser criativo, a pensar em interfaces dinâmicas e a valorizar a empatia e a conexão em tudo o que faço. Desde muito jovem, sempre estive próximo de computadores, que hoje considero uma parte essencial da minha vida. Sou muito grato ao meu primeiro mentor, o professor Gabriel Salvador, que foi fundamental para eu dar os primeiros passos nesse mundo e me motivou a seguir em frente. Em 2025, iniciarei o curso de Análise de Sistemas, que me ajudará a consolidar meus conhecimentos e a alcançar meu sonho de me especializar em desenvolvimento web. Estou animado com o que o futuro reserva e pronto para enfrentar desafios enquanto continuo a aprender e evoluir. Meu objetivo é me tornar um desenvolvedor front-end capacitado, criando projetos que sejam úteis, acessíveis e impactantes. Vamos construir algo incrível juntos!",
        figma: "Renan Naves 2024 - Layout inspirado por templates do Figma"
    }
};



// Função para alternar o idioma
function toggleLanguage() {
    if (currentLanguage === 'en') {
        currentLanguage = 'pt'; // Muda para português
        document.getElementById('home').textContent = texts.pt.home;
        document.getElementById('about').textContent = texts.pt.about;
        document.getElementById('projects').textContent = texts.pt.projects;
        document.getElementById('contact').textContent = texts.pt.contact;
        document.getElementById('title').textContent = texts.pt.title;
        document.getElementById('content').textContent = texts.pt.content;
        document.getElementById('figma').textContent = texts.pt.figma;
        document.getElementById('ptImage').style.display = 'none'; // Esconde a imagem PT
        document.getElementById('enImage').style.display = 'inline'; // Mostra a imagem EN
    } else {
        currentLanguage = 'en'; // Muda para inglês
        document.getElementById('home').textContent = texts.en.home;
        document.getElementById('about').textContent = texts.en.about;
        document.getElementById('projects').textContent = texts.en.projects;
        document.getElementById('contact').textContent = texts.en.contact;
        document.getElementById('title').textContent = texts.en.title;
        document.getElementById('content').textContent = texts.en.content;
        document.getElementById('figma').textContent = texts.en.figma;
        document.getElementById('ptImage').style.display = 'inline'; // Mostra a imagem PT
        document.getElementById('enImage').style.display = 'none'; // Esconde a imagem EN
    }
}



        


