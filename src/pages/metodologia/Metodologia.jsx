import { Link } from "react-router-dom";
import "./Metodologia.css";
import { useState } from "react";
import Chart from "react-apexcharts";
import Swal from "sweetalert2";
import { getDiagnostico } from '../../components/diagnostic/diagnostics';

export default function Metodologia() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [diagnostico, setDiagnostico] = useState("");

  const [corA, setCorA] = useState("#f13674");
  const [corB, setCorB] = useState("#0E2A47");
  const [corC, setCorC] = useState("#FFCE56");
  const cores = [corA, corB, corC];

  const formatarPorcentagemBR = (num) => {
    return Number(num).toFixed(1).replace(".", ",") + "%";
  };

  const classificarValor = (valor, tipo) => {
    if (tipo === "A") {
      if (valor >= 32) return "A+";
      if (valor >= 29 && valor <= 31) return "A+/-";
      return "A-";
    }
    if (tipo === "B") {
      if (valor >= 32) return "B+";
      if (valor >= 29 && valor <= 31) return "B+/-";
      return "B-";
    }
    if (tipo === "C") {
      if (valor >= 32) return "C+";
      if (valor >= 29 && valor <= 31) return "C+/-";
      return "C-";
    }
    return "";
  };

  const gerarDiagnostico = () => {
    const total = (Number(A) || 0) + (Number(B) || 0) + (Number(C) || 0);

    if (total !== 180) {
      Swal.fire({
        icon: "warning",
        iconColor: "var(--cor-rosa)",
        title: "Atenção!",
        text: `O total de questões precisa ser 180. 
Atualmente você inseriu ${total}.`,
        confirmButtonColor: "var(--cor-rosa)",
      });
      return;
    }

    const classA = classificarValor(Number(A), "A");
    const classB = classificarValor(Number(B), "B");
    const classC = classificarValor(Number(C), "C");

    let diag = "";

    diag = getDiagnostico(classA, classB, classC);
    setDiagnostico(diag);
    setShowResult(true);
  };

  const pieDataLabelFormatter = (val, opts) => {
    const series = opts.w.config.series || [];
    const raw = series[opts.seriesIndex];
    const sum = series.reduce((s, x) => s + Number(x || 0), 0) || 1;
    const pct = (raw / sum) * 100;
    const tipo = ["A", "B", "C"][opts.seriesIndex];
    return `${formatarPorcentagemBR(pct)} (${classificarValor(raw, tipo)})`;
  };

  const baseOptions = {
    chart: { toolbar: { show: true } },
    colors: cores,
    legend: { position: "bottom" },
  };

  const pieOptions = {
    ...baseOptions,
    labels: ["A", "B", "C"],
    title: { text: "Distribuição ABC", align: "center" },
    dataLabels: {
      enabled: true,
      formatter: pieDataLabelFormatter,
      style: { fontSize: "13px", colors: ["#fff"] },
    },
  };

  const donutOptions = {
    ...baseOptions,
    labels: ["A", "B", "C"],
    title: { text: "Proporção ABC (Donut)", align: "center" },
    plotOptions: { pie: { donut: { size: "60%" } } },
    dataLabels: { enabled: true, formatter: pieDataLabelFormatter },
  };

  const barOptions = {
    ...baseOptions,
    title: { text: "Comparação ABC (Barras Verticais)", align: "center" },
    chart: { type: "bar" },
    xaxis: { categories: ["A", "B", "C"] },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const idx = opts.dataPointIndex;
        const raw = opts.w.config.series[0].data[idx];
        const sum = opts.w.config.series[0].data.reduce(
          (s, x) => s + Number(x),
          0
        );
        const pct = (raw / sum) * 100;
        return `${formatarPorcentagemBR(pct)} (${classificarValor(
          raw,
          ["A", "B", "C"][idx]
        )})`;
      },
    },
  };

  const horizontalBarOptions = {
    ...baseOptions,
    title: { text: "Comparação ABC (Barras Horizontais)", align: "center" },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        borderRadius: 6,
      },
    },
    xaxis: { categories: ["A", "B", "C"] },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const idx = opts.dataPointIndex;
        const raw = opts.w.config.series[0].data[idx];
        const sum = opts.w.config.series[0].data.reduce(
          (s, x) => s + Number(x),
          0
        );
        const pct = (raw / sum) * 100;
        return `${formatarPorcentagemBR(pct)} (${classificarValor(
          raw,
          ["A", "B", "C"][idx]
        )})`;
      },
    },
  };

  const seriesValues = [Number(A) || 0, Number(B) || 0, Number(C) || 0];

  return (
    <section className="metodologia-container">
      <div className="metodologia-header">
        <h2>Metodologia ABC</h2>
        <p>
          A <strong>Metodologia ABC</strong> é uma forma simples e eficaz de
          desempenho. Vamos agora gerar seu diagnóstico!
        </p>
      </div>

      <ul className="metodologia-lista">
        <li>Resolva o simulado ENEM normalmente.</li>
        <li>Classifique cada questão como A, B ou C.</li>
        <li>Insira os números no sistema.</li>
        <li>Gere seu diagnóstico.</li>
      </ul>

      <p style={{ marginTop: 24 }}>Classifique suas questões:</p>

      <div className="form-ABC">
        <div className="input-group">
          <label>A</label>
          <div className="input-control">
            <button onClick={() => setA(Math.max(0, Number(A) - 1))}>-</button>
            <input
              type="number"
              value={A}
              placeholder="0"
              onChange={(e) => setA(e.target.value)}
            />
            <button onClick={() => setA(Number(A) + 1)}>+</button>
          </div>
        </div>

        <div className="input-group">
          <label>B</label>
          <div className="input-control">
            <button onClick={() => setB(Math.max(0, Number(B) - 1))}>-</button>
            <input
              type="number"
              value={B}
              placeholder="0"
              onChange={(e) => setB(e.target.value)}
            />
            <button onClick={() => setB(Number(B) + 1)}>+</button>
          </div>
        </div>

        <div className="input-group">
          <label>C</label>
          <div className="input-control">
            <button onClick={() => setC(Math.max(0, Number(C) - 1))}>-</button>
            <input
              type="number"
              value={C}
              placeholder="0"
              onChange={(e) => setC(e.target.value)}
            />
            <button onClick={() => setC(Number(C) + 1)}>+</button>
          </div>
        </div>
      </div>

      <button onClick={gerarDiagnostico} className="btn-gerar">
        Gerar Diagnóstico
      </button>

      {showResult && (
        <div>
        {/* DIAGNÓSTICO FINAL */}
        <div className="diagnostico">
          <p className="diagnostico-titulo">Diagnóstico Atual</p>
          <p className="diagnostico-texto">{diagnostico}</p>
        </div>

          {/* GRÁFICOS QUE VOCÊ PEDIU */}
          <div className="graficos-grid">
            <div className="chart-container">
              <Chart
                options={pieOptions}
                series={seriesValues}
                type="pie"
                width="100%"
              />
            </div>

            <div className="chart-container">
              <Chart
                options={barOptions}
                series={[{ name: "Valores", data: seriesValues }]}
                type="bar"
                width="100%"
              />
            </div>

            <div className="chart-container">
              <Chart
                options={donutOptions}
                series={seriesValues}
                type="donut"
                width="100%"
              />
            </div>

            <div className="chart-container">
              <Chart
                options={horizontalBarOptions}
                series={[{ name: "Valores", data: seriesValues }]}
                type="bar"
                width="100%"
              />
            </div>
          </div>
           <div className="barra-cores" style={{ marginTop: 16 }}>
            <h3 className="barra-cores-title">Personalizar cores dos gráficos</h3>

            <div className="barra-cores-controls">
              <div className="cor-item">
                <label>Cor A</label>
                <input
                  type="color"
                  value={corA}
                  onChange={(e) => setCorA(e.target.value)}
                />
              </div>

              <div className="cor-item">
                <label>Cor B</label>
                <input
                  type="color"
                  value={corB}
                  onChange={(e) => setCorB(e.target.value)}
                />
              </div>

              <div className="cor-item">
                <label>Cor C</label>
                <input
                  type="color"
                  value={corC}
                  onChange={(e) => setCorC(e.target.value)}
                />
              </div>
            </div>
            <h4 className="barra-cores-subtitle">Clique nas cores para alterar!</h4>
          </div>
        </div>
      )}
    </section>
  );
}