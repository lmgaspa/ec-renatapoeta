  import { descriptions } from './descriptions';

  export interface Book {
    id: string;
    title: string;
    imageUrl: string;
    price: string;
    description: string;
    author: string;
    additionalInfo: Record<string, string>;
    category: string;
    stock: number;
    relatedBooks?: { title: string; imageUrl: string; price: string; category: string; id: string }[];
  }

  const poetaRenata = "Renata Poeta";
  const selo = "Via Litterarum";
  const idioma = "Português";

  export const books: Book[] = [
    {
      id: "nacasa",
      title: "Na casa das rimas",
      imageUrl: "/images/nacasa.webp",
      price: "R$20,00",
      description: descriptions.nacasa,
      author: poetaRenata,
      additionalInfo: {
        Peso: "100 g",
        Dimensões: "21 × 29,5 × 1 cm",
        Selo: selo,
        ISBN: "978-85-8151-184-9",
        Edição: "1ª",
        "Ano de Publicação": "2019",
        "Nº de Páginas": "22",
        Idioma: idioma
      },
      category: "Literatura infanto-juvenil.",
      stock: 100
    },
    {
      id: "poesia",
      title: "Poesia para gente minúscula",
      imageUrl: "/images/poesia.webp",
      price: "R$20,00",
      description: descriptions.poesia,
      author: poetaRenata,
      additionalInfo: {
        Peso: "200 g",
        Dimensões: "20 × 28 × 1 cm",
        Selo: selo,
        ISBN: "978-85-8151-180-8",
        Edição: "1ª",
        "Ano de Publicação": "2018",
        "Nº de Páginas": "28",
        Idioma: idioma
      },
      category: "Literatura infanto-juvenil.",
      stock: 100
    },
    {
      id: "antologia",
      title: "Antologia Via Vale dos Poetas",
      imageUrl: "/images/viavale.webp",
      price: "R$30,00",
      description: descriptions.antologia,
      author: poetaRenata,
      additionalInfo: {
        Peso: "230 g",
        Dimensões: "15 × 22 × 1 cm",
        Selo: selo,
        ISBN: "978-65-86676-37-2",
        Edição: "1ª",
        "Ano de Publicação": "2021",
        "Nº de Páginas": "132",
        Idioma: idioma
      },
      category: "Literatura infanto-juvenil.",
      stock: 0
    },
    {
      id: "gatomasia",
      title: "Gatomasia",
      imageUrl: "/images/gatomasia.webp",
      price: "R$30,00",
      description: descriptions.gatomasia,
      author: poetaRenata,
      additionalInfo: {
        Peso: "100 g",
        Dimensões: "20 × 28 × 1 cm",
        Selo: selo,
        ISBN: "978-85-8151-180-8",
        Edição: "1ª",
        "Ano de Publicação": "2023",
        "Nº de Páginas": "24",
        Idioma: idioma
      },
      category: "Literatura infanto-juvenil.",
      stock: 100
    },
    {
      id: "poemar",
      title: "Poemar",
      imageUrl: "/images/poemar.webp",
      price: "R$40,00",
      description: descriptions.poemar,
      author: poetaRenata,
      additionalInfo: {
        Peso: "30 g",
        Dimensões: "20 × 20 × 1 cm",
        Selo: selo,
        ISBN: "978-85-8151-309-6",
        Edição: "1ª",
        "Ano de Publicação": "2025",
        "Nº de Páginas": "24",
        Idioma: idioma
      },
      category: "Literatura infanto-juvenil.",
      stock: 100
    },
  ];