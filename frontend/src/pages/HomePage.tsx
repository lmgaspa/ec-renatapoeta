import Container from "../components/common/Container";
import ContentBlock from "../components/common/ContentBlock";
import { useNavigate } from "react-router-dom";
import CookieConsent from "../components/CookieConsent";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ContentBlock
          title="Renata Poeta"
          imageUrl="/images/renatapoeta.webp"
          description="Renata Nascimento dos Reis (Renata Poeta) nasceu em Ribeira do Pombal – BA Desde criança, adora poesias e sempre sonhou em ser escritora.
            Hoje, licenciada em Letras (Faculdade Dom Luiz de Orleans e Bragança) e especialista em Produção textual, Gramática e Literatura (Faculdade Regional de Filosofia, Ciências e letras de Candeias) faz uma das coisas que mais gosta: ensinar Língua Portuguesa. Autora dos livros Outra forma de ver e sentir e Poesias para gente minúscula (Mondrongo) tem se dedicado cada vez mais à literatura infanto- juvenil."
          isAuthor
        />

        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">
          Livros
        </h2>

        <div className="flex flex-wrap justify-center gap-16">
          <div onClick={() => navigate("/books/nacasa")}>
            <ContentBlock
              title="Na casa das rimas"
              imageUrl="/images/nacasa.webp"
              description="Na casa das rimas"
            />
          </div>
          <div onClick={() => navigate("/books/poesia")}>
            <ContentBlock
              title="Poesia para gente minúscula"
              imageUrl="/images/poesia.webp"
              description="Poesia para gente minúscula"
            />
          </div>
          <div onClick={() => navigate("/books/antologia")}>
            <ContentBlock
              title="Antologia Via Vale dos Poetas."
              imageUrl="/images/viavale.webp"
              description="Antologia Via Vale dos Poetas."
            />
          </div>
          <div onClick={() => navigate("/books/gatomasia")}>
            <ContentBlock
              title="Gatomasia"
              imageUrl="/images/gatomasia.webp"
              description="Gatomasia! Que história é essa de Gatomasia? Gatomasia! Que história é essa de Gatomasia?"
            />
          </div>
        </div>
      </Container>

      {/* ✅ Banner de cookies (fixo no rodapé, visível logo ao entrar) */}
      <CookieConsent />
    </>
  );
}

export default HomePage;
