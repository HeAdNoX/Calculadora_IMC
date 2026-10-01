function calcularIMC() {
  let peso = Number(document.getElementById('peso').value);
  let altura = Number(document.getElementById('altura').value);

  let imc = peso / (altura * altura);

  document.getElementById('resultado').innerText = imc.toFixed(2);

if (imc < 18.5) {
  document.getElementById('resultado').innerText = imc.toFixed(2) + " Abaixo do peso";
} else if (imc < 25) {
  document.getElementById('resultado').innerText = imc.toFixed(2) + " Peso normal";
} else if (imc < 30) {
  document.getElementById('resultado').innerText = imc.toFixed(2) + " Sobrepeso";
} else {
  
}
}

//INTERAÇAO COM IA
// 1. Coloca sua chave aqui - pega em aistudio.google.com
const CHAVE = "SUA_CHAVE_AQUI";

// 2. Essa é a função que chama a IA e mostra na tela
async function gerarDicaIA(imc) {
  const box = document.getElementById('dicaIA'); // <div id="dicaIA"></div> no seu HTML
  box.style.display = "block";
  box.innerText = "Gerando dica...";

  let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CHAVE}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Meu IMC é ${imc}, me dê 3 dicas curtas de alimentação saudável em PT-BR` }] }]
    })
  });

  let dados = await res.json();
  box.innerText = dados.candidates[0].content.parts[0].text;
}