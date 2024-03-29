export function addSchemaLdHome() {
  return {
    __html: `
    {
      "@context": "https://schema.org/", 
      "@type": "NewsArticle",
      "headline": "Paulo Moutinho Portfólio",
      "image": "/public/assets/paulomoutinho.jpg",
      "jobTitle": "Software Engineer",
      "category": "Front End",
      "description": "Sou um desenvolvedor junior me especializando em tecnologias como React.js, Next.js e Typescript. Atualmente, trabalho como Software Engineer na Viahub ( Via ), atuando com tecnologias no Frontend e SEO para otimizar as páginas de Casas Bahia, Ponto e Extra.",
      "brand": "Viahub",
      "author": {
        "@type": "Person",
        "name": "Paulo Moutinho",
        "url": "https://paulomoutinho.vercel.app/",
        "email": "paulo_vicali@icloud.com"
      },
       "sharedContent": [
         {
           "@type":"WebPage",
           "headline": "Github",
           "url": "https://github.com/moutinhofuturedev"
         },
         {
           "@type":"WebPage",
           "headline": "Linkedin",
           "url": "https://www.linkedin.com/in/paulomoutinhovitor/"
         },
         {
           "@type":"WebPage",
           "headline": "Instagram",
           "url": "https://www.instagram.com/paulo_mmoutinho/"
         }
       ]
    }
    `,
  };
}

export function addShemaLdProjects() {
  return {
    __html: `
        {
            "@context": "https://schema.org/", 
            "@type": "NewsArticle",
            "headline": "Paulo Moutinho Projetos",
            "jobTitle": "Software Engineer",
            "category": "Front End", 
            "description": "Veja mais projetos",
            "author": {
                "@type": "Person",
                "name": "Paulo Moutinho",
                "url": "https://paulomoutinho.vercel.app/projects",
                "email": "mailto:paulo_vicali@icloud.com"
              },
              "sharedContent": [
                {
                    "@type": "WebPage",
                    "headline": "Good Form",
                    "url": "https://good-form.vercel.app/"
                },
                {
                    "@type": "WebPage",
                    "headline": "Linktree",
                    "url": "https://linktree-moutinho.vercel.app/"
                },
                {
                    "@type": "WebPage",
                    "headline": "DashGo",
                    "url": "https://dash-go-psi.vercel.app/"
                },
                {
                    "@type": "WebPage",
                    "headline": "Pricing UI",
                    "url": "https://pricing-ui-plum.vercel.app/"
                },
              ]
        }
        `,
  };
}
