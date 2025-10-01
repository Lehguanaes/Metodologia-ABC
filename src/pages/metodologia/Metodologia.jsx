import { Link } from "react-router-dom";
import "./Metodologia.css";
import { useState } from 'react';
import Chart from 'react-apexcharts';


export default function Metodologia() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [C, setC] = useState(0);

    const [showResult, setShowResult] = useState(false);
    const [diagnostico, setDiagnostico] = useState('');
   
  const classificarValor = (valor, tipo) => {
    if (tipo === 'A') {
      if (valor >= 32) return 'A+';
      if (valor >= 29 && valor <= 31) return 'A+/-';
      return 'A-';
    }
    if (tipo === 'B') {
      if (valor >= 32) return 'B+';
      if (valor >= 29 && valor <= 31) return 'B+/-';
      return 'B-';
    }
    if (tipo === 'C') {
      if (valor >= 32) return 'C+';
      if (valor >= 29 && valor <= 31) return 'C+/-';
      return 'C-';
    }
  };

  const gerarDiagnostico = () => {
    const classA = classificarValor(A, 'A');
    const classB = classificarValor(B, 'B');
    const classC = classificarValor(C, 'C');

    // Lógica dos diagnósticos baseada nas combinações
    let diag = '';

    //1
    if (classA === 'A+' && classB === 'B-' && classC === 'C-') {
      diag = 'O MELHOR CENÁRIO POSSÍVEL TRABALHO DE MANUTENÇÃO E REVISÃO ESPAÇADA DOS CONTEÚDOS REVISÃO ESPAÇADA: ENTRE 1 MÊS E 15 DIAS DE REVISÃO DO CONTEÚDO';
    } 
    
        //2

    else if (classA === 'A+' && classB === 'B+/-' && classC !== 'C-') {
      diag = 'ABAIXO DO MELHOR CENÁRIO MANUTENÇÃO DOS A´S E FOCO EM ENTENDER OS B´S (APOSTILA OU VIDEOAULA)';
    } 
    
        //3

    else if (classA === 'A+' && classB !== 'B+' && classC === 'C-') {
      diag = 'FOCO EM DIMINUIR O NÚMERO DE B´S (APOSTILA OU VIDEOAULA)';
    } 
    
        //4

    else if (classA !== 'A+' && classB === 'B-' && classC === 'C+/-') {
      diag = 'FOCO EM IGUALAR C´S COM B´S (APOSTILA OU VIDEOAULA) E SÓ DEPOIS DISSO FOCAR NOS B´S';
    } 

        //5

    else if (classA === 'A+' || classB === 'B+/-' || classC === 'C+/-') {
      diag = 'FOCO EM COLOCAR OS C´S NOS B´S (COMEÇAR A ENTENDER O QUE NÃO SEI: ESTUDE POR APOSTILA) – OU SEJA, DIMINUIR C´S AUMENTA OS B´S PARA DEPOIS AUMENTAR OS A´S';
    } 
    
        //6

    else if (classA === 'A+' && classB === 'B+' && classC === 'C+/-') {
      diag = 'PEGUE OS B´S E ESTUDE E FAÇA EXERCÍCIOS (ENTENDENDO-OS, FARÁ SEUS C´S DIMINUIREM)';
    } 
    
        //7

    else if (classA === 'A+' && classB === 'B-' && classC === 'C+') {
      diag = 'FOCAR EM DIMINUIR C´S (VEJA VÍDEOAULAS DOS ASSUNTOS) – PASSE A CONHECER O QUE NÃO SABE NADA';
    } 
    
        //8

    else if (classA === 'A+' && classB === 'B+/-' && classC === 'C+') {
      diag = 'ESTUDAR B´S E C´S (VIDEOAULA E EXERCÍCIOS DE FORMA REPETITIVA) FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS';
    } 
    
        //9

    else if (classA === 'A+' && classB === 'B+' && classC === 'C+') {
      diag = 'ESTUDAR B´S E C´S (VIDEOAULA E EXERCÍCIOS DE FORMA MUITO REPETITIVA)FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //10

    else if (classA === 'A+/-' && classB === 'B-' && classC === 'C-') {
      diag = 'FOCO EM AUMENTAR O NÚMERO DE A´S (APOSTILA + EXERCÍCIOS) OU SEJA, VOCÊ PRECISA APRENDER MAIS (MAIS FOCO E REPETIÇÃO)';
    } 
    
        //11

    else if (classA === 'A+/-' && classB === 'B+/-' && classC === 'C-') {
      diag = 'FOCO EM AUMENTAR A´S E B´S (APOSTILA + EXERCÍCIOS) OU SEJA, VOCÊ PRECISA APRENDER MAIS (MAIS FOCO E REPETIÇÃO)';
    }

        //12

    else if (classA === 'A+/-' && classB === 'B+' && classC === 'C-') {
      diag = 'FOCAR EM DIMINUIR B´S (ISSO FAZ SEUS A´S AUMENTAREM: APOSTILA + EXERCÍCIOS). FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS';
    } 

        //13

    else if (classA === 'A+/-' && classB === 'B-' && classC === 'C+/-') {
      diag = 'ESTUDAR OS C´S E INICIAR O PROCESSO DE ENTENDÊ-LOS (APOSTILA + EXERCÍCIOS). FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS';
    } 
    
        //14

    else if (classA === 'A+/-' && classB === 'B+/-' && classC === 'C+/-') {
      diag = 'ESTUDAR OS B´S C´S E INICIAR O PROCESSO DE ENTENDÊ-LOS (VIDEOAULA + EXERCÍCIOS). FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS';
    } 
    
        //15

    else if (classA === 'A+/-' && classB === 'B+' && classC === 'C+/-') {
      diag = 'DIMINUIR C´S E TRANSFORMAR B´S EM A´S (VIDEOAULA + EXERCÍCIOS). FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //16

    else if (classA === 'A+/-' && classB === 'B-' && classC === 'C+') {
      diag = 'FOCO EM DIMINUIR C´S (VIDEOAULA + EXERCÍCIOS). FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //17

    else if (classA === 'A+/-' && classB === 'B+/-' && classC === 'C+') {
      diag = 'FOCO EM DIMINUIR C´S E ESTUDAR BEM OS B´S (VIDEOAULA + EXERCÍCIOS). FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //18
    else if (classA === 'A+/-' && classB === 'B+' && classC === 'C+') {
      diag = 'FOCO EM DIMINUIR B´S E C´S (VIDEOAULA + EXERCÍCIOS). FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //19
    else if (classA === 'A-' && classB === 'B-' && classC === 'C-') {
      diag = 'AQUI É PRECISO REESTUDAR TODOS OS ASSUNTOS ATRAVÉS OU DE VIDEOAULA OU APOSTILA. FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS';
    } 
    
        //20

    else if (classA === 'A-' && classB === 'B+/-' && classC === 'C-') {
      diag = 'É PRECISO PROCURAR UM CURSINHO PRÉ-VESTIBULAR DE NÍVEL MÉDIO. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //21

    else if (classA === 'A-' && classB === 'B+' && classC === 'C-') {
      diag = 'É PRECISO PROCURAR UM CURSINHO PRÉ-VESTIBULAR DE NÍVEL FORTE. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //22

    else if (classA === 'A-' && classB === 'B-' && classC === 'C+/-') {
      diag = 'É PRECISO PROCURAR UM CURSINHO DE NÍVEL FORTE E UM GRANDE PROGRAMA DE ESTUDOS COMPLEMENTARES. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //23

    else if (classA === 'A-' && classB === 'B+/-' && classC === 'C+/-') {
      diag = 'PROCURE UM CURSINHO PREPARATÓRIO PARA O ENSINO MÉDIO E ADOTE UM ROTINA INTENSA DE ESTUDOS. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //24

    else if (classA === 'A-' && classB === 'B+' && classC === 'C+/-') {
      diag = 'CURSINHO PREPARATÓRIO PARA O ENSIO MÉDIO, ROTINA INTENSA DE ESTUDOS E MUITO EXERCÍCIO BÁSICO. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //25

    else if (classA === 'A-' && classB === 'B-' && classC === 'C+') {
      diag = 'É PRECISO RECOMEÇAR O ENSINO MÉDIO: REVEJA TODOS OS ASSUNTOS ATRAVÉS DE VIDEOAULAS COM ANOTAÇÕES E EXERCÍCIOS. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //26

    else if (classA === 'A-' && classB === 'B+/-' && classC === 'C+') {
      diag = 'É PRECISO REFORÇO ESCOLAR MÉDIO COM REVISÃO DO FUNDAMENTAL II E DO ENSINO MÉDIO. (ALÉM DE ESTUDAR EM CASA)';
    } 
    
        //27
    else{
      diag = 'A RECOMENDAÇÃO É VOLTAR AO FUNDAMENTAL II E CORRIGIR LACUNAS DE APRENDIZADO BÁSICAS (REFORÇO ESCOLAR FORTE). (ALÉM DE ESTUDAR EM CASA)';
    } 
  
    setDiagnostico(diag);
    setShowResult(true);
  };


        /*adicionar os gráficos*/ 






    const incrementar = (valor, setValor) => setValor(valor + 1);
    const decrementar = (valor, setValor) => setValor(valor > 1 ? valor - 1 : 1);



    return (
    <section className="metodologia-container">
      {/* Cabeçalho */}
      <div className="metodologia-header">
        <h2>Metodologia ABC</h2>
        <p>
          A <strong>Metodologia ABC</strong> é uma forma simples e eficaz de desempenho.
          Com todas essas informações, agora vamos para o passo a passo do seu diagnóstico!
        </p>
      </div>

      {/* Lista de passos */}
      <ul className="metodologia-lista">
        <li>Resolva o simulado normalmente.</li>
        <li>Classifique cada questão como A, B ou C.</li>
        <li>Insira os números no sistema.</li>
        <li>Gere seu diagnóstico em forma de gráfico.</li>
      </ul>

      {/* Formulário ABC */}
      <br />
      <p>Classifique suas questões....</p>
         <div className="form-ABC">

            {/* Input A */}
            <div className="input-group">
              <label>A</label>
              <div className="input-control">
                <button onClick={() => decrementar(A, setA)}>-</button>
                <input 
                  type="number" 
                  value={A}
                  onChange={(e) => setA(Number(e.target.value))}
                />
                <button onClick={() => incrementar(A, setA)}>+</button>
              </div>
            </div>

            {/* Input B */}
            <div className="input-group">
              <label>B:</label>
              <div className="input-control">
                <button onClick={() => decrementar(B, setB)}>-</button>
                <input 
                  type="number"
                  value={B} 
                  onChange={(e) => setB(Number(e.target.value))}
                />
                <button onClick={() => incrementar(B, setB)}>+</button>
              </div>
            </div>

            {/* Input C */}
            <div className="input-group">
              <label>C:</label>
              <div className="input-control">
                <button onClick={() => decrementar(C, setC)}>-</button>
                <input 
                  type="number"
                  value={C} 
                  onChange={(e) => setC(Number(e.target.value))}
                />
                <button onClick={() => incrementar(C, setC)}>+</button>
              </div>
            </div>
      </div>

        {/* Botão Gerar Diagn[oticos] */}
        <button onClick={gerarDiagnostico} className="btn-gerar">
          Gerar Diagnóstico
        </button>

      <br /><br />
            <span className="diagnostico-texto">{diagnostico}</span>
    
          

    </section>
  );
}