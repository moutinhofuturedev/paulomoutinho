import Script from "next/script";

const schemaDataProjects = 
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

export default function SchemaJsonLdProjects() {
    return(
        <>
          <Script 
            id="SchemaJsonLdProjects"
            aria-label="SchemaJsonLdProjects"
            strategy="lazyOnload"
            defer
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataProjects) }}
          />
        </>
    )
}