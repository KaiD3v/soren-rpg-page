/* ==========================================================================
   SCRIPT DO DOSSIÊ INTERATIVO: SOREN [VAELOR] ALKAHEST
   ========================================================================== */

const IMAGE_PATHS = window.EMBEDDED_IMAGES || {
  soren: "assets/soren.jpg",
  parents: "assets/parents.jpg",
  clan: "assets/clan.jpg",
  villain: "assets/villain.jpg"
};

// Dados centrais que giram em torno de Soren
const DOSSIER_NODES = {
  soren: {
    id: "soren",
    name: "Soren Alkahest",
    formerName: "Vaelor",
    role: "O Protagonista • A Quimera de Três Almas",
    caste: "Ex-Casta do Mercúrio (Renegado)",
    casteColor: "#e58e26",
    soulDensity: 88,
    soulLabel: "Tríplice Fundida (1 Alma Genial + 2 Almas Sacrificadas)",
    alchemicalSymbol: "🜍",
    symbolName: "Alkahest (O Solvente Universal)",
    imageKey: "soren",
    shortRelation: "Centro da Matriz",
    visualGuide: [
      {
        label: "Fisionomia & Porte",
        text: "Jovem (18–20 anos), estatura mediana, físico esguio e postura aristocrática impecável. Rosto de traços finos, simétricos e atraentes, marcado por uma expressão fria e analítica."
      },
      {
        label: "Mutação Tiefling (Artificial)",
        text: "Pele pálida acinzentada com nuances rubras sob o calor mágico. Olhos sem pupilas comuns que ardem como brasas âmbar-douradas. Chifres escuros de textura semelhante à obsidiana estriada curvando-se para trás entre cabelos negros."
      },
      {
        label: "Trajes & Arsenal Alquímico",
        text: "Sobretudo escuro de gola alta da elite Vaelor (com as insígnias do clã arrancadas ou riscadas), atravessado por bandoleiras de couro repletas de ampolas luminescentes de reagentes químicos."
      },
      {
        label: "O Detalhe Inconsciente",
        text: "Pela abertura da gola repousa o antigo colar arcano de cristal azulado de seus pais — o único objeto modesto que ele jamais remove."
      }
    ],
    relationToCenter: "Soren é o próprio epicentro do conflito: nascido com o intelecto de um gênio na casta mais baixa do clã, teve seu corpo deformado em Tiefling quando o líder do clã fundiu as almas de seus pais dentro dele. Hoje caça seu antigo mestre em busca de vingança.",
    egoQuote: "“Não confunda minha eficiência com crueldade. Pessoas com pouco controle sobre o Arcanum são rascunhos inacabados da criação. Eu não maltrato insetos; apenas não desvio o meu passo para poupá-los.”",
    egoAnalysis: "Soren mantém a crença elitista implantada desde a infância pela Casa Vaelor: quem não domina o Arcanum é inferior. Para não admitir que sofre pela morte de pais considerados 'fracos', ele sustenta a desculpa esfarrapada de que sua sede de vingança é puro orgulho ferido por ter sido usado como cobaia.",
    truthQuote: "“Toda vez que queimo minha alma para alterar o ar... sinto dois pulsos quentes impedindo que o meu próprio espírito se desfaça. Eu digo que os desprezo porque, se eu admitir o quanto eles importavam, toda a lógica que me manteve vivo desmorona.”",
    truthAnalysis: "No fundo, Soren amava profundamente Elian e Lyra. A prova viva de sua hipocrisia emocional é o fato de que ele arriscou a própria vida aos 17 anos ao descobrir o assassinato dos pais e até hoje segura o colar arcano deles após cada batalha."
  },

  parents: {
    id: "parents",
    name: "Elian & Lyra Vaelor",
    formerName: null,
    role: "Os Pais • Os Catalisadores Sacrificados",
    caste: "Casta do Enxofre (Baixa Casta)",
    casteColor: "#60a5fa",
    soulDensity: 22,
    soulLabel: "Almas Pequenas e Frágeis (Fundidas ao Filho)",
    alchemicalSymbol: "🜂",
    symbolName: "Sal & Mercúrio Base (A Fundação)",
    imageKey: "parents",
    shortRelation: "Origem & Combustível Anímico",
    visualGuide: [
      {
        label: "Aparência Geral",
        text: "Um casal humano de feições gentis, porém marcadas pelo cansaço precoce dos laboratórios subterrâneos. Usavam túnicas simples de linho cinza manchadas de enxofre, ervas e fuligem alquímica."
      },
      {
        label: "Elian (O Pai)",
        text: "Olhos castanhos serenos, barba rala grisalha e mãos calejadas por décadas manipulando vidrarias e ácidos. Tinha um porte protetor e voz calma, sempre calibrando o colar arcano da família."
      },
      {
        label: "Lyra (A Mãe)",
        text: "De sorriso acolhedor e cabelos presos de forma prática; foi dela que Soren herdou os traços finos do rosto e o fascínio inicial pela botânica e pela estrutura invisível dos elementos."
      },
      {
        label: "A Relíquia Deixada (O Colar Arcano)",
        text: "Um pingente prateado contendo um cristal azul lapidado de baixo teor mágico, criado para estabilizar vapores tóxicos. Hoje repousa no peito de Soren."
      }
    ],
    relationToCenter: "Elian e Lyra deram a Soren não apenas a vida e o amor silencioso pela Alquimia, mas literalmente suas próprias almas. Mortos por Lazare no 'Projeto Quimera', seus espíritos foram destilados e fundidos ao núcleo anímico de Soren para que ele suportasse feitiços de alto nível.",
    egoQuote: "“Elian e Lyra? Dois servos da Casta do Enxofre com almas tão estreitas que mal conseguiam acender uma vela sem suar sangue. A morte deles é irrelevante. Minha revolta é que Lazare ousou misturar a escória anímica deles dentro do meu corpo!”",
    egoAnalysis: "Na superfície, Soren fala dos pais com desdém clínico, tratando-os como estatísticas inferiores da pirâmide do clã. Ele usa o suposto 'nojo' de carregar almas fracas como pretexto racional para odiar Lazare.",
    truthQuote: "“Eles tinham almas pequenas, sim... mas naquele laboratório escuro, eles nunca me olharam como uma arma. Quando tudo dói, ainda sinto o cheiro de lavanda das mãos da minha mãe e o peso do colar do meu pai no meu peito.”",
    truthAnalysis: "A contradição central de Soren: segundo sua própria ideologia, seus pais eram 'insetos' sem valor. Contudo, a dor pela morte deles foi tão avassaladora que o fez trair todo o seu clã e abandonar seu nome."
  },

  clan: {
    id: "clan",
    name: "A Casa Vaelor",
    formerName: null,
    role: "O Clã • A Cidadela do Crisol Áureo",
    caste: "Império Eugenista de 4 Castas",
    casteColor: "#eab308",
    soulDensity: 95,
    soulLabel: "Hegemonia Anímica Milenar",
    alchemicalSymbol: "🜚",
    symbolName: "Aurum (A Hierarquia Absoluta)",
    imageKey: "clan",
    shortRelation: "Doutrinação & Inimigo",
    visualGuide: [
      {
        label: "Arquitetura Vertical de Castas",
        text: "Uma fortaleza colossal esculpida em um pico rochoso negro. A própria geografia da cidadela reflete o valor das almas: quanto mais densa a alma, mais alto se vive."
      },
      {
        label: "O Topo (A Coroa do Éter)",
        text: "Torres douradas reluzentes cercadas por anéis arcanos flutuantes no céu, onde residem os arquimagos de linhagem pura em silêncio absoluto."
      },
      {
        label: "O Meio (As Torres de Mercúrio)",
        text: "Grandes vitrais góticos, bibliotecas imensas e laboratórios de transmutação avançada onde Soren foi treinado dos 7 aos 17 anos como Aprendiz Arcano."
      },
      {
        label: "A Base Subterrânea (Fornalhas de Enxofre)",
        text: "Cavernas esfumaçadas e minas de reagentes na base da montanha, exalando vapores amarelos tóxicos onde a baixa casta trabalha até a exaustão."
      }
    ],
    relationToCenter: "A Casa Vaelor moldou a mente de Soren. Foi o clã que implantou nele a certeza de que seres com menos controle do Arcanum são inferiores, transformou-o em uma arma viva e hoje o considera um experimento fugitivo que deve ser recuperado ou descartado.",
    egoQuote: "“A Casa Vaelor compreendeu a única verdade que importa: o Arcanum não é igualitário. Os fortes governam a matéria; os fracos são a matéria. Meu único problema com o clã é que eles acharam que eu seria a coleira deles, e não o seu carrasco.”",
    egoAnalysis: "Mesmo renegado, Soren ainda pensa como um Vaelor. Ele não quer destruir o clã para 'libertar os oprimidos' — ele quer provar que sua própria capacidade de transmutação supera toda a linhagem pura que o usou.",
    truthQuote: "“Aquela montanha dourada inteira foi construída sobre ossos e almas derretidas no escuro. Eu risquei o nome Vaelor com uma lâmina porque cada letra dele tem o gosto do sangue dos meus pais.”",
    truthAnalysis: "Por trás da arrogância herdada do clã, Soren carrega um trauma profundo dos dez anos em que serviu fielmente aos assassinos de sua própria família sem saber."
  },

  villain: {
    id: "villain",
    name: "Arquimago Lazare Vaelor",
    formerName: null,
    role: "O Vilão • O Lapidador de Almas",
    caste: "Patriarca Supremo (Casta do Éter)",
    casteColor: "#ef4444",
    soulDensity: 100,
    soulLabel: "Alma Abissal / Domínio Molecular Absoluto",
    alchemicalSymbol: "🜔",
    symbolName: "Regulus (O Soberano do Crisol)",
    imageKey: "villain",
    shortRelation: "Criador, Mentor & Alvo de Vingança",
    visualGuide: [
      {
        label: "Presença & Fisionomia",
        text: "Um homem mais velho, de feições aristocráticas afiadas, cabelos escuros com mechas prateadas e barba impecavelmente aparada. Seus olhos pálidos têm a frieza de um cirurgião."
      },
      {
        label: "Vestimentas do Patriarca",
        text: "Mantos cerimoniais negros, rubros e dourados de gola imponente, inteiramente bordados com selos de contenção anímica. Carrega um cajado de cristal carmesim e orbes de captura espiritual."
      },
      {
        label: "Estilo de Magia",
        text: "Enquanto magos comuns recitam fórmulas, Lazare possui tanta densidade de alma que altera a pressão atmosférica, o calor e a gravidade da sala apenas com um gesto calmo dos dedos."
      },
      {
        label: "Postura Psicológica",
        text: "Jamais levanta a voz. Trata Soren não com ódio, mas como um pai severo e orgulhoso diante de uma obra-prima rebelde que precisa ser disciplinada."
      }
    ],
    relationToCenter: "Lazare é o responsável direto por tudo o que Soren é hoje: foi o executor do ritual que matou Elian e Lyra, o criador da forma Tiefling de Soren, o mestre que o ensinou alta magia por dez anos e o homem que o derrotou brutalmente quando a verdade veio à tona.",
    egoQuote: "“Lazare ousou tratar a minha mente e o meu corpo como vidraria de laboratório. Ele me derrotou uma vez porque tinha décadas de vantagem no cultivo da alma. Na próxima vez que nos encontrarmos, vou dissolver cada molécula do corpo dele.”",
    egoAnalysis: "Para Soren, Lazare é o obstáculo supremo. Derrotá-lo significa provar que a perfeição técnica do 'Solvente Alkahest' supera a nobreza sanguínea da Casta do Éter.",
    truthQuote: "“Ele me olhou nos olhos quando eu tinha sete anos, entregou o colar sujo de cinzas dos meus pais e me acolheu como um filho... enquanto as almas deles ainda queimavam nas mãos dele. Eu não quero apenas matá-lo; quero destruir tudo o que ele ama.”",
    truthAnalysis: "A traição de Lazare dói em dobro porque, durante dez anos, Soren o admirou como figura paterna substituta e mentor antes de descobrir o 'Projeto Quimera'."
  }
};

// Dados das 4 Castas do Clã
const CASTE_DATA = [
  {
    tier: "I",
    name: "Casta do Éter (Os Soberanos)",
    symbol: "🜚",
    color: "#eab308",
    soulRange: "Densidade Anímica: 85% – 100%",
    members: "Arquimago Lazare Vaelor e a Linhagem Pura",
    description: "Nascidos de gerações de casamentos eugênicos entre grandes magos. Suas almas são tão vastas que eles alteram o ambiente ao redor quase sem desgaste. Governam a cidadela do topo dourado e enxergam todas as outras formas de vida como recursos.",
    sorenView: "“Eles nasceram com oceanos de alma, mas são preguiçosos na técnica. Gastam dez vezes mais energia do que o necessário porque nunca souberam o que é ter pouco.”"
  },
  {
    tier: "II",
    name: "Casta do Mercúrio (Os Artífices)",
    symbol: "☿",
    color: "#e58e26",
    soulRange: "Densidade Anímica: 50% – 84%",
    members: "Soren (dos 7 aos 17 anos), Alquimistas e Magos de Combate",
    description: "A elite técnica e acadêmica do clã. Composta por magos talentosos que fortalecem a alma através de décadas de estudo rigoroso, alquimia molecular e duelos arcanos. São as espadas e os cientistas da Casa Vaelor.",
    sorenView: "“Onde fui forjado. Ali aprendi que uma mente brilhante aliada à alquimia pode rasgar um mago superior ao meio se você souber exatamente qual molécula alterar.”"
  },
  {
    tier: "III",
    name: "Casta do Enxofre (Os Catalisadores)",
    symbol: "🜍",
    color: "#38bdf8",
    soulRange: "Densidade Anímica: 15% – 49%",
    members: "Elian & Lyra Vaelor (Pais de Soren), Servos Internos",
    description: "Descendentes do clã que nasceram com almas estreitas e frágeis. Proibidos de aprender alta magia (pois morreriam ao tentar conjurar), trabalham nos subsolos preparando reagentes, cultivando ervas ou servindo secretamente de cobaias em rituais.",
    sorenView: "“A engrenagem invisível da montanha. O clã diz que eles existem para servir de combustível aos superiores... uma lei que eu repeti como papagaio até descobrir quem foi o combustível da minha própria alma.”"
  },
  {
    tier: "IV",
    name: "Casta da Cinza (Os Vazios / Insetos)",
    symbol: "ef",
    color: "#71717a",
    soulRange: "Densidade Anímica: 1% – 14%",
    members: "Plebeus, Pessoas Comuns e Não-Conjuradores fora do Clã",
    description: "O mundo exterior. Embora todos os seres vivos possuam o Arcanum dentro de si, pessoas sem linhagem ou treino têm almas tão tênues que jamais conseguiriam alterar uma única molécula do ar. Para os Vaelor, suas vidas são insignificantes.",
    sorenView: "“Criaturas efêmeras. Não sinto raiva deles, tampouco compaixão. Se não entrarem no meu caminho, podem viver suas vidas minúsculas em paz.”"
  }
];

// Dados dos Capítulos da História
const STORY_ACTS = [
  {
    act: "Ato I",
    title: "A Centelha na Cinza",
    year: "Infância (0 – 7 Anos)",
    location: "Subsolos de Enxofre, Cidadela Vaelor",
    summary: "O nascimento na casta baixa, as lições de alquimia com Elian e Lyra e a descoberta de um intelecto genial preso em uma alma pequena.",
    content: `
      <p>Antes que os primeiros deuses sonhassem em existir, antes mesmo que o tecido do universo se expandisse, já havia o <strong>Arcanum</strong> — a força implacável da qual tudo deriva. Contudo, sua lei primeira é absoluta: <em>nada se cria do vazio; tudo apenas se altera</em>. Para dobrar a realidade e agitar moléculas do ar até que se tornem chamas, paga-se com uma única moeda: <strong>a própria alma</strong>.</p>
      <p>Nascido na baixa <strong>Casta do Enxofre</strong> da Casa Vaelor, filho dos humildes preparadores químicos <strong>Elian e Lyra</strong>, Soren herdou uma alma estreita e frágil. Ainda assim, nos primeiros anos de vida, o laboratório subterrâneo dos pais era seu refúgio. Observando a mãe destilar essências e o pai calibrar seu modesto <strong>colar arcano de cristal azul</strong>, o menino absorveu os fundamentos da <strong>Alquimia</strong>.</p>
      <p>Aos sete anos, Soren revelou ser uma anomalia: embora sua alma fosse pequena demais para grandes feitiços, sua mente compreendia a estrutura molecular da matéria com perfeição cirúrgica, alterando o Arcanum com uma fração mínima de energia.</p>
    `
  },
  {
    act: "Ato II",
    title: "O Crisol de Sangue",
    year: "O Ritual (7 Anos)",
    location: "Câmaras Subterrâneas do Projeto Quimera",
    summary: "A noite em que Lazare Vaelor sacrificou os pais de Soren para fundir três almas em uma, deformando o garoto em um Tiefling.",
    content: `
      <p>A anomalia chegou aos ouvidos do Patriarca do clã, o Arquimago <strong>Lazare Vaelor</strong>. Para ele, um intelecto genial preso em uma alma fraca era um defeito de fabricação que exigia transmutação.</p>
      <p>Levado às câmaras profundas sob o pretexto de um teste, Soren lembra-se apenas de vidro estilhaçando, cheiro de sangue e enxofre, e uma dor excruciante no peito. Quando acordou, dias depois, <strong>não era mais humano</strong>: chifres escuros brotavam de sua testa, sua pele mudara de tom e seus olhos ardiam como brasas alquímicas.</p>
      <p>Ao pé do leito, Lazare entregou-lhe o <strong>colar arcano</strong> coberto de fuligem e contou uma mentira fria: Elian e Lyra haviam morrido em um acidente patético no laboratório por serem fracos demais. Para suportar a dor do luto aos sete anos, Soren abraçou o dogma do clã como armadura psicológica: <em>os fracos morrem porque são insignificantes; logo, não devo chorar por eles.</em></p>
    `
  },
  {
    act: "Ato III",
    title: "O Prodígio de Mercúrio",
    year: "Adolescência (7 – 17 Anos)",
    location: "Torres Superiores da Casa Vaelor",
    summary: "Dez anos de treinamento implacável como Aprendiz Arcano e Alquimista de elite, cultivando uma frieza clínica perante os fracos.",
    content: `
      <p>Adotado pela Alta Casta como <strong>Aprendiz Arcano</strong> direto de Lazare, Soren foi moldado para ser a arma perfeita dos Vaelor. Unindo a <strong>Magia</strong> à <strong>Alquimia</strong>, ele aprendeu a usar reagentes químicos como catalisadores, alterando moléculas com eficiência letal.</p>
      <p>Ao longo de uma década, a doutrina eugenista do clã tornou-se sua segunda natureza. Soren passou a enxergar pessoas com baixo domínio do Arcanum como insetos — seres que ele não tinha interesse em torturar gratuitamente, mas cuja vida não possuía qualquer valor caso estivessem em seu caminho.</p>
      <p>A única rachadura em sua frieza permanecia escondida sob suas vestes de seda: o velho <strong>colar arcano</strong> de seus pais, que ele jamais tirou do pescoço, alegando com arrogância que o usava apenas como <em>“lembrete da mediocridade que superou”</em>.</p>
    `
  },
  {
    act: "Ato IV",
    title: "O Solvente Universal",
    year: "A Ruptura (17 Anos)",
    location: "Arquivos Restritos & Salão Principal",
    summary: "A descoberta dos documentos do Projeto Quimera, a revolta contra Lazare, a derrota brutal e o nascimento de 'Alkahest'.",
    content: `
      <p>Aos dezessete anos, já um alquimista brilhante, Soren obteve acesso aos arquivos selados de Lazare e encontrou as notas originais do <strong>Projeto Quimera</strong>.</p>
      <p>Não houvera acidente. Como no Arcanum <em>nada se cria, tudo se altera</em>, Lazare havia acorrentado Elian e Lyra vivos e os destilado como matéria-prima, rasgando suas almas e comprimindo-as à força dentro de Soren para expandir seu reservatório mágico. Sua forma de <strong>Tiefling</strong> era a cicatriz física de três almas esmagadas em um só corpo.</p>
      <p>Quando seus dedos apertaram o colar no peito, toda a sua frieza ruiu. Cego de fúria, Soren confrontou Lazare, mas foi brutalmente derrotado pela alma superior do Patriarca. À beira da morte, detonou seus compostos alquímicos para colapsar a torre e fugir. Naquela noite, rasgou o sobrenome <strong>Vaelor</strong> de seu grimório com um bisturi e adotou o nome <strong>Alkahest</strong> — o solvente universal que dissolveria seu clã inteiro.</p>
    `
  },
  {
    act: "Ato V",
    title: "A Hipocrisia da Cinza",
    year: "Dias Atuais",
    location: "Em Exílio pelo Mundo",
    summary: "A busca por poder, a desculpa esfarrapada do orgulho ferido e as duas almas silenciosas que o mantêm vivo.",
    content: `
      <p>Hoje, <strong>Soren ~~Vaelor~~ Alkahest</strong> vaga pelo mundo buscando fortalecer sua alma e aperfeiçoar sua alquimia até que possa destruir Lazare Vaelor, sem ainda compreender a totalidade do que o ritual fez ao seu ser.</p>
      <p>Perante os outros — e perante si mesmo —, ele sustenta uma mentira racional: afirma que caça Lazare apenas por <strong>orgulho ferido</strong>, porque o velho ousou tratá-lo como cobaia e <em>“contaminou sua alma genial com a escória fraca de dois servos inúteis”</em>.</p>
      <p>Contudo, toda vez que Soren conjura um feitiço extremo e o Arcanum cobra seu preço, são as almas fundidas de Elian e Lyra que amortecem o impacto dentro de seu peito — e a primeira coisa que seus dedos tocam após cada combate é o cristal azul do velho <strong>colar arcano</strong>.</p>
    `
  }
];

// Simulador de Fórmulas Alquímico-Arcanas
const ALCHEMY_FORMULAS = [
  {
    id: "ignis",
    name: "Ignição Cinética (Bola de Fogo Alquímica)",
    reagent: "Ampola de Fósforo Branco + Oxigênio Atmosférico",
    lawApplied: "Não cria fogo do nada: acelera violentamente a vibração das moléculas de ar ao redor do alvo.",
    standardCost: "Gasto de Alma Padrão: 45% (Risco de Exaustão)",
    sorenCost: "Gasto de Soren (Alquimista): 14% (Catalisado por Reagente)",
    soulResonance: "As almas de Elian e Lyra estabilizam o calor residual nas veias de Soren, fazendo seus chifres e olhos âmbar brilharem."
  },
  {
    id: "cryo",
    name: "Roubo Térmico (Zero Absoluto)",
    reagent: "Sais de Nitrogênio Alquímico + Umidade Local",
    lawApplied: "Drena instantaneamente a energia cinética das moléculas de água no ar ou no sangue do alvo.",
    standardCost: "Gasto de Alma Padrão: 40%",
    sorenCost: "Gasto de Soren (Alquimista): 12%",
    soulResonance: "O colar arcano no peito de Soren emite um pulso azulado frio, absorvendo o choque térmico da transmutação."
  },
  {
    id: "alkahest",
    name: "Decomposição Alkahest (Desintegração de Matéria)",
    reagent: "Solvente Ácido Mercurial + Toque Arcano",
    lawApplied: "Rompe as ligações moleculares de metais, pedra ou armaduras, convertendo matéria sólida em pó cinzento.",
    standardCost: "Gasto de Alma Padrão: 70% (Letal para Castas Baixas)",
    sorenCost: "Gasto de Soren (Alquimista): 28%",
    soulResonance: "Diagramas geométricos dourados e azuis giram ao redor dos dedos enluvados de Soren enquanto a matéria se desfaz."
  },
  {
    id: "chimera",
    name: "Sobrecarga da Quimera (Ressonância Tríplice)",
    reagent: "Sangue Próprio + Ativação do Colar Arcano",
    lawApplied: "Sincroniza temporariamente as três almas fundidas (Soren, Elian e Lyra) para alterar a realidade em larga escala.",
    standardCost: "Gasto de Alma Padrão: Impossível para um único corpo",
    sorenCost: "Gasto de Soren: Crítico (Dor física intensa + Memórias dos Pais)",
    soulResonance: "Por alguns segundos, a voz de Soren ganha um eco triplo e a sombra de suas costas projeta as silhuetas do pai e da mãe."
  }
];

// Estado da aplicação
let currentState = {
  selectedNode: "soren",
  soulTruthMode: false, // false = Ego Racional (Âmbar), true = Verdade da Alma (Azul Colar)
  activeTab: "network",
  selectedCasteIndex: 0,
  selectedActIndex: 0,
  selectedFormulaIndex: 0
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initImages();
  renderSelectedNode(currentState.selectedNode);
  renderCastes();
  renderStoryActs();
  renderAlchemyFormulas();
  setupEventListeners();
});

function initImages() {
  // Atualiza miniaturas da órbita
  document.querySelectorAll("[data-img-key]").forEach(img => {
    const key = img.getAttribute("data-img-key");
    if (IMAGE_PATHS[key]) {
      img.src = IMAGE_PATHS[key];
    }
  });
}

function setupEventListeners() {
  // Clique nos nós orbitais
  document.querySelectorAll(".orbit-node").forEach(node => {
    node.addEventListener("click", () => {
      const nodeId = node.getAttribute("data-node");
      selectNode(nodeId);
    });
  });

  // Botões rápidos de seleção de personagem
  document.querySelectorAll(".quick-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const nodeId = btn.getAttribute("data-node");
      selectNode(nodeId);
    });
  });

  // Toggle Lente do Ego vs. Lente da Alma
  const modeToggleBtn = document.getElementById("toggle-truth-btn");
  if (modeToggleBtn) {
    modeToggleBtn.addEventListener("click", toggleSoulTruthMode);
  }

  // Navegação por abas
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Fechar modal de imagem ampliada
  const lightbox = document.getElementById("image-lightbox");
  const expandBtn = document.getElementById("expand-portrait-btn");
  if (expandBtn && lightbox) {
    expandBtn.addEventListener("click", () => {
      const currentData = DOSSIER_NODES[currentState.selectedNode];
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxCaption = document.getElementById("lightbox-caption");
      lightboxImg.src = IMAGE_PATHS[currentData.imageKey];
      lightboxCaption.textContent = `${currentData.name} — ${currentData.role}`;
      lightbox.classList.remove("hidden");
      lightbox.classList.add("flex");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest("#close-lightbox-btn")) {
        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");
      }
    });
  }
}

function selectNode(nodeId) {
  if (!DOSSIER_NODES[nodeId]) return;
  currentState.selectedNode = nodeId;

  // Atualiza classes dos nós orbitais
  document.querySelectorAll(".orbit-node").forEach(el => {
    el.classList.toggle("active-node", el.getAttribute("data-node") === nodeId);
  });

  // Atualiza botões rápidos
  document.querySelectorAll(".quick-select-btn").forEach(btn => {
    const isActive = btn.getAttribute("data-node") === nodeId;
    btn.classList.toggle("border-[var(--accent-main)]", isActive);
    btn.classList.toggle("bg-white/10", isActive);
  });

  // Atualiza linhas de conexão no SVG
  document.querySelectorAll(".connection-line").forEach(line => {
    const target = line.getAttribute("data-line-to");
    if (nodeId === "soren") {
      line.classList.add("active-line");
    } else {
      line.classList.toggle("active-line", target === nodeId);
    }
  });

  renderSelectedNode(nodeId);
}

function toggleSoulTruthMode() {
  currentState.soulTruthMode = !currentState.soulTruthMode;
  document.body.classList.toggle("soul-truth-mode", currentState.soulTruthMode);

  const badge = document.getElementById("mode-status-badge");
  const btnText = document.getElementById("mode-btn-text");
  const modeDesc = document.getElementById("mode-description-banner");

  if (currentState.soulTruthMode) {
    badge.textContent = "LENTE ATIVA: RESSONÂNCIA DO COLAR (A VERDADE OCULTA)";
    badge.className = "text-xs font-mono tracking-wider px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-400/40";
    btnText.textContent = "Voltar para a Máscara Racional (Ego)";
    modeDesc.innerHTML = `<span class="text-sky-300 font-semibold">💎 Modo Verdade Anímica:</span> Revelando o que Soren reprime no subconsciente — o amor pelos pais que contradiz toda a doutrina do seu clã.`;
  } else {
    badge.textContent = "LENTE ATIVA: MÁSCARA DO EGO (A DESCULPA RACIONAL)";
    badge.className = "text-xs font-mono tracking-wider px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40";
    btnText.textContent = "Ativar Ressonância do Colar (Ver a Verdade)";
    modeDesc.innerHTML = `<span class="text-amber-400 font-semibold">🜍 Modo Máscara do Ego:</span> Exibindo a visão fria e elitista que Soren apresenta ao mundo (e a desculpa esfarrapada que ele conta a si mesmo).`;
  }

  renderSelectedNode(currentState.selectedNode);
}

function renderSelectedNode(nodeId) {
  const data = DOSSIER_NODES[nodeId];
  if (!data) return;

  // Imagem e cabeçalho
  const portraitEl = document.getElementById("inspector-portrait");
  if (portraitEl) {
    portraitEl.src = IMAGE_PATHS[data.imageKey];
    portraitEl.alt = data.name;
  }

  const symbolEl = document.getElementById("inspector-symbol");
  if (symbolEl) symbolEl.textContent = data.alchemicalSymbol;

  const titleEl = document.getElementById("inspector-title");
  if (titleEl) {
    if (data.formerName) {
      titleEl.innerHTML = `Soren <span class="slashed-surname">${data.formerName}</span> Alkahest`;
    } else {
      titleEl.textContent = data.name;
    }
  }

  document.getElementById("inspector-role").textContent = data.role;
  document.getElementById("inspector-caste").textContent = data.caste;
  document.getElementById("inspector-symbol-name").textContent = data.symbolName;

  // Barra de Densidade de Alma
  document.getElementById("inspector-soul-label").textContent = data.soulLabel;
  document.getElementById("inspector-soul-percent").textContent = `${data.soulDensity}%`;
  document.getElementById("inspector-soul-bar").style.width = `${data.soulDensity}%`;

  // Relação com Soren
  document.getElementById("inspector-relation").textContent = data.relationToCenter;

  // Citação e Análise (muda conforme o modo Ego vs. Verdade)
  const quoteBox = document.getElementById("inspector-quote");
  const analysisBox = document.getElementById("inspector-analysis");
  const perspectiveLabel = document.getElementById("perspective-label");

  if (currentState.soulTruthMode) {
    perspectiveLabel.innerHTML = `💎 <span class="text-sky-300">O que a Alma de Soren realmente sente (Verdade Reprimida):</span>`;
    quoteBox.textContent = data.truthQuote;
    quoteBox.className = "italic font-serif text-lg md:text-xl text-sky-100 border-l-4 border-sky-400 pl-4 py-1 my-3 bg-sky-950/30 rounded-r";
    analysisBox.textContent = data.truthAnalysis;
  } else {
    perspectiveLabel.innerHTML = `🜍 <span class="text-amber-300">O que Soren diz ao mundo (A Desculpa Racional):</span>`;
    quoteBox.textContent = data.egoQuote;
    quoteBox.className = "italic font-serif text-lg md:text-xl text-amber-100 border-l-4 border-amber-500 pl-4 py-1 my-3 bg-amber-950/25 rounded-r";
    analysisBox.textContent = data.egoAnalysis;
  }

  // Guia Visual detalhado
  const visualContainer = document.getElementById("inspector-visual-list");
  visualContainer.innerHTML = data.visualGuide.map(item => `
    <div class="p-3 rounded-lg bg-black/35 border border-white/10">
      <div class="text-xs font-mono uppercase tracking-wider text-[var(--accent-main)] mb-1">${item.label}</div>
      <div class="text-sm text-stone-300 leading-relaxed">${item.text}</div>
    </div>
  `).join("");
}

function switchTab(tabId) {
  currentState.activeTab = tabId;
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.toggle("active-tab", tab.getAttribute("data-tab") === tabId);
  });

  document.querySelectorAll(".tab-section").forEach(sec => {
    sec.classList.toggle("hidden", sec.id !== `section-${tabId}`);
  });
}

function renderCastes() {
  const listEl = document.getElementById("caste-pyramid-list");
  if (!listEl) return;

  listEl.innerHTML = CASTE_DATA.map((caste, idx) => {
    const isSelected = idx === currentState.selectedCasteIndex;
    const widths = ["w-full md:w-3/5", "w-full md:w-3/4", "w-full md:w-11/12", "w-full"];
    return `
      <button onclick="selectCaste(${idx})" class="${widths[idx]} mx-auto block text-left p-4 rounded-xl border transition-all duration-300 ${
        isSelected
          ? "bg-white/10 border-[var(--accent-main)] shadow-lg scale-[1.01]"
          : "bg-black/40 border-white/10 hover:border-white/30"
      }">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-serif" style="color: ${caste.color}">${caste.symbol}</span>
            <div>
              <div class="text-xs font-mono uppercase tracking-wider text-stone-400">Escalão ${caste.tier}</div>
              <div class="font-bold text-base md:text-lg text-stone-100">${caste.name}</div>
            </div>
          </div>
          <span class="text-xs font-mono px-2.5 py-1 rounded bg-black/50 border border-white/10 text-stone-300">${caste.soulRange}</span>
        </div>
      </button>
    `;
  }).join("");

  const active = CASTE_DATA[currentState.selectedCasteIndex];
  const detailEl = document.getElementById("caste-detail-box");
  if (detailEl && active) {
    detailEl.innerHTML = `
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl" style="color: ${active.color}">${active.symbol}</span>
        <div>
          <h4 class="text-xl font-bold text-stone-100">${active.name}</h4>
          <p class="text-xs font-mono text-amber-400">${active.soulRange}</p>
        </div>
      </div>
      <div class="mb-3 text-xs font-mono uppercase tracking-wider text-stone-400">Representantes na História: <span class="text-stone-200">${active.members}</span></div>
      <p class="text-stone-300 text-sm leading-relaxed mb-4">${active.description}</p>
      <div class="p-3.5 rounded-lg bg-black/50 border-l-4 border-[var(--accent-main)]">
        <div class="text-xs font-mono text-[var(--accent-main)] mb-1">Visão de Soren Alkahest:</div>
        <p class="italic font-serif text-base text-stone-200">${active.sorenView}</p>
      </div>
    `;
  }
}

window.selectCaste = function(idx) {
  currentState.selectedCasteIndex = idx;
  renderCastes();
};

function renderStoryActs() {
  const navEl = document.getElementById("story-acts-nav");
  const contentEl = document.getElementById("story-act-content");
  if (!navEl || !contentEl) return;

  navEl.innerHTML = STORY_ACTS.map((item, idx) => {
    const active = idx === currentState.selectedActIndex;
    return `
      <button onclick="selectAct(${idx})" class="w-full text-left p-3.5 rounded-xl border transition-all ${
        active
          ? "bg-white/10 border-[var(--accent-main)] text-stone-100"
          : "bg-black/30 border-white/10 text-stone-400 hover:text-stone-200 hover:border-white/25"
      }">
        <div class="flex items-center justify-between text-xs font-mono mb-1">
          <span class="text-[var(--accent-main)]">${item.act}</span>
          <span>${item.year}</span>
        </div>
        <div class="font-bold text-base">${item.title}</div>
        <div class="text-xs text-stone-400 mt-1 line-clamp-2">${item.summary}</div>
      </button>
    `;
  }).join("");

  const currentAct = STORY_ACTS[currentState.selectedActIndex];
  contentEl.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-[var(--accent-main)]">${currentAct.act} • ${currentAct.year}</span>
        <h3 class="text-2xl md:text-3xl font-bold text-stone-100 mt-1 font-serif">${currentAct.title}</h3>
      </div>
      <span class="text-xs font-mono px-3 py-1.5 rounded-full bg-black/50 border border-white/15 text-stone-300">📍 ${currentAct.location}</span>
    </div>
    <div class="space-y-4 text-stone-200 leading-relaxed text-base md:text-lg font-serif">
      ${currentAct.content}
    </div>
    <div class="flex justify-between items-center mt-8 pt-4 border-t border-white/10">
      <button onclick="selectAct(${Math.max(0, currentState.selectedActIndex - 1)})" ${currentState.selectedActIndex === 0 ? "disabled" : ""} class="px-4 py-2 rounded-lg border border-white/15 text-xs font-mono disabled:opacity-30 hover:bg-white/5">
        ← Ato Anterior
      </button>
      <span class="text-xs font-mono text-stone-400">Ato ${currentState.selectedActIndex + 1} de ${STORY_ACTS.length}</span>
      <button onclick="selectAct(${Math.min(STORY_ACTS.length - 1, currentState.selectedActIndex + 1)})" ${currentState.selectedActIndex === STORY_ACTS.length - 1 ? "disabled" : ""} class="px-4 py-2 rounded-lg border border-white/15 text-xs font-mono disabled:opacity-30 hover:bg-white/5">
        Próximo Ato →
      </button>
    </div>
  `;
}

window.selectAct = function(idx) {
  currentState.selectedActIndex = idx;
  renderStoryActs();
};

function renderAlchemyFormulas() {
  const listEl = document.getElementById("alchemy-formula-list");
  const displayEl = document.getElementById("alchemy-formula-display");
  if (!listEl || !displayEl) return;

  listEl.innerHTML = ALCHEMY_FORMULAS.map((f, idx) => {
    const active = idx === currentState.selectedFormulaIndex;
    return `
      <button onclick="selectFormula(${idx})" class="text-left p-3.5 rounded-xl border transition-all ${
        active
          ? "bg-white/10 border-[var(--accent-main)] text-stone-100"
          : "bg-black/30 border-white/10 text-stone-400 hover:text-stone-200"
      }">
        <div class="text-xs font-mono text-[var(--accent-main)] mb-1">Fórmula 0${idx + 1}</div>
        <div class="font-bold text-sm md:text-base">${f.name}</div>
      </button>
    `;
  }).join("");

  const curr = ALCHEMY_FORMULAS[currentState.selectedFormulaIndex];
  displayEl.innerHTML = `
    <div class="p-5 rounded-xl bg-black/45 border border-white/15 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <h4 class="text-xl font-bold text-stone-100">${curr.name}</h4>
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Lei da Alteração Molecular</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg bg-white/5 border border-white/10">
          <div class="text-xs font-mono text-stone-400 mb-1">Catalisador Alquímico</div>
          <div class="text-sm font-semibold text-amber-300">${curr.reagent}</div>
        </div>
        <div class="p-3 rounded-lg bg-white/5 border border-white/10">
          <div class="text-xs font-mono text-stone-400 mb-1">Alteração Física no Arcanum</div>
          <div class="text-sm text-stone-200">${curr.lawApplied}</div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg bg-red-950/30 border border-red-500/30">
          <div class="text-xs font-mono text-red-300">Mago Comum (Força Bruta)</div>
          <div class="text-sm font-bold text-red-200 mt-1">${curr.standardCost}</div>
        </div>
        <div class="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
          <div class="text-xs font-mono text-emerald-300">Eficiência de Soren (Alquimista)</div>
          <div class="text-sm font-bold text-emerald-200 mt-1">${curr.sorenCost}</div>
        </div>
      </div>
      <div class="p-3.5 rounded-lg bg-sky-950/30 border border-sky-400/30">
        <div class="text-xs font-mono text-sky-300 mb-1">💎 Reação das Três Almas & do Colar Arcano:</div>
        <p class="text-sm text-sky-100">${curr.soulResonance}</p>
      </div>
    </div>
  `;
}

window.selectFormula = function(idx) {
  currentState.selectedFormulaIndex = idx;
  renderAlchemyFormulas();
};
