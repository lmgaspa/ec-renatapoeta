interface AuthorInfoProps {
  author: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-8 mb-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="/images/renatapoeta.webp" alt={author} className="w-32 h-32 rounded-full shadow-md" />
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">{author}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Renata Nascimento dos Reis (Renata Poeta) nasceu em Ribeira do Pombal – BA Desde criança, adora poesias e sempre sonhou em ser escritora.
            Hoje, licenciada em Letras (Faculdade Dom Luiz de Orleans e Bragança) e especialista em Produção textual, Gramática e Literatura (Faculdade Regional de Filosofia, Ciências e letras de Candeias) faz uma das coisas que mais gosta: ensinar Língua Portuguesa. Autora dos livros Outra forma de ver e sentir e Poesias para gente minúscula (Mondrongo) tem se dedicado cada vez mais à literatura infanto- juvenil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
