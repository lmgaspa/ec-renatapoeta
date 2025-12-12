import Container from '../components/common/Container';

function SupportPage() {
  return (
    <Container>
      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">
        Suporte
      </h2>

      <div className="mt-12 text-center text-lg leading-relaxed">
        <p>
          Em caso de dúvida sobre os livros, pagamento, ou status do pedido,
          entrar em contato com <strong>Renata Poeta</strong>.
        </p>
        <p className="mt-6">
          <strong>WhatsApp:</strong> (75) 99852-2299
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a 
            href="mailto:renatapoeta12@gmail.com" 
            className="text-primary hover:underline"
          >
            renatapoeta12@gmail.com
          </a>
        </p>
      </div>
    </Container>
  );
}

export default SupportPage;
