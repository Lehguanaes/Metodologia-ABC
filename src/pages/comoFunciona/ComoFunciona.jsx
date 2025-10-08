import { Link } from "react-router-dom";
import "./ComoFunciona.css";

export default function ComoFunciona() {
  return (
    <section className="como-funciona">
      <h2>Como funciona?</h2>

      <p>
        A metodologia <b>ABC</b> é uma técnica simples de autoavaliação que
        ajuda você a medir seu desempenho em simulados ou provas. 
        Ela facilita a identificação de pontos fortes e fracos, além de orientar
        na organização dos estudos.
      </p>


      <div className="cards">
        <div className="card">
          <h3>A – Acertei com segurança</h3>
          <p>
            Questões que você respondeu corretamente e com total confiança.
            Mostram domínio do conteúdo.
          </p>
        </div>
        <div className="card">
          <h3>B – Acertei com dúvida</h3>
          <p>
            Questões que você acertou, mas não tinha certeza absoluta.
            Indicam conteúdos que precisam de revisão.
          </p>
        </div>
        <div className="card">
          <h3>C – Errei ou não sabia</h3>
          <p>
            Questões que você errou ou não soube responder. São suas maiores
            oportunidades de aprendizado.
          </p>
        </div>
      </div>

      <p>
        👉 Ao final, basta somar a quantidade de questões em cada categoria
        (A, B e C). O sistema irá gerar um <b>gráfico</b> mostrando seu
        diagnóstico e sugerindo prioridades de estudo.
      </p>

      <ul>
        <li>Reveja primeiro os conteúdos do grupo C.</li>
        <li>Depois, revise os conteúdos do grupo B.</li>
        <li>Por fim, apenas mantenha os do grupo A.</li>
      </ul>

      <Link to="/metodologia" className="btn">
        Ir para meu diagnóstico
      </Link>
    </section>
  );
}
