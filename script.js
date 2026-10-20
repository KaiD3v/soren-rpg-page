/* ==========================================================================
   SCRIPT DO DOSSIÊ INTERATIVO: SOREN [VAELOR] ALKAHEST
   ========================================================================== */

const IMAGE_PATHS = window.EMBEDDED_IMAGES || {
  soren: "assets/soren.jpg",
  parents: "assets/parents.jpg",
  clan: "assets/clan.jpg",
  villain: "assets/villain.jpg",
  map_full: "assets/map_full.jpg",
  map_ether: "assets/map_ether.jpg",
  map_mercury: "assets/map_mercury.jpg",
  map_sulfur: "assets/map_sulfur.jpg"
};

// Dados centrais que giram em torno de Soren
const DOSSIER_NODES = {
  soren: {
    id: "soren",
    name: "Soren Alkahest",
    formerName: "Vaelor",
    role: "O Protagonista • Tiefling por Pacto Ritual",
    caste: "Ex-Casta do Mercúrio (Renegado)",
    casteColor: "#e58e26",
    soulDensity: 88,
    soulLabel: "Alma Expandida por Pacto Infernal (Pago com a Alma dos Pais)",
    alchemicalSymbol: "🜍",
    symbolName: "Alkahest (O Solvente Universal)",
    imageKey: "soren",
    shortRelation: "Centro da Matriz",
    visualGuide: [
      {
        label: "Fisionomia & Presença Infernal",
        text: "Jovem (18–20 anos), estatura mediana, físico esguio e atraente. Carrega uma presença imponente e fria que impõe respeito e causa desconforto por onde passa."
      },
      {
        label: "Marcas do Sangue Infernal (Tiefling)",
        text: "Pele pálida acinzentada com nuances rubras, cauda fina sob o sobretudo, chifres escuros estriados e olhos em brasa capazes de enxergar na escuridão absoluta."
      },
      {
        label: "Trajes, Fogo & Sombras",
        text: "Sobretudo escuro de gola alta da elite Vaelor (com as insígnias arrancadas), bandoleiras de reagentes alquímicos e um poder inato ligado ao fogo e às sombras."
      },
      {
        label: "O Detalhe Inconsciente",
        text: "Pela abertura da gola repousa o antigo colar arcano de cristal azulado de seus pais — a única relíquia humana não maculada pelo pacto infernal."
      }
    ],
    relationToCenter: "Soren é o epicentro do conflito: nascido humano com a mente de um gênio na casta mais baixa, foi submetido aos 7 anos a um Pacto Infernal forçado por Lazare Vaelor, que sacrificou a alma dos pais de Soren como moeda de troca para infundir sangue e poder infernal no garoto.",
    egoQuote: "“Não confunda minha eficiência com crueldade. Pessoas com pouco controle sobre o Arcanum são rascunhos inacabados. Meus pais eram fracos; meu ódio por Lazare é apenas porque aquele velho usou meu corpo sem permissão e vendeu minha carne a um pacto infernal!”",
    egoAnalysis: "Soren mantém a crença elitista implantada pela Casa Vaelor: quem não domina o Arcanum é como um inseto. Para não admitir que sofre pela morte de pais considerados 'fracos', ele inventa a desculpa esfarrapada de que sua revolta é puro orgulho ferido por ter tido seu sangue amaldiçoado.",
    truthQuote: "“Cada vez que conjuro o fogo ou as sombras do meu sangue Tiefling, eu sei exatamente quanto ele custou. Lazare comprou o meu poder entregando a alma do meu pai e da minha mãe ao Inferno... e eu nunca consegui tirar o colar deles do peito.”",
    truthAnalysis: "No fundo, Soren amava profundamente Elian e Lyra. A prova viva de sua contradição é o fato de que ele jogou fora toda a sua posição na Alta Casta aos 17 anos no instante em que descobriu que seus pais foram a moeda de troca do seu ritual."
  },

  parents: {
    id: "parents",
    name: "Elian & Lyra Vaelor",
    formerName: null,
    role: "Os Pais • A Moeda de Troca do Pacto",
    caste: "Casta do Enxofre (Baixa Casta)",
    casteColor: "#60a5fa",
    soulDensity: 22,
    soulLabel: "Almas Sacrificadas como Pagamento Infernal",
    alchemicalSymbol: "🜂",
    symbolName: "Sal & Mercúrio Base (A Fundação)",
    imageKey: "parents",
    shortRelation: "Origem & Preço do Pacto",
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
    relationToCenter: "Como no universo do Arcanum a alma é a moeda de troca suprema, Lazare Vaelor acorrentou Elian e Lyra no altar subterrâneo e sacrificou a alma dos dois como pagamento a uma entidade infernal, comprando o sangue Tiefling e a expansão anímica de Soren.",
    egoQuote: "“Elian e Lyra? Dois servos da Casta do Enxofre com almas tão estreitas que mal conseguiam acender uma vela. Pelo menos serviram de moeda para comprar algo superior. Minha fúria é que Lazare fez esse negócio usando a minha pele!”",
    egoAnalysis: "Na superfície, Soren fala dos pais com desdém clínico, tratando-os como moedas baratas da pirâmide do clã. Ele finge que o sacrifício deles foi 'natural' dentro da lei dos mais fortes.",
    truthQuote: "“Eles tinham almas pequenas, sim... mas naquele laboratório escuro, eles nunca me olharam como uma arma. Saber que as almas deles foram entregues ao abismo para que eu tivesse este poder é o que me faz querer queimar a Casa Vaelor inteira.”",
    truthAnalysis: "A contradição central de Soren: segundo sua própria ideologia, a vida de seus pais era insignificante. Contudo, a dor por eles foi tão avassaladora que o fez trair todo o seu clã e abandonar seu nome."
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
    relationToCenter: "A Casa Vaelor moldou a mente de Soren. Foi o clã que implantou nele a certeza de que seres com menos controle do Arcanum são inferiores, transformou-o em um Tiefling através de um ritual proibido e hoje o caça como uma arma rebelde.",
    egoQuote: "“A Casa Vaelor compreendeu a única verdade que importa: o Arcanum não é igualitário. Os fortes governam a matéria; os fracos são a matéria. Meu único problema com o clã é que eles acharam que eu seria a coleira deles, e não o seu carrasco.”",
    egoAnalysis: "Mesmo renegado, Soren ainda pensa como um Vaelor. Ele não quer destruir o clã para 'libertar os oprimidos' — ele quer provar que sua própria capacidade supera toda a linhagem pura que o usou.",
    truthQuote: "“Aquela montanha dourada inteira foi construída sobre pactos sujos e almas sacrificadas no escuro. Eu risquei o nome Vaelor com uma lâmina porque cada letra dele tem o gosto do sangue dos meus pais.”",
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
    relationToCenter: "Lazare é o responsável direto por tudo o que Soren é hoje: foi quem sacrificou a alma de Elian e Lyra em um pacto infernal para transformar Soren em Tiefling e expandir seu poder, o mestre que o ensinou alta magia por dez anos e o homem que quase o matou quando a verdade veio à tona.",
    egoQuote: "“Lazare ousou usar minha carne para selar um pacto infernal sem meu consentimento. Ele me derrotou uma vez porque tinha décadas de vantagem no cultivo da alma. Na próxima vez que nos encontrarmos, vou dissolver cada molécula do corpo dele.”",
    egoAnalysis: "Para Soren, Lazare é o obstáculo supremo. Derrotá-lo significa usar o próprio fogo infernal e a alquimia que Lazare lhe impôs para aniquilar seu criador.",
    truthQuote: "“Ele me olhou nos olhos quando eu tinha sete anos, entregou o colar sujo de cinzas dos meus pais e me acolheu como um filho... minutos depois de ter entregue a alma dos dois ao Inferno. Eu não quero apenas matá-lo; quero destruir tudo o que ele construiu.”",
    truthAnalysis: "A traição de Lazare dói em dobro porque, durante dez anos, Soren o admirou como figura paterna substituta e mentor antes de descobrir os arquivos do 'Projeto Quimera'."
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
    sorenView: "“Onde fui forjado. Ali aprendi que uma mente brilhante aliada à alquimia e à herança sombria pode rasgar um mago superior ao meio se você souber exatamente qual molécula alterar.”"
  },
  {
    tier: "III",
    name: "Casta do Enxofre (Os Catalisadores)",
    symbol: "🜍",
    color: "#38bdf8",
    soulRange: "Densidade Anímica: 15% – 49%",
    members: "Elian & Lyra Vaelor (Pais de Soren), Servos Internos",
    description: "Descendentes do clã que nasceram com almas estreitas e frágeis. Proibidos de aprender alta magia (pois morreriam ao tentar conjurar), trabalham nos subsolos preparando reagentes, cultivando ervas ou servindo secretamente de moeda de troca em pactos e rituais.",
    sorenView: "“A engrenagem invisível da montanha. O clã diz que eles existem para servir de moeda aos superiores... uma lei que eu repeti como papagaio até descobrir quem pagou o preço do meu próprio sangue.”"
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
    summary: "O nascimento humano na casta baixa, as lições de alquimia com Elian e Lyra e a descoberta de um intelecto genial preso em uma alma pequena.",
    content: `
      <p>Antes que os primeiros deuses sonhassem em existir, antes mesmo que o tecido do universo se expandisse, já havia o <strong>Arcanum</strong> — a força implacável da qual tudo deriva. Contudo, sua lei primeira é absoluta: <em>nada se cria do vazio; tudo apenas se altera</em>. Para dobrar a realidade e agitar moléculas do ar até que se tornem chamas, paga-se com uma única moeda: <strong>a própria alma</strong>.</p>
      <p>Nascido humano na baixa <strong>Casta do Enxofre</strong> da Casa Vaelor, filho dos humildes preparadores químicos <strong>Elian e Lyra</strong>, Soren herdou uma alma estreita e frágil. Ainda assim, nos primeiros anos de vida, o laboratório subterrâneo dos pais era seu refúgio. Observando a mãe destilar essências e o pai calibrar seu modesto <strong>colar arcano de cristal azul</strong>, o menino absorveu os fundamentos da <strong>Alquimia</strong>.</p>
      <p>Aos sete anos, Soren revelou ser uma anomalia: embora sua alma fosse pequena demais para grandes feitiços, sua mente compreendia a estrutura molecular da matéria com perfeição cirúrgica, alterando o Arcanum com uma fração mínima de energia.</p>
    `
  },
  {
    act: "Ato II",
    title: "O Crisol de Sangue e o Pacto Infernal",
    year: "O Ritual (7 Anos)",
    location: "Câmaras Subterrâneas do Projeto Quimera",
    summary: "A noite em que Lazare Vaelor sacrificou as almas dos pais de Soren em um pacto infernal, reescrevendo o sangue do garoto como um Tiefling.",
    content: `
      <p>A anomalia chegou aos ouvidos do Patriarca do clã, o Arquimago <strong>Lazare Vaelor</strong>. Para ele, um intelecto genial preso em uma alma fraca era um desperdício inaceitável que exigia intervenção radical.</p>
      <p>Levado às câmaras profundas sob o pretexto de um teste, Soren lembra-se apenas de vidro estilhaçando, cânticos em língua abissal, cheiro de sangue e enxofre, e uma dor excruciante, como se o próprio fogo do Inferno estivesse sendo injetado em suas veias. Quando acordou, dias depois, <strong>não era mais humano</strong>: carregava no sangue o legado de seres infernais. Chifres escuros brotavam de sua testa, uma cauda despontara, seus olhos ardiam com <em>Visão no Escuro</em> e sua alma fora expandida com um poder inato ligado ao fogo e às sombras.</p>
      <p>Ao pé do leito, Lazare entregou-lhe o <strong>colar arcano</strong> coberto de fuligem e contou uma mentira fria: Elian e Lyra haviam morrido em um acidente patético no laboratório por serem fracos demais, e o choque havia despertado uma suposta 'maldição ancestral' no sangue de Soren. Para suportar o luto aos sete anos, Soren abraçou o dogma do clã como escudo: <em>os fracos morrem porque são insignificantes; logo, não devo chorar por eles.</em></p>
    `
  },
  {
    act: "Ato III",
    title: "O Prodígio de Mercúrio",
    year: "Adolescência (7 – 17 Anos)",
    location: "Torres Superiores da Casa Vaelor",
    summary: "Dez anos de treinamento implacável como Aprendiz Arcano e Alquimista de elite, unindo alquimia molecular à sua nova herança infernal.",
    content: `
      <p>Adotado pela Alta Casta como <strong>Aprendiz Arcano</strong> direto de Lazare, Soren foi moldado para ser a arma perfeita dos Vaelor. Unindo a <strong>Magia</strong> (potencializada por sua <em>Herança Sombria</em> e afinidade infernal com o fogo) à <strong>Alquimia</strong>, ele aprendeu a usar reagentes químicos como catalisadores, alterando moléculas com eficiência letal.</p>
      <p>Ao longo de uma década, a doutrina eugenista do clã tornou-se sua segunda natureza. Soren passou a enxergar pessoas com baixo domínio do Arcanum como insetos — seres que ele não tinha interesse em torturar gratuitamente, mas cuja vida não possuía qualquer valor caso estivessem em seu caminho.</p>
      <p>A única rachadura em sua frieza permanecia escondida sob suas vestes de seda: o velho <strong>colar arcano</strong> de seus pais, que ele jamais tirou do pescoço, alegando com arrogância que o usava apenas como <em>“lembrete da mediocridade que superou”</em>.</p>
    `
  },
  {
    act: "Ato IV",
    title: "O Solvente Universal",
    year: "A Ruptura (17 Anos)",
    location: "Arquivos Restritos & Salão Principal",
    summary: "A descoberta dos documentos do Projeto Quimera, a verdade sobre o pacto infernal pago com a alma dos pais, a derrota brutal e o nascimento de 'Alkahest'.",
    content: `
      <p>Aos dezessete anos, já um alquimista brilhante, Soren obteve acesso aos arquivos selados de Lazare e encontrou as notas originais do <strong>Projeto Quimera</strong>.</p>
      <p>Não houvera acidente algum — nem linhagem ancestral. Como no Arcanum <strong>a alma é a moeda de troca suprema</strong>, Lazare havia invocado um <strong>Pacto Infernal</strong> para expandir a alma de Soren sem gastar um único fragmento da própria alma: o Patriarca acorrentou Elian e Lyra vivos em dois círculos de sacrifício e <strong>ofereceu as almas dos pais de Soren como pagamento a uma entidade infernal</strong>. Em troca das duas almas devoradas no altar, o abismo infundiu seu sangue, seu fogo e suas sombras no garoto, transformando-o em <strong>Tiefling</strong>.</p>
      <p>Quando seus dedos apertaram o colar no peito, toda a sua lógica fria ruiu. Cego de fúria, Soren confrontou Lazare, mas foi brutalmente derrotado pela alma superior do Patriarca. À beira da morte, detonou seus compostos alquímicos para colapsar a ala leste da torre e fugir pelo abismo. Naquela noite, rasgou o sobrenome <strong>Vaelor</strong> de seu grimório com um bisturi e adotou o nome <strong>Alkahest</strong> — o solvente universal que dissolveria seu clã inteiro.</p>
    `
  },
  {
    act: "Ato V",
    title: "A Hipocrisia da Cinza",
    year: "Dias Atuais",
    location: "Em Exílio pelo Mundo",
    summary: "A busca por poder sob o estigma Tiefling, a desculpa esfarrapada do orgulho ferido e o preço das almas que compraram seu sangue.",
    content: `
      <p>Hoje, <strong>Soren ~~Vaelor~~ Alkahest</strong> vaga pelo mundo buscando fortalecer sua alma e aperfeiçoar sua alquimia até que possa destruir Lazare Vaelor, ainda sem saber qual entidade infernal aceitou a alma de seus pais naquele pacto.</p>
      <p>Perante os outros — e perante si mesmo —, ele sustenta uma mentira racional: afirma que Elian e Lyra eram fracos demais para importar, e que caça Lazare apenas por <strong>orgulho ferido</strong>, porque o velho ousou usá-lo como cobaia e <em>“amaldiçoou seu corpo perfeito com sangue infernal comprado com duas almas baratas”</em>.</p>
      <p>Contudo, toda vez que Soren conjura o fogo ou as sombras de sua herança Tiefling, ele sente o peso do preço que comprou aquele poder — e a primeira coisa que seus dedos tocam após cada combate é o cristal azul do velho <strong>colar arcano</strong>.</p>
    `
  }
];

// Atlas Arquitetônico: Plantas e Mapas da Casa Vaelor
const VAELOR_MAPS = [
  {
    id: "full",
    code: "MAPA GERAL • CORTE VERTICAL",
    title: "Cidadela da Casa Vaelor (Visão Completa)",
    subtitle: "Corte Arquitetônico dos 4 Níveis da Montanha do Crisol",
    imageKey: "map_full",
    scale: "Escala Vertical: 600m de Altitude • 4 Estratificações de Casta",
    securityLevel: "Fortaleza Arcana Autossuficiente",
    overview: "Esculpida diretamente na rocha negra da montanha, a Cidadela Vaelor foi desenhada para que sua própria geografia física impusesse a hierarquia do Arcanum. Um único eixo vertical — o Poço de Ascensão Vaelor — conecta desde as minas tóxicas na base até as torres douradas no topo.",
    sorenMemory: "“Durante dez anos eu subi por aquele eixo central achando que estava me aproximando do topo do mundo, sem saber que a verdade sobre o pacto que me transformou em Tiefling estava enterrada no último subsolo.”",
    pins: [
      {
        num: "1",
        x: 56,
        y: 23,
        title: "Nível 1: As Torres Áureas do Éter (Cume)",
        areaTag: "Alta Casta • Soberanos",
        desc: "O topo banhado em ouro e cercado por anéis de transmutação celeste. Aqui ficam a Sala do Trono e o Observatório de Lazare.",
        linkedMapIdx: 1
      },
      {
        num: "2",
        x: 60,
        y: 44,
        title: "Nível 2: Bibliotecas e Salões de Mercúrio (Meio)",
        areaTag: "Média-Alta Casta • Artífices",
        desc: "O coração acadêmico do clã, iluminado por vitrais azulados. Onde Soren viveu e estudou dos 7 aos 17 anos e onde ficam os Arquivos Restritos.",
        linkedMapIdx: 2
      },
      {
        num: "3",
        x: 37,
        y: 63,
        title: "Nível 3: Fornalhas e Cavernas de Enxofre (Base)",
        areaTag: "Baixa Casta • Catalisadores",
        desc: "Fornalhas industriais, minas de reagentes e laboratórios abafados onde Elian e Lyra trabalhavam.",
        linkedMapIdx: 3
      },
      {
        num: "4",
        x: 50,
        y: 83,
        title: "Nível 4: Abóbada do Crisol de Almas (Subterrâneo Profundo)",
        areaTag: "Zona Proibida • Pacto Infernal",
        desc: "Câmara oculta abaixo das fundações da montanha onde Lazare realizou o pacto infernal sacrificando os pais de Soren.",
        linkedMapIdx: 3
      }
    ]
  },
  {
    id: "ether",
    code: "PLANTA DE ÁREA 01 • TOPO",
    title: "Santuário do Pico do Éter (Alta Casta)",
    subtitle: "Salão do Trono, Observatório de Lazare e a Ala Leste Colapsada",
    imageKey: "map_ether",
    scale: "Planta Tática (1 Quadrado = 1,5m / 5ft) • Acesso Exclusivo Casta do Éter",
    securityLevel: "Segurança Máxima (Selos de Gravidade & Pressão Anímica)",
    overview: "Suspenso sobre um abismo perpétuo no cume da montanha, o Santuário do Éter gira em torno de uma gigantesca matriz de transmutação dourada. A ala direita do mapa ainda exibe a cicatriz deixada pela fuga de Soren.",
    sorenMemory: "“Foi naquele círculo central que Lazare esmagou meus ossos sem sequer sujar as mãos. E foi na varanda leste que eu detonei cada frasco que tinha no peito para derrubar as colunas e cair no escuro.”",
    pins: [
      {
        num: "1",
        x: 50,
        y: 50,
        title: "Matriz Central & Salão do Trono",
        areaTag: "Epicentro de Poder",
        desc: "Um círculo de transmutação colossal gravado em ouro sobre obsidiana, amplificando o Arcanum de Lazare Vaelor em todo o salão."
      },
      {
        num: "2",
        x: 77,
        y: 51,
        title: "Ala Leste Destruída (Varanda Colapsada)",
        areaTag: "Local da Fuga de Soren",
        desc: "O balcão que Soren implodiu aos 17 anos com reagentes alquímicos instáveis para escapar da execução e despencar no abismo."
      },
      {
        num: "3",
        x: 16,
        y: 50,
        title: "Observatório Privado do Arquimago Lazare",
        areaTag: "Sanctum do Vilão",
        desc: "Sala equipada com astrolábios anímicos onde Lazare estuda o tecido do Arcanum e guarda orbes de almas."
      },
      {
        num: "4",
        x: 45,
        y: 83,
        title: "Laboratório Pessoal & Escadaria de Acesso",
        areaTag: "Entrada Sul",
        desc: "O único acesso físico a partir das Torres de Mercúrio, guardado por pontes flutuantes retráteis."
      }
    ]
  },
  {
    id: "mercury",
    code: "PLANTA DE ÁREA 02 • NÍVEL MÉDIO",
    title: "Salões de Mercúrio & Grande Biblioteca",
    subtitle: "Claustros Acadêmicos, Destilarias e os Arquivos Restritos",
    imageKey: "map_mercury",
    scale: "Planta Tática (1 Quadrado = 3m / 10ft) • Casta do Mercúrio",
    securityLevel: "Segurança Alta (Guardas Arcanos & Portas Seladas)",
    overview: "O complexo onde Soren passou uma década inteira sendo moldado como o prodígio da Casa Vaelor. Combina uma biblioteca monumental com destilarias alquímicas e laboratórios circulares.",
    sorenMemory: "“Conheço cada ladrilho deste andar de olhos fechados. Passei dez anos estudando nesses laboratórios circulares, sem imaginar que a porta com a efígie de leão ao lado do meu quarto guardava a verdade sobre a morte dos meus pais.”",
    pins: [
      {
        num: "1",
        x: 50,
        y: 49,
        title: "Grande Biblioteca Alquímica & Domo Central",
        areaTag: "Centro de Estudos",
        desc: "Milhares de tomos sobre alteração molecular e história do Arcanum. O coração ideológico da Casa Vaelor."
      },
      {
        num: "2",
        x: 73,
        y: 34,
        title: "Porta Oculta para os Arquivos Restritos",
        areaTag: "O Segredo do Projeto Quimera",
        desc: "Passagem selada com o brasão alquímico de leão que leva ao subsolo onde Soren leu as notas de Lazare sobre o pacto infernal e o sacrifício de Elian e Lyra."
      },
      {
        num: "3",
        x: 74,
        y: 13,
        title: "Alojamentos dos Aprendizes Arcanos",
        areaTag: "Antigo Quarto de Soren",
        desc: "Aposentos austeros onde os jovens prodígios da Casta do Mercúrio dormem sob vigilância."
      },
      {
        num: "4",
        x: 85,
        y: 52,
        title: "Laboratórios Circulares de Transmutação",
        areaTag: "Bancadas de Alquimia",
        desc: "Anfiteatros de experimentação química onde Soren desenvolveu suas primeiras fórmulas do solvente Alkahest."
      },
      {
        num: "5",
        x: 16,
        y: 51,
        title: "Câmaras de Destilação Pesada",
        areaTag: "Ala Oeste",
        desc: "Grandes colunas de cobre e vidro que refinam os reagentes brutos enviados das minas de enxofre abaixo."
      }
    ]
  },
  {
    id: "sulfur",
    code: "PLANTA DE ÁREA 03 • SUBTERRÂNEO",
    title: "Laboratórios de Enxofre & Cofre do Pacto Quimera",
    subtitle: "O Berço de Elian e Lyra Conectado à Câmara de Sacrifício Infernal",
    imageKey: "map_sulfur",
    scale: "Planta de Masmorra (1 Quadrado = 1,5m / 5ft) • Casta do Enxofre & Zona Proibida",
    securityLevel: "Dividida: Ala de Trabalho (Oeste) vs. Cofre Selado a Sangue (Leste)",
    overview: "A planta mais trágica da Cidadela Vaelor. À esquerda ficam as estufas subterrâneas e bancadas onde Soren cresceu ao lado de Elian e Lyra; à direita, separado apenas por uma porta secreta trancada, fica o altar octogonal onde as almas dos dois foram entregues em um pacto infernal.",
    sorenMemory: "“Lazare disse que meus pais haviam morrido numa explosão acidental na bancada oeste. Na verdade, ele os arrastou através daquela porta trancada no centro e entregou a alma dos dois nos círculos vermelhos de pacto a vinte passos de onde eu costumava brincar.”",
    pins: [
      {
        num: "1",
        x: 19,
        y: 49,
        title: "Estação de Destilação & Bancadas de Reagentes",
        areaTag: "Posto de Trabalho de Elian",
        desc: "A bancada úmida onde o pai de Soren preparava compostos básicos e calibrava o colar arcano de cristal azul."
      },
      {
        num: "2",
        x: 19,
        y: 79,
        title: "Estufas Botânicas Subterrâneas",
        areaTag: "Jardim de Lyra",
        desc: "Cultivo de fungos luminescentes e ervas alquímicas onde a mãe de Soren lhe ensinou as primeiras noções da natureza."
      },
      {
        num: "3",
        x: 41,
        y: 50,
        title: "Porta Secreta Selada & 'O Caminho da Sombra'",
        areaTag: "Transição Proibida",
        desc: "Passagem oculta na parede leste do laboratório usada por Lazare para levar cobaias da Casta do Enxofre até o cofre ritual."
      },
      {
        num: "4",
        x: 75,
        y: 51,
        title: "Altar Central do Pacto & Círculos Gêmeos de Sacrifício",
        areaTag: "Berço Infernal do Tiefling",
        desc: "Câmara octogonal com dois círculos vermelhos de oferta anímica (onde as almas de Elian e Lyra foram pagas ao Inferno) ligados ao altar central onde o sangue de Soren foi reescrito como Tiefling."
      }
    ]
  }
];

// Estado da aplicação
let currentState = {
  selectedNode: "soren",
  soulTruthMode: false,
  activeTab: "network",
  selectedCasteIndex: 0,
  selectedActIndex: 0,
  selectedMapIndex: 0,
  selectedPinIndex: 0
};

document.addEventListener("DOMContentLoaded", () => {
  initImages();
  renderSelectedNode(currentState.selectedNode);
  renderCastes();
  renderStoryActs();
  renderVaelorMaps();
  setupEventListeners();
});

function initImages() {
  document.querySelectorAll("[data-img-key]").forEach(img => {
    const key = img.getAttribute("data-img-key");
    if (IMAGE_PATHS[key]) {
      img.src = IMAGE_PATHS[key];
    }
  });
}

function setupEventListeners() {
  document.querySelectorAll(".orbit-node").forEach(node => {
    node.addEventListener("click", () => {
      const nodeId = node.getAttribute("data-node");
      selectNode(nodeId);
    });
  });

  document.querySelectorAll(".quick-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const nodeId = btn.getAttribute("data-node");
      selectNode(nodeId);
    });
  });

  const modeToggleBtn = document.getElementById("toggle-truth-btn");
  if (modeToggleBtn) {
    modeToggleBtn.addEventListener("click", toggleSoulTruthMode);
  }

  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  const lightbox = document.getElementById("image-lightbox");
  const expandBtn = document.getElementById("expand-portrait-btn");
  if (expandBtn && lightbox) {
    expandBtn.addEventListener("click", () => {
      const currentData = DOSSIER_NODES[currentState.selectedNode];
      openLightbox(IMAGE_PATHS[currentData.imageKey], `${currentData.name} — ${currentData.role}`);
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest("#close-lightbox-btn")) {
        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");
      }
    });
  }
}

window.openLightbox = function(imgSrc, captionText) {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = imgSrc;
  if (lightboxCaption) lightboxCaption.textContent = captionText || "";
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
};

function selectNode(nodeId) {
  if (!DOSSIER_NODES[nodeId]) return;
  currentState.selectedNode = nodeId;

  document.querySelectorAll(".orbit-node").forEach(el => {
    el.classList.toggle("active-node", el.getAttribute("data-node") === nodeId);
  });

  document.querySelectorAll(".quick-select-btn").forEach(btn => {
    const isActive = btn.getAttribute("data-node") === nodeId;
    btn.classList.toggle("border-[var(--accent-main)]", isActive);
    btn.classList.toggle("bg-white/10", isActive);
  });

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

  document.getElementById("inspector-soul-label").textContent = data.soulLabel;
  document.getElementById("inspector-soul-percent").textContent = `${data.soulDensity}%`;
  document.getElementById("inspector-soul-bar").style.width = `${data.soulDensity}%`;

  document.getElementById("inspector-relation").textContent = data.relationToCenter;

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

  const visualContainer = document.getElementById("inspector-visual-list");
  visualContainer.innerHTML = data.visualGuide.map(item => `
    <div class="p-3 rounded-lg bg-black/35 border border-white/10">
      <div class="text-xs font-mono uppercase tracking-wider text-[var(--accent-main)] mb-1">${item.label}</div>
      <div class="text-sm text-stone-300 leading-relaxed">${item.text}</div>
    </div>
  `).join("");

  // Exibe ou oculta o painel de Ficha Racial de Tiefling apenas quando Soren está selecionado
  const racialBox = document.getElementById("soren-racial-sheet");
  if (racialBox) {
    racialBox.classList.toggle("hidden", nodeId !== "soren");
  }
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
      <button onclick="selectCaste(${idx})" class="${widths[idx]} mx-auto block text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
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
      <button onclick="selectAct(${idx})" class="w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
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
      <button onclick="selectAct(${Math.max(0, currentState.selectedActIndex - 1)})" ${currentState.selectedActIndex === 0 ? "disabled" : ""} class="px-4 py-2 rounded-lg border border-white/15 text-xs font-mono disabled:opacity-30 hover:bg-white/5 cursor-pointer">
        ← Ato Anterior
      </button>
      <span class="text-xs font-mono text-stone-400">Ato ${currentState.selectedActIndex + 1} de ${STORY_ACTS.length}</span>
      <button onclick="selectAct(${Math.min(STORY_ACTS.length - 1, currentState.selectedActIndex + 1)})" ${currentState.selectedActIndex === STORY_ACTS.length - 1 ? "disabled" : ""} class="px-4 py-2 rounded-lg border border-white/15 text-xs font-mono disabled:opacity-30 hover:bg-white/5 cursor-pointer">
        Próximo Ato →
      </button>
    </div>
  `;
}

window.selectAct = function(idx) {
  currentState.selectedActIndex = idx;
  renderStoryActs();
};

function renderVaelorMaps() {
  const selectorEl = document.getElementById("maps-selector-bar");
  const viewerEl = document.getElementById("maps-main-viewer");
  if (!selectorEl || !viewerEl) return;

  selectorEl.innerHTML = VAELOR_MAPS.map((m, idx) => {
    const active = idx === currentState.selectedMapIndex;
    return `
      <button onclick="selectVaelorMap(${idx})" class="text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
        active
          ? "bg-white/12 border-[var(--accent-main)] text-stone-100 shadow-lg"
          : "bg-black/40 border-white/10 text-stone-400 hover:text-stone-200 hover:border-white/25"
      }">
        <div class="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-main)] mb-0.5">${m.code}</div>
        <div class="font-bold text-sm text-stone-100 truncate">${m.title}</div>
      </button>
    `;
  }).join("");

  const currentMap = VAELOR_MAPS[currentState.selectedMapIndex];
  const currentPin = currentMap.pins[currentState.selectedPinIndex] || currentMap.pins[0];
  const mapImgSrc = IMAGE_PATHS[currentMap.imageKey];

  const pinsOverlayHtml = currentMap.pins.map((pin, pIdx) => {
    const isPinActive = pIdx === currentState.selectedPinIndex;
    return `
      <button
        onclick="selectMapPin(${pIdx})"
        style="left: ${pin.x}%; top: ${pin.y}%;"
        title="${pin.title}"
        class="absolute -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full font-mono text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isPinActive
            ? "bg-[var(--accent-main)] text-stone-950 scale-125 ring-4 ring-amber-400/50 shadow-[0_0_20px_rgba(229,142,38,0.9)]"
            : "bg-stone-950/90 text-amber-300 border-2 border-amber-400/80 hover:scale-110 shadow-lg"
        }"
      >
        ${pin.num}
      </button>
    `;
  }).join("");

  const pinsListHtml = currentMap.pins.map((pin, pIdx) => {
    const isPinActive = pIdx === currentState.selectedPinIndex;
    return `
      <div
        onclick="selectMapPin(${pIdx})"
        class="p-3.5 rounded-xl border transition-all cursor-pointer ${
          isPinActive
            ? "bg-white/10 border-[var(--accent-main)]"
            : "bg-black/35 border-white/10 hover:border-white/25"
        }"
      >
        <div class="flex items-center justify-between gap-2 mb-1">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
              isPinActive ? "bg-[var(--accent-main)] text-stone-950" : "bg-white/10 text-amber-300"
            }">${pin.num}</span>
            <h5 class="font-bold text-sm text-stone-100">${pin.title}</h5>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-stone-400 border border-white/10">${pin.areaTag}</span>
        </div>
        <p class="text-xs text-stone-300 leading-relaxed pl-7">${pin.desc}</p>
        ${
          pin.linkedMapIdx !== undefined
            ? `<div class="pl-7 mt-2">
                 <button onclick="event.stopPropagation(); selectVaelorMap(${pin.linkedMapIdx});" class="text-[11px] font-mono text-amber-400 hover:text-amber-300 underline cursor-pointer">
                   → Abrir Planta Detalhada desta Área
                 </button>
               </div>`
            : ""
        }
      </div>
    `;
  }).join("");

  viewerEl.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div class="lg:col-span-7 space-y-4">
        <div class="relative rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-stone-950 shadow-2xl group">
          <img src="${mapImgSrc}" alt="${currentMap.title}" class="w-full h-auto block select-none" />
          ${pinsOverlayHtml}
          <button
            onclick="openLightbox('${mapImgSrc}', '${currentMap.title} — ${currentMap.subtitle}')"
            class="absolute bottom-3 right-3 z-30 px-3.5 py-2 rounded-xl bg-black/85 hover:bg-black text-xs font-mono text-stone-100 border border-white/25 flex items-center gap-2 backdrop-blur-md shadow-lg cursor-pointer"
          >
            <span>🔍</span> Abrir Planta em Tela Cheia
          </button>
        </div>

        <div class="p-4 rounded-xl bg-black/55 border border-[var(--accent-main)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="text-xs font-mono text-[var(--accent-main)] uppercase">
              📍 Marcador Selecionado [Ponto ${currentPin.num}] • ${currentPin.areaTag}
            </div>
            <h4 class="text-lg font-bold text-stone-100 mt-0.5">${currentPin.title}</h4>
            <p class="text-sm text-stone-300 mt-1">${currentPin.desc}</p>
          </div>
          ${
            currentPin.linkedMapIdx !== undefined
              ? `<button onclick="selectVaelorMap(${currentPin.linkedMapIdx})" class="shrink-0 px-3.5 py-2 rounded-lg bg-[var(--accent-main)] text-stone-950 font-mono text-xs font-bold hover:opacity-90 cursor-pointer">
                   Ver Planta da Área →
                 </button>`
              : ""
          }
        </div>

        <div class="p-4 rounded-xl bg-black/40 border-l-4 border-[var(--accent-main)]">
          <div class="text-xs font-mono text-[var(--accent-main)] mb-1">Memória Tática de Soren Alkahest:</div>
          <p class="italic font-serif text-base md:text-lg text-stone-200">${currentMap.sorenMemory}</p>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-4">
        <div class="p-4 rounded-xl bg-black/40 border border-white/10">
          <div class="text-xs font-mono text-amber-400 uppercase">${currentMap.code}</div>
          <h3 class="text-2xl font-bold font-serif text-stone-100 mt-0.5">${currentMap.title}</h3>
          <p class="text-xs font-mono text-stone-400 mt-0.5">${currentMap.subtitle}</p>

          <div class="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-xs font-mono">
            <div class="text-stone-300"><span class="text-stone-500">ESCALA:</span> ${currentMap.scale}</div>
            <div class="text-stone-300"><span class="text-stone-500">SEGURANÇA:</span> ${currentMap.securityLevel}</div>
          </div>

          <p class="text-sm text-stone-300 leading-relaxed mt-3">${currentMap.overview}</p>
        </div>

        <div>
          <div class="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-stone-400 mb-2 px-1">
            <span>Setores & Salas Mapeadas</span>
            <span>Clique no número ou no cartão</span>
          </div>
          <div class="space-y-2.5">
            ${pinsListHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.selectVaelorMap = function(idx) {
  currentState.selectedMapIndex = idx;
  currentState.selectedPinIndex = 0;
  renderVaelorMaps();
};

window.selectMapPin = function(pinIdx) {
  currentState.selectedPinIndex = pinIdx;
  renderVaelorMaps();
};
