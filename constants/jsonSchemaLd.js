export function addSchemaLdHome() {
  return {
    __html: `
      {
        "@context": "https://schema.org/", 
        "@type": "Portifólio", 
        "url": "https://paulomoutinho.vercel.app/",
        "name": "Paulo Moutinho",
        "image": "/public/assets/paulomoutinho.jpg",
        "jobTitle": "Software Engineer",
        "category": "Front End",
        "description": "Sou um desenvolvedor iniciando uma jornada no mundo da programação e suas tecnologias incríveis. Atualmente, trabalho como Software Engineer Junior na compania Via...",
        "brand": "Via",
        "author": {
          "@type": "Person",
          "name": "Paulo Moutinho",
          "email": "mailto:paulo_vicali@icloud.com"
        },
        "socials": [
          "https://github.com/moutinhofuturedev",
          "https://twitter.com/PauloMoutinho19",
          "https://www.instagram.com/paulo_mmoutinho/?hl=pt-br",
          "https://www.linkedin.com/in/paulomoutinhovitor/"
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
            "@type": "Projetos",
            "name": "Veja mais projetos",
            "url": "https://paulomoutinho.vercel.app/projects",
            "jobTitle": "Software Engineer",
            "category": "Front End", 
            "description": "Veja mais projetos",
            "author": {
                "@type": "Person",
                "name": "Paulo Moutinho",
                "email": "mailto:paulo_vicali@icloud.com"
              },
              "projects": [
                {
                    "@type": "project",
                    "name": "Good Form",
                    "url": "https://good-form.vercel.app/"
                },
                {
                    "@type": "project",
                    "name": "Linktree",
                    "url": "https://linktree-moutinho.vercel.app/"
                },
                {
                    "@type": "project",
                    "name": "DashGo",
                    "url": "https://dash-go-psi.vercel.app/"
                },
                {
                    "@type": "project",
                    "name": "Pricing UI",
                    "url": "https://pricing-ui-plum.vercel.app/"
                },
              ]
        }
        `,
  };
}
