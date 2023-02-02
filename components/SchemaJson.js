import Script from "next/script";

const schemaData = 
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
  }
}

export default function SchemaJsonLd() {
  return (
    <>
      <Script
        
        id="SchemaJsonLd"
        aria-label="SchemaJsonLd"
        strategy="lazyOnload"
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};
