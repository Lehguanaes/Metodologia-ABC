import { Link } from "react-router-dom";
import "./Metodologia.css";


export default function Metodologia() {
  return (
    <section className="metodologia-container">
      {/* Cabeçalho */}
      <div className="metodologia-header">
        <h2>Metodologia ABC</h2>
        <p>
          A <strong>Metodologia ABC</strong> é uma forma simples e eficaz de desempenho.
          Com todas essas informaçoes, agora vamos para o passo a passo do seu diagnostico!
        </p>
      </div>

      {/* Lista de passos */}
      <ul className="metodologia-lista">
        <li>Resolva o simulado normalmente.</li>
        <li>Classifique cada questão como A, B ou C.</li>
        <li>Insira os números no sistema.</li>
        <li>Gere seu diagnóstico em forma de gráfico.</li>
      </ul>

     
    </section>
  );
}
