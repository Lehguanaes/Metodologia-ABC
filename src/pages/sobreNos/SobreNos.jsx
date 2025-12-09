import { Link } from "react-router-dom";
import "./SobreNos.css";

// importa imagens (subindo 2 níveis)
import grupo from "../../assets/grupo.jpeg";
import aluna1 from "../../assets/aluna1.png";
import aluna2 from "../../assets/aluna2.png";
import aluna3 from "../../assets/aluna3.png";
import aluna4 from "../../assets/aluna4.jpg";
import aluna5 from "../../assets/aluna5.jpg";

export default function SobreNos() {
  return (
    <section className="sobre-nos">
      <h2 className="titulo">Quem somos?</h2>

      <p className="descricao">
        Somos alunas do <strong>3º AMS da ETEC Zona Leste</strong> e juntas
        desenvolvemos este projeto como forma de facilitar a aplicação da{" "}
        <strong>Metodologia ABC</strong>, utilizada pelo nosso professor
        orientador Marlon Marques.
      </p>

      <div className="card-grupo">
        <img src={grupo} alt="Foto do grupo de alunas" className="foto-grupo" />
        <h3 >Equipe 3º AMS - ETEC Zona Leste</h3>
      </div>

<div className="cards-individuais">
  <div className="card">
    <img src={aluna1} alt="Gabrielly Nascimento" />
    <div className="card-nome">Gabrielly Nascimento</div>
    <div className="card-contato">
      <div className="contato-label">Email para contato:</div>
      <div className="contato-email">gabriellynasserb@gmail.com</div>
    </div>
  </div>
  <div className="card">
    <img src={aluna2} alt="Jovana Oliveira" />
    <div className="card-nome">Jovana Oliveira</div>
    <div className="card-contato">
      <div className="contato-label">Email para contato:</div>
      <div className="contato-email">jovana.silva01@etec.sp.gov.br</div>
    </div>
  </div>
  <div className="card">
    <img src={aluna3} alt="Karinne Angelo" />
    <div className="card-nome">Karinne Angelo</div>
    <div className="card-contato">
      <div className="contato-label">Email para contato:</div>
      <div className="contato-email">karinn3.angelo@gmail.com</div>
    </div>
  </div>
  <div className="card">
    <img src={aluna4} alt="Leticia Guanaes" />
    <div className="card-nome">Leticia Guanaes</div>
    <div className="card-contato">
      <div className="contato-label">Email para contato:</div>
      <div className="contato-email">lehguanaes@gmail.com</div>
    </div>
  </div>
  <div className="card">
    <img src={aluna5} alt="Maria Monteiro" />
    <div className="card-nome">Maria Monteiro</div>
    <div className="card-contato">
      <div className="contato-label">Email para contato:</div>
      <div className="contato-email">monteiroviana2@gmail.com</div>
    </div>
  </div>
</div>

      <Link to="/ComoFunciona" className="botao-metodologia">
        Veja como funciona essa metodologia
      </Link>
    </section>
  );
}
