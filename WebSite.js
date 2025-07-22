// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualiza a exibição do carrinho na página
function atualizarCarrinho() {
  const container = document.getElementById("carrinho-itens");
  if (!container) return;

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  let html = '<ul style="list-style:none;padding:0">';
  let total = 0;
  carrinho.forEach((item, index) => {
    html += `<li style="margin-bottom:1rem;">
      <strong>${item.nome}</strong><br>
      R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})" style="margin-left:10px">Remover</button>
    </li>`;
    total += item.preco;
  });
  html += `</ul>
    <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
    <a href="pagamento.html" class="btn" style="display:inline-block;margin-top:1rem;background:#28a745;color:#fff;padding:10px 20px;border:none;border-radius:5px;text-decoration:none;">Ir para Pagamento</a>`;

  container.innerHTML = html;
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho!`);
  atualizarCarrinho();
}

// Remove item do carrinho
function removerItem(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

// Remove acentos da string
function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Lista de produtos com sinônimos e palavras-chave
const produtos = [
  { termos: ["whey protein", "proteína", "whey", "suplemento"], link: "Whey-Growth.html" },
  { termos: ["creatina", "creatine", "suplemento creatina"], link: "Creatina-Growth.html" },
  { termos: ["pré treino", "pre-treino", "pre workout", "energia"], link: "Pré-Treino-Growth.html" },
  { termos: ["vitamina b12", "b12", "vitamina"], link: "Vitamina-B12.html" },
  { termos: ["ômega 3", "omega 3", "óleo de peixe", "ômega"], link: "Ômega-3.html" },
  { termos: ["l-arginina", "arginina", "vasodilatação"], link: "L-Arginina.html" },
  { termos: ["halteres", "pesos", "musculação"], link: "Halteres-Ajustáveis.html" },
  { termos: ["corda de pular", "corda", "cardio"], link: "Corda-de-Pular.html" },
  { termos: ["strap", "alça", "punho", "levantamento"], link: "Strap.html" },
  { termos: ["luvas", "luvas de treino", "proteção mão"], link: "Luvas.html" },
  { termos: ["garrafa", "squeeze", "água", "hidratação"], link: "Garrafa.html" },
  { termos: ["camiseta de compressão", "camisa compressão", "blusa academia"], link: "Camiseta-de-Compressão.html" },
  { termos: ["kit sport fit", "kit fitness", "combo fit"], link: "Kit-Sport-Fit.html" },
  { termos: ["shorts masculino", "bermuda", "roupa treino"], link: "Shorts-Masculino.html" },
  { termos: ["camisa térmica masculina", "camiseta térmica", "blusa esportiva"], link: "Camisa-Térmica-Masculina.html" },
  { termos: ["calça esportiva", "calça academia", "calça fitness"], link: "Calça-esportiva.html" },
  { termos: ["moletom masculino", "casaco", "blusa de frio"], link: "Moletom-Masculino.html" }
];

// Função de pesquisa com sinônimos
function pesquisarProduto() {
  const termoDigitado = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
  const termoLimpo = removerAcentos(termoDigitado);

  for (const produto of produtos) {
    for (const termo of produto.termos) {
      if (removerAcentos(termo).includes(termoLimpo)) {
        window.location.href = produto.link;
        return false;
      }
    }
  }

  alert("Produto não encontrado!");
  return false;
}

// Executar ao carregar a página
window.onload = atualizarCarrinho;