import Script from "next/script";

const schemaData = 
{
  "@context": "https://schema.org/", 
  "@type": "Portifólio", 
  "name": "Paulo Moutinho",
  "image": "/public/assets/paulomoutinho.jpg",
  "keywords": "Software Engineer",
  "category": "Front End",
  "about": "Sou um desenvolvedor iniciando uma jornada no mundo da programação e suas tecnologias incríveis. Atualmente, trabalho como Software Engineer Junior na compania Via...",
  "brand": "Via",
  "author": {
    "@type": "Person",
    "name": "Paulo Moutinho"
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
