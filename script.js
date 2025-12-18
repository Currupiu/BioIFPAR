document.addEventListener("DOMContentLoaded", () => {

  /* ===================== MODAL DE IMAGEM ===================== */
  const imagens = document.querySelectorAll(".zoom-img");
  const modal = document.getElementById("customModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.getElementById("closeModalBtn");

  const tituloPagina = document.title;
  let descricoes = [];

  if (tituloPagina === "BioIFPAR-Flora") {
    descricoes = [
      "A planta apresentada é a espirradeira (Nerium oleander), também conhecida como oleandro ou loendro. Trata-se de um arbusto ornamental muito utilizado no paisagismo, destacando-se por suas flores vistosas em tons de rosa, branco ou vermelho. Possui folhas longas, estreitas e coriáceas, semelhantes a couro. Apesar de sua beleza, é importante ressaltar que todas as partes da planta são altamente tóxicas para humanos e animais, o que lhe rendeu o nome popular de “flor-de-veneno”.",
      "A araucária-de-norfolk (Araucaria heterophylla), também conhecida como pinheiro-de-norfolk ou árvore-de-natal, é uma espécie ornamental muito usada no paisagismo. Apresenta folhas finas em forma de agulhas e tronco reto e robusto. Diferentemente do pinheiro-do-paraná, nativo do Brasil, essa espécie é originária da Ilha de Norfolk, na Austrália. Quando jovem, possui formato piramidal bem definido, que se modifica na fase adulta, concentrando a folhagem na parte superior.",
      "O pau-brasil (Paubrasilia echinata), também chamado de ibirapitanga, é uma árvore de grande importância histórica e ecológica, sendo considerada a árvore nacional do Brasil. Possui tronco reto e robusto, ramificação desde a base e copa densa e arredondada. Suas folhas são compostas e brilhantes, proporcionando sombra abundante.",
      "A cássia-imperial (Cassia fistula), conhecida popularmente como chuva-de-ouro ou canafístula, é facilmente identificada por seus longos cachos pendentes de flores amarelas intensas. A floração ocorre geralmente entre dezembro e abril, criando um efeito visual marcante, como se a árvore estivesse coberta por uma “chuva de ouro”.",
      "A acalifa-macarrão (Acalypha hispida), também chamada de rabo-de-gato ou rabo-de-raposa, é um arbusto ornamental conhecido por suas inflorescências longas, vermelhas e felpudas, que pendem dos ramos. As folhas são verdes, ovais e com bordas serrilhadas. Desenvolve-se melhor em climas tropicais e subtropicais, necessitando de solo fértil, bem drenado e boa luminosidade.",
      "A mussaenda (Mussaenda alicia ou Mussaenda erythrophylla), popularmente conhecida como dona-planta ou mussaenda-vermelha, destaca-se por suas grandes brácteas coloridas que envolvem pequenas flores amareladas. Essas brácteas podem apresentar cores como rosa, vermelho, branco ou alaranjado. É um arbusto ornamental muito utilizado em jardins tropicais devido à sua floração abundante e duradoura.",
      "A pinha (Annona squamosa), também conhecida como fruta-do-conde ou ata, é reconhecida pelo fruto verde e rugoso, formado por gomos bem definidos. Quando maduro, o fruto apresenta polpa branca, doce e aromática, com sementes pretas facilmente removíveis. Originária da América Central e do Caribe, foi introduzida no Brasil no século XVII e adaptou-se bem ao clima local.",
      "A planta apresentada é o algodoeiro (Gossypium hirsutum), um arbusto produtor da fibra natural amplamente utilizada na indústria têxtil. A imagem mostra as cápsulas abertas, revelando o algodão branco e fofo que envolve as sementes. Após o florescimento, os frutos amadurecem e se abrem, indicando o momento ideal para a colheita.",
      "O ipê-amarelo (Handroanthus albus ou Handroanthus chrysanthus) é uma das árvores mais emblemáticas do Brasil. Durante a floração, perde grande parte das folhas e se cobre de flores amarelas intensas, formando uma paisagem marcante. Em algumas regiões do Nordeste, também é conhecido como “pé de cuscuz” ou “craibeira”. Além de ornamental, é valorizado por sua resistência e adaptação a diversos biomas.",
      "A amendoeira-da-praia (Terminalia catappa), também chamada de chapéu-de-sol ou sete-copas, é muito comum em áreas urbanas e litorâneas. Possui folhas grandes e densas e uma copa ampla que proporciona sombra abundante. Apesar da queda sazonal das folhas, elas se regeneram rapidamente.",
      "O jacarandá (Jacaranda mimosifolia) é uma árvore ornamental muito utilizada na arborização urbana. Suas folhas bipinadas são delicadas e lembram samambaias. Durante a floração, exibe flores em tons de azul ou roxo, após a queda das folhas. É nativa da América do Sul e adapta-se bem a diferentes regiões do Brasil.",
      "A trapoeraba-roxa (Tradescantia pallida purpurea), também conhecida como coração-roxo ou lambari-roxo, destaca-se por suas folhas longas e suculentas de coloração roxa intensa. É uma planta rasteira, de crescimento rápido, muito usada em vasos e jardins. É de fácil cultivo e necessita de boa luminosidade para manter a cor vibrante.",
      "Conhecida por nomes populares como cabaça, cuia ou árvore-da-cuia, essa planta apresenta como principal característica a caulifloria, ou seja, os frutos nascem diretamente do tronco e dos galhos principais. Os frutos possuem casca dura e lenhosa, sendo muito utilizados artesanalmente, embora a polpa não seja comestível.",
      "A Ixora coccinea, conhecida como ixora-vermelha ou chama-da-floresta, é um arbusto perene muito usado no paisagismo. Apresenta cachos densos de pequenas flores tubulares em tons de vermelho vivo ou escarlate. As folhas são verde-escuras, brilhantes e coriáceas, formando uma planta densa e bem ramificada.",
      "O hibisco (Hibiscus rosa-sinensis), conhecido como mimo-de-vênus ou graxa-de-estudante, destaca-se por suas grandes flores em formato de trombeta, nas cores vermelho e branco. As flores são vistosas, geralmente com cinco pétalas, e duram pouco tempo após a abertura. As folhas são verde-escuras, brilhantes e com bordas dentadas.",
      "A palmeira-areca (Areca catechu), também chamada de areca-de-betel, apresenta tronco único, fino e anelado, com uma coroa verde bem visível abaixo das folhas. Suas folhas são pinadas, longas e arqueadas, conferindo porte esbelto, muito comum em áreas urbanas e escolas.",
      "Essa palmeira caracteriza-se pelo tronco grosso e escuro, com restos de bainhas foliares, e folhas pinadas bastante arqueadas, com aspecto plumoso. Não apresenta frutos grandes como o coqueiro e é uma espécie nativa do Brasil, comum em pátios escolares e áreas urbanas.",
      "A dracena (Dracaena marginata) possui vários troncos lenhosos e ramificados, com folhas longas, estreitas e pontiagudas, formando rosetas nas extremidades dos ramos. É muito utilizada no paisagismo urbano e apresenta troncos com cicatrizes anelares deixadas pelas folhas antigas.",
      "A poaia-branca (Richardia scabra) é uma planta herbácea anual de crescimento rasteiro, considerada planta daninha em algumas regiões. É comum em solos arenosos e áreas cultivadas. Suas flores são pequenas, geralmente brancas ou levemente rosadas, agrupadas em inflorescências terminais.",
      "A mangueira (Mangifera indica) é uma árvore frutífera de grande porte, com copa ampla em forma de guarda-chuva. Originária do sul e sudeste da Ásia, foi introduzida no Brasil no século XVI e adaptou-se muito bem ao clima local. Produz frutos verdes quando imaturos e é muito comum em áreas urbanas e rurais. Na imagem, também aparecem canários-da-terra-verdadeiros (Sicalis flaveola) - Mapa:25, pequenos pássaros amarelos granívoros.",
      "A planta identificada como Centrosema brasilianum, conhecida popularmente como feijão-bravo ou olho-de-boi-falso, é uma leguminosa herbácea perene, de hábito rasteiro ou trepador. Suas flores são geralmente violetas ou lilases e surgem com maior frequência nas estações mais secas.",
      "O ipê-rosa (Tabebuia rosea) é uma árvore decídua conhecida por sua floração exuberante em tons de rosa a magenta. As flores tubulares formam cachos terminais e surgem durante a estação seca, quando a árvore perde as folhas. Nativa da América do Sul e Central, é amplamente utilizada no paisagismo urbano e possui madeira resistente e durável.",
      "O cogumelo apresentado é o Volvopluteus gloiocephalus, uma espécie saprófita que cresce em solos ricos em matéria orgânica. Possui chapéu liso e viscoso, variando do cinza ao esverdeado, e apresenta uma volva branca na base do pé. Suas lâminas mudam de brancas para rosadas à medida que amadurecem."
    ];
  }

  if (tituloPagina === "BioIFPAR-Fauna") {
    descricoes = [
      "As aves apresentadas são corujas-buraqueiras (Athene cunicularia), que vivem em buracos no solo, escavados por elas ou aproveitados de outros animais. Habitam áreas abertas como campos, restingas e ambientes urbanos. Diferentemente da maioria das corujas, são ativas tanto durante o dia quanto à noite.",
      "Esses pássaros são pequenos e apresentam coloração predominantemente amarela, mais intensa nos machos, que costumam exibir tons alaranjados ou avermelhados na testa e na face. São aves granívoras, frequentemente observadas em campos abertos, jardins e áreas urbanas, alimentando-se de sementes no chão.",
      "O réptil identificado é o lagarto-de-parede (Hemidactylus mabouia), uma espécie exótica muito comum em áreas urbanas brasileiras. Possui coloração marrom-acinzentada e grande habilidade de escalar paredes, onde caça insetos. É predominantemente noturno e desempenha papel importante no controle de pragas, não oferecendo perigo aos humanos.",
      "A borboleta mostrada pertence à subfamília Satyrinae, conhecida como borboleta-marrom. Apresenta coloração escura e uniforme, com padrão discreto que favorece a camuflagem. Geralmente repousa com as asas fechadas ou parcialmente abertas e é encontrada em regiões tropicais e subtropicais, incluindo áreas urbanas do Brasil.",
      "O animal mostrado é o gambá-de-orelha-branca (Didelphis albiventris), conhecido popularmente por nomes como timbu, saruê e mucura. Trata-se de um marsupial onívoro nativo da América do Sul, com dieta variada e grande capacidade de adaptação, vivendo em florestas, parques e áreas urbanas.",
      "A imagem mostra uma cobra-coral-verdadeira (Micrurus corallinus), uma serpente altamente venenosa pertencente ao gênero Micrurus. Essa espécie possui veneno neurotóxico, que atua diretamente sobre o sistema nervoso, podendo causar paralisia muscular e dificuldades respiratórias. As cobras-corais-verdadeiras apresentam um padrão de coloração característico, formado por anéis alternados de cores vivas, geralmente preto, amarelo ou branco e vermelho ou laranja, o que funciona como um importante mecanismo de alerta na natureza.",
      "O gato presente na foto é um gato doméstico 'Vira lata', eles estão presentes em todos os continentes, exceto na Antártida, além de muitas ilhas, graças principalmente à domesticação e à dispersão pelos humanos. Vivem, em geral, próximos a áreas habitadas, tanto em ambientes urbanos quanto rurais, e também existem populações selvagens associadas a antigos ou atuais assentamentos humanos. Sua grande adaptabilidade permite que ocupem diversos habitats, como florestas, cerrado, caatinga, pantanal e áreas costeiras",
      "O quero-quero é uma ave típica da América do Sul, também conhecida por tetéu, téu-téu, terém-terém e espanta-boiada. Eles são encontrados desde a Argentina e o leste da Bolívia até a margem direita do baixo Amazonas, no Brasil. Habitam grandes campinas úmidas, áreas alagadas de rios e lagoas, e pastagens"
    ];
  }

  if (modal && imagens.length > 0) {
    imagens.forEach((img, index) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;

        const legenda = img.closest("div")?.querySelector(".legenda");
        modalTitle.textContent = legenda ? legenda.textContent : "Item";

        modalDesc.textContent =
          descricoes[index] || "Descrição não disponível.";
      });
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  /* ===================== BUSCA CONTROLADA ===================== */
  const inputBusca = document.getElementById("inputBusca");
  const btnBusca = document.getElementById("btnBusca");
  const mensagemBusca = document.getElementById("mensagemBusca");
  const cards = document.querySelectorAll(".molde3");

  let intervaloBusca = null;

  if (inputBusca && btnBusca && cards.length > 0) {

    btnBusca.addEventListener("click", iniciarBusca);

    inputBusca.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        iniciarBusca();
      }
    });

  }

  function iniciarBusca() {
    const termo = inputBusca.value.toLowerCase().trim();

    limparBusca();

    if (termo === "") return;

    // Mantém a ordem natural das divs
    const resultados = Array.from(cards).filter(card => {
      const texto = card.innerText.toLowerCase();
      return texto.includes(termo); // Pesquisa pelo nome do animal nas legendas
    });

    if (resultados.length === 0) {
      if (mensagemBusca) {
        mensagemBusca.style.display = "block";
        setTimeout(() => mensagemBusca.style.display = "none", 3000);
      }
      return;
    }

    let indice = 0;

    // Destaca o primeiro
    destacarResultado(resultados[indice], termo);

    intervaloBusca = setInterval(() => {

      removerDestaque(resultados[indice]);
      indice++;

      // Chegou ao final → volta ao primeiro e encerra
      if (indice >= resultados.length) {
        destacarResultado(resultados[0], termo);
        clearInterval(intervaloBusca);
        intervaloBusca = null;
        return;
      }

      destacarResultado(resultados[indice], termo);

    }, 1500); // segundo
  }

  /* ===================== FUNÇÕES AUXILIARES ===================== */
  function destacarResultado(card, termo) {
    card.classList.add("resultado-ativo");
    destacarTexto(card, termo);

    card.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  function removerDestaque(card) {
    card.classList.remove("resultado-ativo");

    const marcados = card.querySelectorAll("mark");
    marcados.forEach(m => m.replaceWith(m.textContent));
  }

  function limparBusca() {
    if (intervaloBusca) {
      clearInterval(intervaloBusca);
      intervaloBusca = null;
    }

    cards.forEach(card => {
      card.classList.remove("resultado-ativo");
      const marcados = card.querySelectorAll("mark");
      marcados.forEach(m => m.replaceWith(m.textContent));
    });

    if (mensagemBusca) mensagemBusca.style.display = "none";
  }

  function destacarTexto(card, termo) {
    const regex = new RegExp(`(${termo})`, "gi");

    const legenda = card.querySelector(".legenda");
    if (!legenda) return;

    legenda.innerHTML = legenda.textContent.replace(regex, "<mark>$1</mark>");
  }

});
