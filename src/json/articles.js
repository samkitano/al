const articles = [
  {
    'date': '11/03/1986',
    'medium': 'Dia',
    'title': 'Tendências de vanguarda na capital do mundo da dança',
    'venue': 'Nova Iorque',
    'id': '3'
  },
  {
    'date': '21/03/1986',
    'medium': 'Dia',
    'title': 'Do tradicional Quebra-Nozes à Isadora dos anos 80',
    'venue': 'Nova Iorque',
    'id': '4'
  },
  {
    'date': '25/03/1986',
    'medium': 'Dia',
    'title': 'Altos e baixos de exportações britânicas',
    'venue': 'Nova Iorque',
    'id': '5'
  },
  {
    'date': '11/04/1986',
    'medium': 'Dia',
    'title': 'Rumando a outros portos...',
    'group': 'Comp. de Maguy Marin',
    'venue': 'Nova Iorque',
    'id': '6'
  },
  {
    'date': '20/04/1986',
    'medium': 'Dia',
    'title': 'Reposições de Grandes Mestres',
    'venue': 'Nova Iorque',
    'id': '7'
  },
  {
    'date': '27/04/1986',
    'medium': 'Dia',
    'title': 'De Onde Sopram os Ventos da Novidade?',
    'venue': 'Nova Iorque',
    'notes': '1.º artigo',
    'id': '8'
  },
  {
    'date': '03/05/1986',
    'medium': 'Dia',
    'title': 'Precisão Chinesa',
    'group': 'Ballet Central da China',
    'venue': 'Nova Iorque',
    'id': '9'
  },
  {
    'date': '11/05/1986',
    'medium': 'Dia',
    'title': 'Do Mecanicismo à Sensualidade',
    'group': 'Merce Cunnigham',
    'venue': 'Nova Iorque',
    'id': '10'
  },
  {
    'date': '18/05/1986',
    'medium': 'Dia',
    'title': 'Se os "Alunos de Apolo" Assaltassem o São Carlos',
    'group': 'Alunos de Apolo',
    'id': '11'
  },
  {
    'date': '25/05/1986',
    'medium': 'Dia',
    'title': 'Espiríto de Luther King está Vivo no Harlem',
    'group': 'Dance Theatre of Harlem',
    'id': '12'
  },
  {
    'date': '01/06/1986',
    'medium': 'Dia',
    'title': 'Requiem para o Bailarino Nobre',
    'group': 'Erik Bruhn',
    'id': '13'
  },
  {
    'date': '08/06/1986',
    'medium': 'Dia',
    'title': 'Corpos que não suam e bailarinos que não respiram',
    'venue': 'Nova Iorque',
    'id': '14'
  },
  {
    'date': '10/08/1986',
    'medium': 'Dia',
    'title': 'Altos e baixos dum Festival de Dança',
    'id': '15'
  },
  {
    'date': '11/09/1986',
    'medium': 'Dia',
    'title': 'Ballet Kirov em Concertino',
    'group': 'Ballet Kirov',
    'venue': 'Nova Jersey',
    'id': '16'
  },
  {
    'date': '17/09/1986',
    'medium': 'Dia',
    'title': 'Perpetuando as Glórias do Passado',
    'group': 'Ballet Kirov',
    'venue': 'Nova Jersey',
    'id': '17'
  },
  {
    'date': '25/09/1986',
    'medium': 'Dia',
    'title': 'Rússia Permanece a Casa do Lago dos Cisnes',
    'id': '18'
  },
  {
    'date': '01/10/1986',
    'medium': 'Dia',
    'title': 'Uma Longa Jornada Através da Vida',
    'id': '19'
  },
  {
    'date': '16/10/1986',
    'medium': 'Dia',
    'title': 'Joyce Trisler Danscompany Regressa',
    'group': 'Joyce Trisler Danscomp.',
    'id': '20'
  },
  {
    'date': '11/01/1987',
    'medium': 'Dia',
    'title': 'Flamenco Puro nos Estados Unidos',
    'venue': 'Broadway / NYC',
    'id': '21'
  },
  {
    'date': '19/04/1987',
    'medium': 'Dia',
    'title': 'Uma Conversa com Lar Lubovitch',
    'group': 'Entrevista com Lar Lubovitch',
    'venue': 'Nova Iorque',
    'id': '22'
  },
  {
    'date': '03/05/1987',
    'medium': 'Dia',
    'title': 'Ano de 1986 em revista',
    'venue': 'Nova Iorque',
    'id': '23'
  },
  {
    'date': '23/05/1987',
    'medium': 'Dia',
    'title': 'Meteoros da dança',
    'group': 'II - Ano em revista',
    'venue': 'Nova Iorque',
    'id': '24'
  },
  {
    'date': '30/05/1987',
    'medium': 'Dia',
    'title': 'Um obrigado adiado',
    'group': 'Isabel Santa-Rosa',
    'venue': 'Nova Iorque',
    'id': '25'
  },
  {
    'date': '03/07/1987',
    'medium': 'Dia',
    'title': 'Amar-te poesia… dançar-te Lisboa',
    'venue': 'Lisboa',
    'id': '26'
  },
  {
    'date': '08/07/1987',
    'medium': 'Dia',
    'title': 'Impressões de um espectáculo diferente',
    'venue': 'Lisboa',
    'id': '27'
  },
  {
    'date': '08/07/1987',
    'medium': 'Dia',
    'title': 'Antes do pós-modernismo',
    'venue': 'Lisboa',
    'id': '28'
  },
  {
    'date': '24/09/1987',
    'medium': 'Dia',
    'title': 'Da Catalunha com... furor',
    'group': 'La Fura dels Baus',
    'venue': 'Gulbenkian',
    'id': '29'
  },
  {
    'date': '28/11/1987',
    'medium': 'Semanário',
    'title': 'Ballets de Monte Carlo trazem a Lisboa Sheherazade de Fokine',
    'group': 'Ballets de Monte Carlo',
    'venue': 'Teatro D. Maria II',
    'id': '30'
  },
  {
    'date': '24/12/1987',
    'medium': 'Semanário',
    'title': 'Sylvie Guillem vence como Odile e Odette',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '31'
  },
  {
    'date': '23/01/1988',
    'medium': 'Semanário',
    'title': 'Explorar a volúpia dos corpos',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'notes': 'Panorama da dança europeia',
    'id': '32'
  },
  {
    'date': '24/01/1988',
    'medium': 'Semanário',
    'title': 'Acorda Aurora, acorda!',
    'id': '33'
  },
  {
    'date': '13/02/1988',
    'medium': 'Semanário',
    'title': 'Dias de Carnaval, dias de Dança',
    'id': '34'
  },
  {
    'date': '12/03/1988',
    'medium': 'Semanário',
    'title': 'Na morte de Madame Ruth Ashwin',
    'group': 'Óbito de Madame Ruth Ashwin',
    'id': '35'
  },
  {
    'date': '12/03/1988',
    'medium': 'Semanário',
    'title': 'Trincheiras regressa com pot pourri da Paganini',
    'group': 'Entrevista com C. Trincheiras',
    'venue': 'Lisboa',
    'id': '36'
  },
  {
    'date': '09/04/1988',
    'medium': 'Semanário',
    'title': 'Ricardo Pais - encenador dança com Elvis',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '37'
  },
  {
    'date': '16/04/1988',
    'medium': 'Semanário',
    'title': 'Danças de Côrte no Forum Picoas',
    'group': 'Ensemble Barroco de Lisboa',
    'venue': 'Forum Picoas',
    'id': '38'
  },
  {
    'date': '30/04/1988',
    'medium': 'Gazeta de Artes e Letras',
    'title': 'Perspectivas da dança nos finais do sec. XX',
    'venue': 'Lisboa',
    'id': '39'
  },
  {
    'date': '04/06/1988',
    'medium': 'Semanário',
    'title': 'Twyla Tharp para a semana',
    'group': 'Companhia de Twyla Tharp',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '40'
  },
  {
    'date': '18/06/1988',
    'medium': 'Semanário',
    'title': 'Soirée Balanchine em Lisboa',
    'group': 'CNB',
    'id': '41'
  },
  {
    'date': '16/07/1988',
    'medium': 'Semanário',
    'title': 'Novos coreógrafos da Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '42'
  },
  {
    'date': '10/09/1988',
    'medium': 'Semanário',
    'title': 'Reinhilde Hoffmann viaja com Callas',
    'group': 'Tanzthearter de Bochum',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '43'
  },
  {
    'date': '24/09/1988',
    'medium': 'Semanário',
    'title': 'Águeda Sena desafia os gigantes',
    'group': 'O Gigante Verde',
    'venue': 'Lisboa',
    'id': '44'
  },
  {
    'date': '22/10/1988',
    'medium': 'Semanário',
    'title': 'Quebra-Nozes e Sonho de uma Noite de Verão',
    'group': 'Malegot e CNB',
    'venue': 'Coliseu e São Carlos',
    'id': '45'
  },
  {
    'date': '12/11/1988',
    'medium': 'Semanário',
    'title': 'Grandes novidades no Ballet Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '46'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1988',
    'id': '47'
  },
  {
    'date': '07/01/1989',
    'medium': 'Semanário',
    'title': 'Soirée Fokine',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '48'
  },
  {
    'date': '14/01/1989',
    'medium': 'Semanário',
    'title': 'Um ano de dança',
    'group': 'CNB',
    'venue': 'Gulbenkian',
    'id': '49'
  },
  {
    'date': '01/02/1989',
    'medium': 'Actor, O',
    'title': 'Terpsícore Catártica ou Melpóneme de Collants?',
    'group': 'Dança-teatro',
    'venue': 'Lisboa',
    'id': '50'
  },
  {
    'date': '04/02/1989',
    'medium': 'Semanário',
    'title': 'Ballet Gulbenkian e o regresso do Ballet Rambert',
    'group': 'BG e Ballet Rambert',
    'venue': 'FCG e Teatro São Luiz',
    'id': '51'
  },
  {
    'date': '11/03/1989',
    'medium': 'Semanário',
    'title': '"Presley, ao Piano" na Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'notes': 'Livro',
    'id': '52'
  },
  {
    'date': '23/03/1989',
    'medium': 'Semanário',
    'title': '"Dança" - livro de Afonso Manuel Alves',
    'group': 'Edicões D. Quixote',
    'venue': 'Lisboa',
    'notes': 'Cor:Christopher Bruce',
    'id': '53'
  },
  {
    'date': '15/04/1989',
    'medium': 'Semanário',
    'title': 'As Bodas do Ballet Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '54'
  },
  {
    'date': '15/04/1989',
    'medium': 'Semanário',
    'title': 'Entrevista com Maurice Béjart',
    'group': 'Lausanne',
    'id': '55'
  },
  {
    'date': '29/04/1989',
    'medium': 'Semanário',
    'title': 'Dia Mundial da Dança -1989',
    'id': '56'
  },
  {
    'date': '27/05/1989',
    'medium': 'Semanário',
    'title': 'Aspectos de Dança Contemporânea',
    'group': 'Stephen Petronio Company',
    'venue': 'ACARTE',
    'id': '57'
  },
  {
    'date': '23/06/1989',
    'medium': 'Semanário',
    'title': 'Os Cantos Buranos: uma oferta coreográfica',
    'group': 'Batsheva Dance Company',
    'venue': 'Grande Auditório Gulbenkian',
    'notes': 'ACARTE',
    'id': '58'
  },
  {
    'date': '08/07/1989',
    'medium': 'Semanário',
    'title': 'O classicismo que fala calão',
    'group': 'Karol Armitage',
    'venue': 'Jardim da Gulbenkian',
    'notes': 'ACARTE',
    'id': '59'
  },
  {
    'date': '22/07/1989',
    'medium': 'Semanário',
    'title': 'Ottone, Ottone',
    'group': 'Anne Teresa de Keersmaeker',
    'venue': 'Jardim da Gulbenkian',
    'id': '60'
  },
  {
    'date': '16/09/1989',
    'medium': 'Semanário',
    'title': 'Encontros ACARTE 1989',
    'venue': 'Gulbenkian',
    'id': '61'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1989',
    'id': '62'
  },
  {
    'date': '31/01/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Isolda, para a vida',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'notes': 'ACARTE',
    'id': '63'
  },
  {
    'date': '01/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Ballet Gulbenkian: duas estreias e uma reposição',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '64'
  },
  {
    'date': '08/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Alto contraste',
    'group': 'Dança Grupo',
    'venue': 'Gulbenkian',
    'id': '65'
  },
  {
    'date': '15/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Aparte: um trio a solo',
    'group': 'ACARTE',
    'venue': 'Gulbenkian',
    'id': '66'
  },
  {
    'date': '19/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'O cheiro da chuva',
    'group': 'Olga Roriz',
    'venue': 'Jardim do Tabaco',
    'id': '67'
  },
  {
    'date': '22/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um filão sem "copyright"',
    'group': 'CNB',
    'venue': 'Centro de Arte Moderna',
    'id': '68'
  },
  {
    'date': '23/02/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Uma viagem de afectos',
    'group': 'Paula Massano',
    'venue': 'Centro de Arte Moderna',
    'id': '69'
  },
  {
    'date': '07/03/1990',
    'medium': 'Diário de Lisboa',
    'title': 'As raízes mais ricas',
    'group': 'Nacho Duato',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '70'
  },
  {
    'date': '09/03/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um equilíbrio demasiado instável',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '71'
  },
  {
    'date': '15/03/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um caminho possível',
    'group': 'Rui Horta',
    'venue': 'Centro de Arte Moderna',
    'id': '72'
  },
  {
    'date': '22/03/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Entre "novíssima" e "divina"',
    'group': 'Joana Providência',
    'venue': 'Centro de Arte Moderna',
    'id': '73'
  },
  {
    'date': '28/03/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Sobre um estático fundo azul',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '74'
  },
  {
    'date': '20/04/1990',
    'medium': 'Diário de Lisboa',
    'title': 'O que nunca começa e vai começando',
    'group': 'João Fiadeiro',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '75'
  },
  {
    'date': '27/04/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Qualquer coisa de diferente',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '76'
  },
  {
    'date': '21/05/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Portas por abrir',
    'group': 'Comp. de Dança de Lisboa',
    'venue': 'Teatro de S. Luiz',
    'id': '77'
  },
  {
    'date': '29/05/1990',
    'medium': 'Diário de Lisboa',
    'title': '"Elas"… pela melhor: Marília Pêra',
    'group': '"Elas por Ela"',
    'venue': 'São Paulo - Brasil',
    'id': '78'
  },
  {
    'date': '01/06/1990',
    'medium': 'Diário de Lisboa',
    'title': '"Torrefacção": cevada, café e chicória',
    'group': 'Madalena Vitorino',
    'venue': 'Torrefacção Lusitana',
    'id': '79'
  },
  {
    'date': '07/06/1990',
    'medium': 'Diário de Lisboa',
    'title': 'À beira do precipício',
    'group': 'Ballet de Frankfurt',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '80'
  },
  {
    'date': '12/06/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Sob o signo das Descobertas',
    'group': 'Paulo Ribeiro',
    'venue': 'Centro de Arte Moderna',
    'id': '81'
  },
  {
    'date': '18/06/1990',
    'medium': 'Diário de Lisboa',
    'title': 'À sombra de Balanchine',
    'group': 'CNB',
    'venue': 'Teatro de S. Luiz',
    'id': '82'
  },
  {
    'date': '28/06/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um mundo de silêncios e sombras',
    'venue': 'Convento dos Cardais',
    'id': '83'
  },
  {
    'date': '29/06/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Sem surpresas',
    'group': 'Ballet de Krasnoyarsk',
    'venue': 'Teatro do Casino Estoril',
    'id': '84'
  },
  {
    'date': '04/07/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Nova Dança Portuguesa debatida no ACARTE',
    'group': 'Forum Dança e ACARTE',
    'venue': 'Centro de Arte Moderna',
    'id': '85'
  },
  {
    'date': '06/07/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Para além da América',
    'group': 'Bebe Miller',
    'venue': 'Gulbenkian',
    'id': '86'
  },
  {
    'date': '17/07/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Sem grandes virtuosismos',
    'group': 'Comp. de Douglas Dunn',
    'venue': 'Gulbenkian',
    'id': '87'
  },
  {
    'date': '23/07/1990',
    'medium': 'Diário de Lisboa',
    'title': 'José Sasportes: tão cauteloso quanto ocupado',
    'group': 'Entravista com J. Sasportes',
    'venue': 'Lisboa',
    'id': '88'
  },
  {
    'date': '23/07/1990',
    'medium': 'Diário de Lisboa',
    'title': 'A Escola da Rua',
    'group': 'Yoshiko Chuma',
    'venue': 'Gulbenkian',
    'id': '89'
  },
  {
    'date': '02/08/1990',
    'medium': 'Jornal do IACB',
    'title': 'Mestre português observa reportório para festival',
    'venue': 'Brasil',
    'id': '90'
  },
  {
    'date': '13/08/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um espelho de vitalidade',
    'group': 'VIII Festival de Dança de Joinville',
    'venue': 'Brasil',
    'id': '91'
  },
  {
    'date': '30/08/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Um carrefour de literatura...',
    'group': 'Bienal do Livro de São Paulo',
    'venue': 'Brasil',
    'id': '92'
  },
  {
    'date': '31/10/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Comp. de Bailado do S. Carlos abre temporada no Porto',
    'group': 'CNB',
    'venue': 'Coliseu do Porto',
    'id': '93'
  },
  {
    'date': '31/10/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Projectos coreograficos namoram a Europália',
    'group': 'Europália 91',
    'venue': 'Convento do Beato',
    'id': '94'
  },
  {
    'date': '15/11/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Ballet Gulbenkian: percursos nem sempre ardentes',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '95'
  },
  {
    'date': '19/11/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Montserrat Caballé no Coliseu',
    'group': 'Montserrat Caballé',
    'venue': 'Coliseu do Porto',
    'id': '96'
  },
  {
    'date': '19/11/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Os Jovens e a Dança: dar asas ao talento',
    'group': 'Concurso do CPDD',
    'venue': 'Convento do Beato',
    'id': '97'
  },
  {
    'date': '19/11/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Ballet Euskadi: um "pot pourri" de retalhos',
    'venue': 'Teatro Maria Matos',
    'id': '98'
  },
  {
    'date': '30/11/1990',
    'medium': 'Diário de Lisboa',
    'title': 'Palavras de circunstância',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '99'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1990',
    'id': '100'
  },
  {
    'date': '11/01/1991',
    'medium': 'Dança',
    'title': 'Ver a música e ouvir a dança',
    'group': 'Boletim nº 3 da ESD',
    'notes': 'Dia de publicação incerto',
    'id': '101'
  },
  {
    'date': '01/02/1991',
    'medium': 'Dançar',
    'title': 'Lisboa… dança viva!',
    'group': 'As companhias  portuguesas',
    'venue': 'São Pulo - Brasil',
    'id': '102'
  },
  {
    'date': '09/03/1991',
    'medium': 'Olá! Semanário',
    'title': 'Isabel Santa-Rosa: Prima Ballerina',
    'venue': 'Lisboa',
    'id': '103'
  },
  {
    'date': '14/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma reflexão sobre a nossa jovem coreografia',
    'group': 'EITE',
    'venue': 'ACARTE',
    'id': '104'
  },
  {
    'date': '16/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Fragilidades e inconsistências da recente produção coreográfica',
    'group': 'EITE',
    'id': '105'
  },
  {
    'date': '18/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um coreógrafo que não se pode Ignorar',
    'group': 'João Fiadeiro',
    'venue': 'Convento do Beato',
    'notes': 'ACARTE',
    'id': '106'
  },
  {
    'date': '19/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Ausência dos "cisnes" no S. Carlos',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '107'
  },
  {
    'date': '22/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Situações a "Preto e Branco"',
    'group': 'Olga Roriz',
    'venue': 'Centro de Arte Moderna',
    'id': '108'
  },
  {
    'date': '29/03/1991',
    'medium': 'Diário de Notícias',
    'title': 'Espectáculo longo e sem unidade',
    'group': 'Mostra de Dança Port. Cont',
    'venue': 'ACARTE',
    'id': '109'
  },
  {
    'date': '01/04/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma noite a dançar o tango à média luz',
    'venue': 'Casino Estoril',
    'id': '110'
  },
  {
    'date': '03/04/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma das mais vigorosas forças deste século',
    'group': 'Óbito de Martha Graham',
    'venue': 'Nova Iorque',
    'id': '111'
  },
  {
    'date': '16/04/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma proposta interessante',
    'group': 'Grupo Aparte',
    'venue': 'ACARTE',
    'id': '112'
  },
  {
    'date': '05/05/1991',
    'medium': 'Diário de Notícias',
    'title': 'Momentos de reflexão sobre a dança',
    'group': 'Dia Mundial da Dança',
    'venue': 'ACARTE',
    'id': '113'
  },
  {
    'date': '12/05/1991',
    'medium': 'Diário de Notícias',
    'title': 'Novo fôlego da Companhia de Dança de Lisboa',
    'group': 'Companhia de Dança de Lisboa',
    'venue': 'Teatro de S. Luiz',
    'id': '114'
  },
  {
    'date': '31/05/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma peça essencialmente metafórica',
    'group': 'Carolyn Carlson',
    'venue': 'Teatro de S. Luiz',
    'id': '115'
  },
  {
    'date': '01/06/1991',
    'medium': 'Por la Danza',
    'title': 'Lisboa, Danza Viva',
    'group': 'Portugal a la Vista',
    'venue': 'Madrid',
    'id': '116'
  },
  {
    'date': '01/06/1991',
    'medium': 'Semanário',
    'title': 'Carolyn Carlson: o trabalho dos bailarinos é universal',
    'notes': 'Entrevista',
    'id': '117'
  },
  {
    'date': '10/06/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um trabalho bem ritmado',
    'group': 'SOAP Dance Theater',
    'venue': 'ACARTE',
    'id': '118'
  },
  {
    'date': '13/06/1991',
    'medium': 'Diário de Notícias',
    'title': 'A pensar na dança do Século XXI',
    'group': 'Comp.de Bailado do TNSC',
    'venue': 'Teatro Nacional São Carlos',
    'id': '119'
  },
  {
    'date': '24/06/1991',
    'medium': 'Diário de Notícias',
    'title': 'Novo grupo em Almada',
    'group': 'Engrenagem',
    'id': '120'
  },
  {
    'date': '06/07/1991',
    'medium': 'Diário de Notícias',
    'title': 'O esplendor do Buthô',
    'group': 'Sankai Juku',
    'venue': 'Jardins da Gulbenkian',
    'id': '121'
  },
  {
    'date': '06/07/1991',
    'medium': 'Semanário',
    'title': 'Amagatsu o bailarino',
    'group': 'Entrevista com  Ushio Amagatsu',
    'id': '122'
  },
  {
    'date': '13/07/1991',
    'medium': 'Olá! Semanário',
    'title': 'Rudolfo Nureyev, o canto do cisne',
    'group': 'última digressão',
    'venue': 'Coliseu dos Recreios',
    'id': '123'
  },
  {
    'date': '14/07/1991',
    'medium': 'Diário de Notícias',
    'title': 'Coerência entre som e movimento',
    'group': 'Laura Dean Company',
    'venue': 'ACARTE',
    'id': '124'
  },
  {
    'date': '19/07/1991',
    'medium': 'Diário de Notícias',
    'title': 'O adeus do mito Nureyev',
    'group': 'Nureyev and Friends',
    'venue': 'Coliseu (Lisboa)',
    'id': '125'
  },
  {
    'date': '06/08/1991',
    'medium': 'Diário de Notícias',
    'title': 'Vai longe o "mito" do bailarino soviético',
    'group': 'Estrelas do Ballet Russo',
    'venue': 'Jardins do Palácio de Seteais',
    'id': '126'
  },
  {
    'date': '24/08/1991',
    'medium': 'Semanário',
    'title': 'Mozart, lasers e mímica',
    'group': 'Viva Mozart',
    'venue': 'Casino Estoril',
    'id': '127'
  },
  {
    'date': '31/08/1991',
    'medium': 'Semanário',
    'title': 'Encontros ACARTE: O Festival dos Festivais',
    'group': 'ACARTE',
    'venue': 'Gulbenkian',
    'id': '128'
  },
  {
    'date': '07/09/1991',
    'medium': 'Diário de Notícias',
    'title': 'Dois espectáculos felizes no ACARTE',
    'group': 'O Povo das Chuvas Acidas e Macbeth',
    'venue': 'ACARTE',
    'id': '129'
  },
  {
    'date': '10/09/1991',
    'medium': 'Diário de Notícias',
    'title': 'Sempre o mesmo movimento',
    'group': 'Wim Vandekeybus',
    'venue': 'ACARTE',
    'id': '130'
  },
  {
    'date': '12/09/1991',
    'medium': 'Diário de Notícias',
    'title': 'O banal e o "chic" nos Encontros',
    'group': 'The Kosh e Lucia Latour',
    'venue': 'ACARTE',
    'id': '131'
  },
  {
    'date': '14/09/1991',
    'medium': 'Diário de Notícias',
    'title': '"Rosas" belgas de volta com "Achterland"',
    'group': 'Companhia Rosas',
    'venue': 'ACARTE',
    'id': '132'
  },
  {
    'date': '15/09/1991',
    'medium': 'Diário de Notícias',
    'title': 'À sombra de Cunningham',
    'group': 'B.Rambert e Rotterdamse Dansgroep',
    'venue': 'ACARTE',
    'id': '133'
  },
  {
    'date': '18/09/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um perfeito desencantamento',
    'group': 'Catherine Diverrès',
    'venue': 'ACARTE',
    'id': '134'
  },
  {
    'date': '12/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Jorge Trincheiras morre aos 52 Anos',
    'group': 'Óbito de Jorge Trincheiras',
    'venue': 'Lisboa',
    'id': '135'
  },
  {
    'date': '12/10/1991',
    'medium': 'Semanário',
    'title': 'ACARTE, um festival de muitas portas',
    'group': 'ACARTE',
    'venue': 'Gulbenkian',
    'id': '136'
  },
  {
    'date': '12/10/1991',
    'medium': 'Semanário',
    'title': 'Jorge Salavisa: Ballet Gulbenkian depende da Fundação',
    'group': 'Entrevista com J. Salavisa',
    'venue': 'Lisboa',
    'id': '137'
  },
  {
    'date': '13/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Perfil de um bailarino',
    'group': 'Jorge Trincheiras',
    'id': '138'
  },
  {
    'date': '22/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Luxemburgo aplaudiu dança portuguesa',
    'group': 'Ballet Gulbenkian',
    'venue': 'Teatro Municipal do Luxemburgo',
    'id': '139'
  },
  {
    'date': '25/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'O rei no exílio',
    'group': 'Francisco Camacho',
    'venue': 'Festival de D.de Klapstuk',
    'id': '140'
  },
  {
    'date': '27/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Uma coreografia fechada sobre si mesma',
    'group': 'Joana Providência',
    'venue': 'Festival de D.de Klapstuk',
    'id': '141'
  },
  {
    'date': '29/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Coreografia inteligente',
    'group': 'Vera Mantero',
    'venue': 'Festival de D.de Klapstuk',
    'id': '142'
  },
  {
    'date': '30/10/1991',
    'medium': 'Diário de Notícias',
    'title': '"Ilha dos Amores" aplaudida em Lovaina',
    'group': 'Rui Nunes',
    'venue': 'Festival de D.de Klapstuk',
    'id': '143'
  },
  {
    'date': '31/10/1991',
    'medium': 'Diário de Notícias',
    'title': 'Obra ritmada e com pulso',
    'group': 'Aldara Bizarro',
    'venue': 'Festival de D.de Klapstuk',
    'id': '144'
  },
  {
    'date': '31/10/1991',
    'medium': 'Semanário',
    'title': 'Europália aplaude Ballet Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Teatro Municipal de Luxemburgo',
    'id': '145'
  },
  {
    'date': '01/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um clássico dos pós-modernistas',
    'group': 'Paulo Ribeiro',
    'venue': 'Festival de D.de Klapstuk',
    'id': '146'
  },
  {
    'date': '02/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Osaka desafia bailarinos portugueses',
    'venue': 'Teatro do Palais des Beaux Arts',
    'id': '147'
  },
  {
    'date': '04/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'João Fiadeiro muito aplaudido em Lovaina',
    'group': 'João Fiadeiro',
    'venue': 'Festival de D.de Klapstuk',
    'id': '148'
  },
  {
    'date': '16/11/1991',
    'medium': 'Semanário',
    'title': 'Jovens portugueses em Klapstuk',
    'group': 'Europália 91',
    'venue': 'Lovaina',
    'id': '149'
  },
  {
    'date': '17/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Teatro de humor e fascínio para todas as idades',
    'group': 'Trio Mummenschanz',
    'venue': 'Teatro Maria Matos',
    'id': '150'
  },
  {
    'date': '20/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um espectáculo original e agressivo',
    'group': 'Fura Dels Baus',
    'venue': 'Convento do Beato',
    'id': '151'
  },
  {
    'date': '23/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Proposta de simplicidade',
    'group': 'Nina de Goeyse e Os Tubos',
    'venue': 'Centro de Arte Moderna',
    'id': '152'
  },
  {
    'date': '24/11/1991',
    'medium': 'Diário de Notícias',
    'title': 'Século e meio de juventude',
    'group': 'Cª de Bailado do TNSC',
    'venue': 'Teatro S. Carlos',
    'id': '153'
  },
  {
    'date': '30/11/1991',
    'medium': 'Semanário',
    'title': 'Giselle: uma morte anunciada',
    'group': 'CNB - Cª de Bailado do TNSC',
    'venue': 'Teatro S. Carlos',
    'id': '154'
  },
  {
    'date': '01/12/1991',
    'medium': 'Diário de Notícias',
    'title': 'Meg Stuart e o seu Estudo sem Figuras',
    'group': 'Meg Stuart',
    'venue': 'ACARTE',
    'id': '155'
  },
  {
    'date': '03/12/1991',
    'medium': 'Diário de Notícias',
    'title': 'Para "encher os olhos"',
    'group': 'Antologia do Flamenco',
    'venue': 'Casino Estoril',
    'id': '156'
  },
  {
    'date': '08/12/1991',
    'medium': 'Diário de Notícias',
    'title': 'Um nome nos bastidores de muitos êxitos',
    'group': 'Óbito de Fernanda Marques',
    'venue': 'Lisboa',
    'id': '157'
  },
  {
    'date': '09/12/1991',
    'medium': 'Diário de Notícias',
    'title': '"Mel" de abelhas portuguesas',
    'group': 'Clara Andermatt',
    'venue': 'ACARTE',
    'id': '158'
  },
  {
    'date': '19/12/1991',
    'medium': 'Diário de Notícias',
    'title': 'Mistura de ópera com «taconeo»',
    'group': 'Ziryab',
    'venue': 'Teatro Maria Matos',
    'id': '159'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1991',
    'id': '160'
  },
  {
    'date': '04/01/1992',
    'medium': 'Semanário',
    'title': '91: Um ano de dança…',
    'id': '161'
  },
  {
    'date': '04/02/1992',
    'medium': 'Diário de Notícias',
    'title': '"Serenata Coreográfica" a Luísa Todi',
    'group': 'Ana Moura',
    'venue': 'Teatro da Trindade',
    'id': '162'
  },
  {
    'date': '09/02/1992',
    'medium': 'Diário de Notícias',
    'title': 'A melhor de todas as obras de Paulo Ribeiro',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '163'
  },
  {
    'date': '17/02/1992',
    'medium': 'Diário de Notícias',
    'title': '"Lago dos Cisnes" no S. Carlos',
    'group': 'CNB',
    'venue': 'Teatro S. Carlos',
    'id': '164'
  },
  {
    'date': '21/02/1992',
    'medium': 'Diário de Notícias',
    'title': 'Pelejas de pouca envergadura',
    'group': 'Comp. De Dança de Lisboa',
    'venue': 'Teatro São Luiz',
    'id': '165'
  },
  {
    'date': '24/02/1992',
    'medium': 'Diário de Notícias',
    'title': 'Artistas contadores de histórias',
    'group': 'Mallika Sarabhai e Peter Badejo',
    'venue': 'ACARTE',
    'id': '166'
  },
  {
    'date': '11/03/1992',
    'medium': 'Diário de Notícias',
    'title': 'Encontros Coreográficos de Lisboa',
    'venue': 'Teatro Maria Matos',
    'id': '167'
  },
  {
    'date': '14/03/1992',
    'medium': 'Semanário',
    'title': 'Uma história da dança em Portugal',
    'id': '168'
  },
  {
    'date': '29/03/1992',
    'medium': 'Diário de Notícias',
    'title': 'Um "pot pourri" de banalidades',
    'group': 'Liliane Viegas e José Arantes',
    'venue': 'Casino Estoril',
    'id': '169'
  },
  {
    'date': '01/04/1992',
    'medium': 'Diário de Notícias',
    'title': 'Uma proposta (brilhantemente) diferente',
    'group': 'Comp. de Stephen Petronio',
    'venue': 'ACARTE',
    'id': '170'
  },
  {
    'date': '06/04/1992',
    'medium': 'Diário de Notícias',
    'title': 'Uma trilogia de "reprises"',
    'group': 'CNB',
    'venue': 'Teatro S. Carlos',
    'id': '171'
  },
  {
    'date': '29/04/1992',
    'medium': 'Diário de Notícias',
    'title': 'A dança em Portugal está na corda bamba',
    'group': 'Dia Mundial da Dança',
    'id': '172'
  },
  {
    'date': '12/06/1992',
    'medium': 'Diário de Notícias',
    'title': 'Mais a dança que o teatro nas festas de Junho',
    'group': 'Festas da CML',
    'venue': 'Lisboa',
    'id': '173'
  },
  {
    'date': '02/07/1992',
    'medium': 'Diário de Notícias',
    'title': '"Carmina Burana" traz um presente envenenado',
    'group': 'CNB',
    'venue': 'Teatro São Carlos',
    'id': '174'
  },
  {
    'date': '02/07/1992',
    'medium': 'Edições da FMH',
    'title': 'A Crítica de Dança em Portugal',
    'venue': 'Faculdade de  Motricidade Humana',
    'id': '175'
  },
  {
    'date': '16/07/1992',
    'medium': 'Diário de Notícias',
    'title': 'Recuperar uma herança',
    'group': 'Academia Dança Antiga de Lx',
    'venue': 'Teatro São Carlos',
    'id': '176'
  },
  {
    'date': '28/07/1992',
    'medium': 'Diário de Notícias',
    'title': 'Excelentes interpretações',
    'group': 'Ballet Gulbenkian',
    'venue': 'XIV Estúdio Coreográfico',
    'id': '177'
  },
  {
    'date': '08/08/1992',
    'medium': 'Diário de Notícias',
    'title': 'Saladas russas baléticas',
    'group': 'Estrelas Russas',
    'venue': 'Jardins Palácio de Seteais',
    'id': '178'
  },
  {
    'date': '25/08/1992',
    'medium': 'Diário de Notícias',
    'title': '"Festa" da dança no Sri Lanka para multidão de crentes',
    'group': 'Festival de Kandy',
    'venue': 'Sri Lanka',
    'id': '179'
  },
  {
    'date': '05/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Talvez Beckett talvez não',
    'group': 'Maguy Marin',
    'venue': 'ACARTE',
    'id': '180'
  },
  {
    'date': '12/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Nadj e Deloche: de França...com amor',
    'group': 'Josej Nadj e Pierre Deloche',
    'venue': 'ACARTE',
    'id': '181'
  },
  {
    'date': '14/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'No universo de Maguy Marin',
    'group': 'Maguy Marin',
    'venue': 'ACARTE',
    'id': '182'
  },
  {
    'date': '16/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'A propósito do congresso do SIBMAS',
    'venue': 'ACARTE',
    'id': '183'
  },
  {
    'date': '18/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Linguagens ibéricas nos Encontros Acarte',
    'group': 'Danat Danza',
    'venue': 'ACARTE',
    'id': '184'
  },
  {
    'date': '22/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Meredith Monk "superstar"',
    'group': 'Meredith Monk',
    'venue': 'ACARTE',
    'id': '185'
  },
  {
    'date': '23/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Michèle e Michele: o gosto pelo movimento',
    'group': 'Michèle A. e Michele A. M.',
    'venue': 'ACARTE',
    'id': '186'
  },
  {
    'date': '30/09/1992',
    'medium': 'Diário de Notícias',
    'title': 'Noites de Queluz: equívocos à portuguesa',
    'group': 'Armando Jorge',
    'venue': 'Palácio de Queluz',
    'id': '187'
  },
  {
    'date': '20/10/1992',
    'medium': 'Diário de Notícias',
    'title': 'Stoklos: teatro essencial',
    'group': 'Denise Stoklos',
    'id': '188'
  },
  {
    'date': '13/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Fantasias dançadas no Ritz Club',
    'group': 'Grupo Aparte',
    'venue': 'Lisboa',
    'id': '189'
  },
  {
    'date': '16/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Wellenkamp assina nova versão da Sinfonia dos Salmos',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '190'
  },
  {
    'date': '18/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Salada russa em digressão',
    'group': 'Estrelas russas',
    'venue': 'Teatro de Santo António - Faro',
    'id': '191'
  },
  {
    'date': '18/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Benvindo Fonseca estreia-se como coreógrafo',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '192'
  },
  {
    'date': '19/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'CNB estreia temporada com reposições',
    'group': 'CNB',
    'venue': 'Teatro de S. Luiz',
    'id': '193'
  },
  {
    'date': '21/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Palco reduzido empalidece brilho do Bolchoi',
    'group': 'Ballet Bolchoi',
    'venue': 'Teatro da Trindade',
    'id': '194'
  },
  {
    'date': '22/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Gulbenkian abre temporada em força',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '195'
  },
  {
    'date': '23/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Companhia catalã dançou pela 1ª vez em Lisboa',
    'group': 'Comp. Gelabert Azzopardi',
    'venue': 'Teatro Maria Matos',
    'id': '196'
  },
  {
    'date': '25/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Teatro do Movimento trouxe «Carta ao Portador»',
    'group': 'Teatro do Movimento',
    'venue': 'Teatro da Trindade',
    'id': '197'
  },
  {
    'date': '26/11/1992',
    'medium': 'Correio da Manhã',
    'title': 'Muda-se a ordem mas os "ballets" são sempre os mesmos',
    'group': 'CNB',
    'venue': 'Teatro de S. Luiz',
    'id': '198'
  },
  {
    'date': '02/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Colaborador de Béjart morre em Lausana',
    'group': 'Jorge Donn',
    'venue': 'Suiça',
    'id': '199'
  },
  {
    'date': '12/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Projecto à procura de companhia',
    'group': 'GBP Verde Gaio',
    'venue': 'Palácio da Ajuda',
    'id': '200'
  },
  {
    'date': '12/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Dança na Rua do Carmo para transeunte ver',
    'group': 'Sereios e Lollobrigidas',
    'venue': 'Lisboa',
    'id': '201'
  },
  {
    'date': '13/12/1992',
    'medium': 'Revista do CM',
    'title': 'Lisboa assistiu a dança de qualidade',
    'group': 'Ballet Bolchoi e BG',
    'venue': 'Teatro da Trindade e FCG',
    'id': '202'
  },
  {
    'date': '14/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Literatura medieval inspirou jovens bailarinos',
    'group': 'Pola Non Haver',
    'venue': 'Instituto Franco-Português',
    'id': '203'
  },
  {
    'date': '15/12/1992',
    'medium': 'Correio da Manhã',
    'title': '"Morte do Minotauro" encerrou Festivais de Lisboa',
    'group': 'Cuadra de Sevilha',
    'venue': 'Festival de Lisboa',
    'id': '204'
  },
  {
    'date': '17/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Alunos de dança mostram coreografias',
    'group': 'Escola Superior de Dança',
    'venue': 'Conservatório Nacional',
    'id': '205'
  },
  {
    'date': '22/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Quebra-Nozes tripeiro: Companhia de Bailado do Porto',
    'group': 'Companhia de Bailado do Porto',
    'venue': 'Rivoli',
    'id': '206'
  },
  {
    'date': '23/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Acarte Distingue espectáculos "marginais"',
    'group': 'Prémio Madalena Perdigão',
    'venue': 'ACARTE',
    'id': '207'
  },
  {
    'date': '26/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Commedia Dell"arte: Cultura Italiana no Conservatório',
    'venue': 'Conservatório',
    'id': '208'
  },
  {
    'date': '30/12/1992',
    'medium': 'Correio da Manhã',
    'title': 'Pouco brilho nos olhos de "Coppélia"',
    'group': 'CNB',
    'venue': 'Teatro de S. Luiz',
    'id': '209'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1992',
    'id': '210'
  },
  {
    'date': '07/01/1993',
    'medium': 'Correio da Manhã',
    'title': 'Apagou-se uma estrela',
    'group': 'Óbito de Rodolfo Nureyev',
    'venue': 'Paris',
    'id': '211'
  },
  {
    'date': '08/01/1993',
    'medium': 'Correio da Manhã',
    'title': 'Professor de bailado Tony Hulbert deixou a cena nacional',
    'group': 'Óbito de Tony Hulbert',
    'venue': 'Lisboa',
    'id': '212'
  },
  {
    'date': '10/01/1993',
    'medium': 'Correio da Manhã',
    'title': 'Auto-Retratos díspares e complexos',
    'group': 'Francisco Camacho e outros',
    'venue': 'Teatro O Bando - Lisboa',
    'id': '213'
  },
  {
    'date': '20/01/1993',
    'medium': 'Correio da Manhã',
    'title': '"Quebra Nozes": cem anos de juventude',
    'group': '1º centenário do Quebra-Nozes',
    'id': '214'
  },
  {
    'date': '21/01/1993',
    'medium': 'Correio da Manhã',
    'title': '"Cinderella" para grandes e pequenos',
    'group': 'Royal Ballet',
    'venue': 'Convent Garden - Londres',
    'id': '215'
  },
  {
    'date': '29/01/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Gulbenkian estreia programa diversificado',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '216'
  },
  {
    'date': '29/01/1993',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafa americana salta sem rede',
    'group': 'Amanda Miller',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '217'
  },
  {
    'date': '03/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Morreu o bailarino Michel Renault',
    'group': 'Óbito de Michel Renault',
    'venue': 'Paris',
    'id': '218'
  },
  {
    'date': '05/02/1993',
    'medium': 'Correio da Manhã',
    'title': '"Casa do Marquês" traz gala de música e bailado',
    'venue': 'Teatro de S. Luiz',
    'id': '219'
  },
  {
    'date': '06/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Premiada no Japão dança no S. Luis com grupo de Setúbal',
    'group': 'Marina Sacramento',
    'venue': 'Teatro de S. Luiz',
    'id': '220'
  },
  {
    'date': '07/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Gulbenkian em fimgroupe-semana com reposições',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '221'
  },
  {
    'date': '07/02/1993',
    'medium': 'Revista do CM',
    'title': 'Florêncio Morgado: nome português na moda de Londres',
    'venue': 'Londres',
    'id': '222'
  },
  {
    'date': '11/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Um encontro "celestial"',
    'group': 'Nureyev e Fonteyn',
    'venue': 'RTP2',
    'id': '223'
  },
  {
    'date': '14/02/1993',
    'medium': 'Correio da Manhã',
    'title': '"Les Biches" pouco acrescenta ao espólio do grupo',
    'group': 'Companhia de Dança de Lisboa',
    'venue': 'Teatro de S. Luiz',
    'id': '224'
  },
  {
    'date': '16/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Portugueses e estrangeiros em Gala de Música e Bailado',
    'venue': 'Teatro de S. Luiz',
    'id': '225'
  },
  {
    'date': '20/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Público não alegrou 1ª Gala de Estrelas',
    'venue': 'Teatro de S. Luiz',
    'id': '226'
  },
  {
    'date': '21/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dias de Carnaval dias de dança',
    'id': '227'
  },
  {
    'date': '28/02/1993',
    'medium': 'Correio da Manhã',
    'title': 'Confrontar energias sem perder a compostura',
    'group': 'Companhia Re.AL',
    'venue': 'Centro Cultural da Malaposta',
    'id': '228'
  },
  {
    'date': '04/03/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança brasileira mostra-se em Lisboa e Porto',
    'group': 'Grupo de Dança Corpo',
    'venue': 'S.Luiz e Rivoli',
    'id': '229'
  },
  {
    'date': '05/03/1993',
    'medium': 'Correio da Manhã',
    'title': 'Directora da escola de Martha Graham ensinou portugueses',
    'group': 'Diane Gray',
    'venue': 'Escola de D. do Cons. Nac',
    'id': '230'
  },
  {
    'date': '07/03/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ciclo revela altos e baixos do vídeodança',
    'venue': 'Videoteca de Lisboa',
    'id': '231'
  },
  {
    'date': '14/03/1993',
    'medium': 'Correio da Manhã',
    'title': 'Corpo regressa a Portugal com sucessos internacionais',
    'group': 'Grupo de Dança Corpo',
    'venue': 'Teatro de S. Luiz',
    'id': '232'
  },
  {
    'date': '18/03/1993',
    'medium': 'Correio da Manhã',
    'title': '"Corpo" renascido em dança de sedução',
    'group': 'Grupo de Dança Corpo',
    'venue': 'Teatro de S. Luiz',
    'id': '233'
  },
  {
    'date': '21/03/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança na Gulbenkian: o triunfo da música',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '234'
  },
  {
    'date': '01/04/1993',
    'medium': 'Dancing Times',
    'title': 'Tony Hulbert',
    'group': 'Óbito',
    'venue': 'Lisboa',
    'id': '235'
  },
  {
    'date': '16/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança-Teatro na Caixa Económica',
    'group': 'Grupo A Torneira',
    'venue': 'Caixa Econ. Operária',
    'id': '236'
  },
  {
    'date': '17/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Centro de Sapateado abre em Lisboa',
    'venue': 'Ginásio da Alegria',
    'id': '237'
  },
  {
    'date': '18/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Torneira pinga gotas de sol',
    'group': 'Grupo A Torneira',
    'venue': 'Caixa Econ. Operária',
    'id': '238'
  },
  {
    'date': '20/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Companhia de dança de Setúbal estreia bailados',
    'group': 'CêDêCê',
    'venue': 'Teatro Luísa Todi',
    'id': '239'
  },
  {
    'date': '21/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Chapitô mostra dança francesa',
    'group': 'Grupo In Extremis',
    'venue': 'Chapitô',
    'id': '240'
  },
  {
    'date': '23/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Nem sempre as boas ideias fazem as boas danças',
    'group': 'Mary e James Fulkerson',
    'venue': 'ACARTE',
    'id': '241'
  },
  {
    'date': '26/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança independente mostra potencial da nova geração',
    'group': 'Maratona da dança',
    'venue': 'Teatro Maria Matos',
    'id': '242'
  },
  {
    'date': '28/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Teatro abre portas à dança com solos inéditos',
    'group': 'Vera Mantero e Francisco C.',
    'venue': 'Teatro D. Maria II',
    'id': '243'
  },
  {
    'date': '29/04/1993',
    'medium': 'Correio da Manhã',
    'title': 'Celebrar e reflectir a arte de Terpsicore',
    'group': 'Dia Mundial da Dança',
    'id': '244'
  },
  {
    'date': '02/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Celebrações juntaram comunidade da dança',
    'group': 'Dia Mundial da Dança',
    'id': '245'
  },
  {
    'date': '12/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Morreu Célia Neves a "alma" da dança espanhola',
    'group': 'Óbito de Célia Neves',
    'venue': 'Lisboa',
    'id': '246'
  },
  {
    'date': '13/05/1993',
    'medium': 'Correio da Manhã',
    'title': '"Príncipe" português dança no Canada',
    'group': 'Pedro Gomes',
    'venue': 'Toronto',
    'id': '247'
  },
  {
    'date': '13/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Mago do movimento, da luz e do som',
    'group': 'Óbito de Alwin Nikolais',
    'venue': 'Nova Iorque',
    'id': '248'
  },
  {
    'date': '14/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Benvindo Fonseca distinguido pela ONU',
    'venue': 'Lisboa',
    'id': '249'
  },
  {
    'date': '15/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança portuguesa perde Carlos Trincheiras',
    'group': 'Óbito de Carlos Trincheiras',
    'venue': 'Curitiba - Brasil',
    'id': '250'
  },
  {
    'date': '16/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dançar por amor em português',
    'group': 'Óbito de Carlos Trincheiras',
    'id': '251'
  },
  {
    'date': '28/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Reportório revigorado com novos coreógrafos',
    'group': 'Grupo de Almada',
    'venue': 'Academia Almadense',
    'id': '252'
  },
  {
    'date': '30/05/1993',
    'medium': 'Correio da Manhã',
    'title': 'Escola de Dança entrega diplomas',
    'venue': 'Conservatório N. de Lisboa',
    'id': '253'
  },
  {
    'date': '01/06/1993',
    'medium': 'Dancemagazine',
    'title': 'Tony Hulbert',
    'group': 'Óbito',
    'venue': 'Lisboa - Portugal',
    'id': '254'
  },
  {
    'date': '02/06/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança encerra Festa da Criança nos Olivais',
    'venue': 'Lisboa',
    'id': '255'
  },
  {
    'date': '07/06/1993',
    'medium': 'Correio da Manhã',
    'title': 'Interpretações seguras ampliam talento',
    'group': 'XV Estúdio Coreográfico',
    'venue': 'Gulbenkian',
    'id': '256'
  },
  {
    'date': '13/06/1993',
    'medium': 'Correio da Manhã',
    'title': 'Fantasia paras crianças com pernas de adultos',
    'group': 'Holliday on Ice',
    'venue': 'Pavilhão Carlos Lopes',
    'id': '257'
  },
  {
    'date': '16/06/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança estreia-se nas Festas da Cidade',
    'venue': 'Central Tejo',
    'id': '258'
  },
  {
    'date': '27/06/1993',
    'medium': 'Correio da Manhã',
    'title': 'Três coreógrafos mostram trabalhos dispersos',
    'venue': 'Central Tejo',
    'id': '259'
  },
  {
    'date': '02/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Mostra de dança despede-se com obra de Mónica Lapa',
    'group': 'Mónica Lapa',
    'venue': 'Central Tejo',
    'id': '260'
  },
  {
    'date': '06/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Mestres russos ensinam no Conservatório',
    'venue': 'ESD e EDCNacional',
    'id': '261'
  },
  {
    'date': '09/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Bailado antigo renasce das cinzas',
    'group': 'Escola de D. do Cons. Nac',
    'venue': 'Teatro de S. Luiz',
    'id': '262'
  },
  {
    'date': '09/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Reinhilde Hoffmann regressa com obras pouco apelativas',
    'group': 'Reinhilde Hoffmann',
    'venue': 'Jardim do Tabaco',
    'id': '263'
  },
  {
    'date': '12/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Maratona internacional anima Jardins da Gulbenkian',
    'group': 'Fest. Da Renânia do Norte-',
    'venue': 'Gulbenkian',
    'id': '264'
  },
  {
    'date': '17/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Solos de Dusseldorf enchem Gulbenkian',
    'group': 'Fest. Da Renânia do Norte-',
    'venue': 'Gulbenkian',
    'id': '265'
  },
  {
    'date': '19/07/1993',
    'medium': 'Correio da Manhã',
    'title': '"O Canto do Sol" apaga festival de dança alemã',
    'group': 'Fest. Da Renânia do Norte-',
    'venue': 'Gulbenkian',
    'id': '266'
  },
  {
    'date': '24/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dançar a memória de um génio',
    'group': 'Martha Graham',
    'venue': 'TV2',
    'id': '267'
  },
  {
    'date': '24/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'O insustentável peso da indiferença',
    'group': 'CNB',
    'venue': 'Teatro D. Maria II',
    'id': '268'
  },
  {
    'date': '25/07/1993',
    'medium': 'Correio da Manhã',
    'title': 'Estágio de dança abre com Gala Musical',
    'venue': 'Câmara Municipal de Lisboa',
    'id': '269'
  },
  {
    'date': '01/08/1993',
    'medium': 'Correio da Manhã',
    'title': 'Morreu o mais internacional dos cenógrafos portugueses',
    'group': 'Óbito de Nuno Côrte-Real',
    'venue': 'Lisboa',
    'id': '270'
  },
  {
    'date': '02/08/1993',
    'medium': 'Correio da Manhã',
    'title': 'Bons bailarinos não "aquecem" Noites de Seteais',
    'group': 'Ballet de Washington',
    'venue': 'Palácio de Seteais',
    'id': '271'
  },
  {
    'date': '08/08/1993',
    'medium': 'Correio da Manhã',
    'title': 'Elisa Monte traz energia e sensualidade',
    'group': 'Companhia de Elisa Monte',
    'venue': 'Festival de D.de Seteais',
    'id': '272'
  },
  {
    'date': '02/09/1993',
    'medium': 'Correio da Manhã',
    'title': 'Exposição de Picasso abre encontros de dança',
    'group': 'Encontros Acarte 93',
    'venue': 'Gulbenkian',
    'id': '273'
  },
  {
    'date': '05/09/1993',
    'medium': 'Correio da Manhã',
    'title': 'Companhia clássica  basca abre temporada lisboeta',
    'group': 'Ballet Euskadi',
    'venue': 'Teatro de S. Luiz',
    'id': '274'
  },
  {
    'date': '08/09/1993',
    'medium': 'Correio da Manhã',
    'title': 'Rui Horta volta a casa com "Arranjos Domésticos"',
    'group': 'Encontros Acarte 93',
    'venue': 'ACARTE',
    'id': '275'
  },
  {
    'date': '10/09/1993',
    'medium': 'Correio da Manhã',
    'title': '"Cios" coloridos e a preto e branco',
    'group': 'Encontros Acarte 93',
    'venue': 'ACARTE',
    'id': '276'
  },
  {
    'date': '11/09/1993',
    'medium': 'Correio da Manhã',
    'title': 'O regresso da amiga Olga',
    'group': 'Companhia de Dança Lisboa',
    'venue': 'ACARTE',
    'id': '277'
  },
  {
    'date': '18/09/1993',
    'medium': 'Correio da Manhã',
    'title': 'Racionalismo distante não aqueceu sangue latino',
    'group': 'Comp. de D. de Lucinda Childs',
    'venue': 'ACARTE',
    'id': '278'
  },
  {
    'date': '23/09/1993',
    'medium': 'Correio da Manhã',
    'title': '"Megastar" francesa encerra Encontros ACARTE',
    'group': 'Sylvie Gillem',
    'venue': 'ACARTE',
    'id': '279'
  },
  {
    'date': '08/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Peça interditada dá Prémio Acarte',
    'group': 'Inês Câmara Pestana',
    'venue': 'Gulbenkian',
    'id': '280'
  },
  {
    'date': '13/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Obra de Rui Nunes sofre de apatia coreográfica',
    'group': 'Ensinança de Bem Cavalgar',
    'venue': 'Auditório II do CCB',
    'id': '281'
  },
  {
    'date': '17/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Muitas ideias para poucas soluções',
    'group': 'Vera Mantero',
    'venue': 'Auditório da CGD',
    'id': '282'
  },
  {
    'date': '18/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Energia e elegância deram 1º prémio à Noruega',
    'group': '1º Conc. Int. de D. de Salão',
    'venue': 'Casino Estoril',
    'id': '283'
  },
  {
    'date': '19/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Voz celestial deixa auditório ao rubro',
    'group': 'Kiri Te Kanawa',
    'venue': 'CCB',
    'id': '284'
  },
  {
    'date': '30/10/1993',
    'medium': 'Correio da Manhã',
    'title': 'Bailarina Graça Barroso homenageada no CCB',
    'group': 'Gala de Dança',
    'venue': 'CCB',
    'id': '285'
  },
  {
    'date': '06/11/1993',
    'medium': 'Correio da Manhã',
    'title': '"Ballerina" Graça Barroso celebra 25 anos de carreira',
    'group': 'Gala de Dança',
    'venue': 'CCB',
    'id': '286'
  },
  {
    'date': '08/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Elenco de luxo homenageia Graça Barroso',
    'group': 'Gala de Dança',
    'venue': 'CCB',
    'id': '287'
  },
  {
    'date': '12/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Invocar em vão o nome de Isadora',
    'group': 'Homenagem a Isadora',
    'venue': 'Auditório da CGD',
    'id': '288'
  },
  {
    'date': '17/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Gulbenkian estreia "Makeba"',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '289'
  },
  {
    'date': '19/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Programa cosmopolita abre temporada',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditóro Gulbenkian',
    'id': '290'
  },
  {
    'date': '22/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Dança portuguesa recupera "ballerina" Isabel Santa-Rosa',
    'group': 'CNB',
    'venue': 'Lisboa',
    'id': '291'
  },
  {
    'date': '24/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Bailado e dança: Instituto é uma realidade',
    'group': 'CNB',
    'venue': 'Lisboa',
    'id': '292'
  },
  {
    'date': '30/11/1993',
    'medium': 'Correio da Manhã',
    'title': 'Imagens de desolação em dança de Meg Stuart',
    'group': 'Meg Stuart',
    'venue': 'Auditório da CGD',
    'id': '293'
  },
  {
    'date': '01/12/1993',
    'medium': 'Colóquio Artes',
    'title': 'Um forúm de dança e teatro desigual',
    'group': 'Encontros ACARTE 1993',
    'venue': 'Fundação Gulbenkian',
    'id': '294'
  },
  {
    'date': '01/12/1993',
    'medium': 'Dancemagazine',
    'title': 'Carlos Trincheiras',
    'group': 'Óbito',
    'venue': 'Curitiba - Brasil',
    'id': '295'
  },
  {
    'date': '06/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Companhia de Dança de Setúbal: sucursal do BG',
    'group': 'CêDêCê',
    'venue': 'Fórum Luísa Todi',
    'id': '296'
  },
  {
    'date': '09/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ballets Russes revisitados por Preljocaj',
    'group': 'Parade, Espectro e Bodas',
    'venue': 'Auditório da CGD',
    'id': '297'
  },
  {
    'date': '11/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'João Fiadeiro "desmultiplica" alter-ego em "Branco Sujo"',
    'group': 'Companhia RE.AL',
    'venue': 'Teatro da Malaposta',
    'id': '298'
  },
  {
    'date': '12/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Amigos evocam Carlos Trincheiras',
    'group': 'Espec. de D.Homenagem',
    'venue': 'Teatro de S. Luiz',
    'id': '299'
  },
  {
    'date': '14/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Homenagem a Trincheiras reúne bailarinos internacionais',
    'group': 'Espec. de D.Homenagem',
    'venue': 'Teatro de S. Luiz',
    'id': '300'
  },
  {
    'date': '16/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Um "Abraço" apertado a Carlos Trincheiras',
    'group': 'Espec. de D.Homenagem',
    'venue': 'Teatro de S. Luiz',
    'id': '301'
  },
  {
    'date': '19/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Carlos Trincheiras lembrado com emoção',
    'group': 'Espec. de D.Homenagem',
    'venue': 'Teatro de S. Luiz',
    'id': '302'
  },
  {
    'date': '21/12/1993',
    'medium': 'Correio da Manhã',
    'title': 'Ver a Música e Ouvir a Dança',
    'group': 'Balanchine na america',
    'venue': 'TVI',
    'id': '303'
  },
  {
    'date': '29/12/1993',
    'medium': 'Correio da Manhã',
    'title': '"Autoretrato" com cão salva "honra do convento"',
    'group': 'Quatro Coreógrafos',
    'venue': 'CCB',
    'id': '304'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1993',
    'id': '305'
  },
  {
    'date': '10/01/1994',
    'medium': 'Correio da Manhã',
    'title': 'Morreu o bailarino Gregory Osborne',
    'group': 'Óbito de Gregory Osborne',
    'id': '306'
  },
  {
    'date': '24/01/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dança na TV2 homenageia Carlos Trincheiras',
    'group': 'Homenagem a Carlos Trincheiras',
    'venue': 'TV2',
    'id': '307'
  },
  {
    'date': '28/01/1994',
    'medium': 'Correio da Manhã',
    'title': 'Gulbenkian com meias-estreias',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '308'
  },
  {
    'date': '01/02/1994',
    'medium': 'Correio da Manhã',
    'title': 'Portugueses tentam apuramento para Bagnolet',
    'venue': 'ACARTE',
    'id': '309'
  },
  {
    'date': '13/02/1994',
    'medium': 'Correio da Manhã',
    'title': 'Ideias jorram d"A Torneira',
    'group': 'Grupo A Torneira',
    'venue': 'Auditório de Benfica',
    'id': '310'
  },
  {
    'date': '20/02/1994',
    'medium': 'Correio da Manhã',
    'title': 'Bons ventos da Catalunha',
    'group': 'Àngels Margarit',
    'venue': 'Auditório da CGD',
    'id': '311'
  },
  {
    'date': '11/03/1994',
    'medium': 'Correio da Manhã',
    'title': 'Wellenkamp com fado no coração',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '312'
  },
  {
    'date': '12/03/1994',
    'medium': 'Correio da Manhã',
    'title': 'Caos e violência no Armazém 22',
    'group': 'La Fura Dels Baus',
    'venue': 'Lisboa',
    'id': '313'
  },
  {
    'date': '18/03/1994',
    'medium': 'Correio da Manhã',
    'title': 'Tango argentino: coração e alma de Buenos Aires',
    'group': 'Grupo de Buenos Aires',
    'venue': 'Teatro da Trindade',
    'id': '314'
  },
  {
    'date': '26/03/1994',
    'medium': 'Correio da Manhã',
    'title': 'Ney namora mas não conquista',
    'group': 'Ney Matogrosso',
    'venue': 'Pavilhão Carlos Lopes',
    'id': '315'
  },
  {
    'date': '26/03/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dança: pensar o futuro',
    'id': '316'
  },
  {
    'date': '01/04/1994',
    'medium': 'Ballet I. Tanz A.',
    'title': 'Dance in Portugal: times of incertainty… winds of change',
    'venue': 'Alemanha',
    'id': '317'
  },
  {
    'date': '16/04/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dança e música cruzam culturas',
    'group': 'Dançar Cabo Verde',
    'venue': 'Coliseu dos Recreios',
    'id': '318'
  },
  {
    'date': '17/04/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dançar o sonho para chegar ao fim das coisas',
    'group': 'Companhia de Dança de Lisboa',
    'venue': 'Teatro de S. Luiz',
    'id': '319'
  },
  {
    'date': '18/04/1994',
    'medium': 'Correio da Manhã',
    'title': '"Coppélia" na TV2',
    'id': '320'
  },
  {
    'date': '26/04/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dança Zeca Afonso com a seiva de Abril',
    'group': 'CêDêCê',
    'venue': 'Teatro de S. Luiz',
    'id': '321'
  },
  {
    'date': '29/04/1994',
    'medium': 'Correio da Manhã',
    'title': 'A Dança é ilusão divina',
    'group': 'Dia Mundial da Dança',
    'id': '322'
  },
  {
    'date': '05/05/1994',
    'medium': 'Correio da Manhã',
    'title': 'Danças exóticas evocam deuses',
    'group': 'Mallika Sarabhai',
    'venue': 'Centro de Arte Moderna',
    'id': '323'
  },
  {
    'date': '15/05/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dueto heterónimo trai Pessoa',
    'group': 'Olga Mesa',
    'venue': 'CCB',
    'id': '324'
  },
  {
    'date': '16/05/1994',
    'medium': 'Correio da Manhã',
    'title': 'Serão com "Gestos" de Olga Roriz',
    'group': 'Olga Roriz',
    'venue': 'TV2',
    'id': '325'
  },
  {
    'date': '20/05/1994',
    'medium': 'Correio da Manhã',
    'title': 'Um fresco de cor e paixão',
    'group': 'Ballet Nacional da Espanha',
    'venue': 'Coliseu dos Recreios',
    'id': '326'
  },
  {
    'date': '03/06/1994',
    'medium': 'Correio da Manhã',
    'title': 'Computação e agilidade alimentam o prazer da dança',
    'group': 'Merce Cunningham',
    'venue': 'Gulbenkian',
    'id': '327'
  },
  {
    'date': '17/06/1994',
    'medium': 'Correio da Manhã',
    'title': 'A dança desceu ao pátio',
    'group': 'Escola Superior de Dança',
    'venue': 'Lisboa',
    'id': '328'
  },
  {
    'date': '19/06/1994',
    'medium': 'Correio da Manhã',
    'title': 'Fogo e disciplina ainda alimentam a alma russa',
    'group': 'Grup. de D. da Geórgia',
    'venue': 'Coliseu dos Recreios',
    'id': '329'
  },
  {
    'date': '21/06/1994',
    'medium': 'Correio da Manhã',
    'title': 'Grupo infantil russo surpreende lisboetas',
    'group': 'Grup. de D. da Geórgia',
    'venue': 'Coliseu dos Recreios',
    'id': '330'
  },
  {
    'date': '24/06/1994',
    'medium': 'Correio da Manhã',
    'title': 'Danças empoeiradas "modernizam" Companhia Nacional',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '331'
  },
  {
    'date': '26/06/1994',
    'medium': 'Revista do CM',
    'title': 'Português põe América a dançar a África',
    'group': 'Júlio Leitão',
    'venue': 'Nova Iorque',
    'id': '332'
  },
  {
    'date': '01/07/1994',
    'medium': 'Correio da Manhã',
    'title': 'História de amor sobe ao altar',
    'group': 'Grupo Aparte',
    'venue': 'Capela da Gandarinha',
    'id': '333'
  },
  {
    'date': '14/07/1994',
    'medium': 'Correio da Manhã',
    'title': 'Nenúfares dançam entre a vida e a morte',
    'group': 'Kazuo Ohno',
    'venue': 'CCB',
    'id': '334'
  },
  {
    'date': '17/07/1994',
    'medium': 'Correio da Manhã',
    'title': 'Finalistas do Conservatório dançam para diploma',
    'group': 'Escola de D. do Cons. Nac.',
    'venue': 'Teatro de S. Luiz',
    'id': '335'
  },
  {
    'date': '28/07/1994',
    'medium': 'Correio da Manhã',
    'title': 'Jovens bailarinos ajudam crianças com Sida',
    'venue': 'Teatro Gil Vicente - Cascais',
    'id': '336'
  },
  {
    'date': '07/08/1994',
    'medium': 'Revista do CM',
    'title': 'Portugueses já dançam sem fronteiras',
    'id': '337'
  },
  {
    'date': '09/08/1994',
    'medium': 'Correio da Manhã',
    'title': 'Bela Adormecida impotada perdeu enredo pelo caminho',
    'group': 'Ballet Clássico da Rússia',
    'venue': 'Palácio de Seteais',
    'id': '338'
  },
  {
    'date': '14/08/1994',
    'medium': 'Correio da Manhã',
    'title': 'Aprumo técnico britânico aquece dança em Seteais',
    'group': 'Ballet Real da Inglaterra',
    'venue': 'Palácio de Seteais',
    'id': '339'
  },
  {
    'date': '21/08/1994',
    'medium': 'Correio da Manhã',
    'title': 'Reportório melhorado encerra festival',
    'group': 'Ballet de Saragoça',
    'venue': 'Palácio de Seteais',
    'id': '340'
  },
  {
    'date': '08/09/1994',
    'medium': 'Correio da Manhã',
    'title': 'Diva de Wuppertal triunfa em Lisboa com obras primas',
    'group': 'Comp. de D. e T. De Wup',
    'venue': 'Gulbenkian',
    'id': '341'
  },
  {
    'date': '09/09/1994',
    'medium': 'Correio da Manhã',
    'title': 'Vestidos trocados prucuram magia',
    'group': 'Ballet Teatro Porto',
    'venue': 'Teatro da Trindade',
    'id': '342'
  },
  {
    'date': '15/09/1994',
    'medium': 'Correio da Manhã',
    'title': 'Salvador inspira desejos mutilados',
    'group': 'João Fiadeiro',
    'venue': 'CCB',
    'id': '343'
  },
  {
    'date': '17/09/1994',
    'medium': 'Correio da Manhã',
    'title': '"Desejos" escuros para ideias claras',
    'group': 'João Fiadeiro',
    'venue': 'CCB',
    'id': '344'
  },
  {
    'date': '20/09/1994',
    'medium': 'Correio da Manhã',
    'title': 'Interiores femininos mutilados ou o diário de Anna Victorino',
    'group': 'Encontro ACARTE',
    'venue': 'Gulbenkian',
    'id': '345'
  },
  {
    'date': '29/09/1994',
    'medium': 'Correio da Manhã',
    'title': 'Incomunicabilidade e miséria tocam obra contemporânea',
    'group': 'Skite',
    'venue': 'Teatro da Trindade',
    'id': '346'
  },
  {
    'date': '16/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Onde a terra acaba e o Homem começa',
    'group': 'Olga Roriz',
    'venue': 'Teatro de S. João',
    'id': '347'
  },
  {
    'date': '19/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Prémio ACARTE privilegia cruzamento de culturas',
    'group': 'Dançar Cabo Verde',
    'venue': 'ACARTE',
    'id': '348'
  },
  {
    'date': '20/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Danças de areias brancas',
    'group': 'Companhia de Sankai Juko',
    'venue': 'CCB',
    'id': '349'
  },
  {
    'date': '23/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Sexo, sangue e vídeo em cidade arruinada',
    'group': 'Reza Abdoh',
    'venue': 'Culturgest',
    'id': '350'
  },
  {
    'date': '27/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Bailarino portuense morre aos 35 Anos',
    'group': 'Óbito de Alfredo Gesta',
    'venue': 'Porto',
    'id': '351'
  },
  {
    'date': '30/10/1994',
    'medium': 'Correio da Manhã',
    'title': 'Alma e coração Lusomediumrasileiros',
    'group': 'Joanna',
    'venue': 'CCB',
    'id': '352'
  },
  {
    'date': '02/11/1994',
    'medium': 'Correio da Manhã',
    'title': 'As lágrimas amargas de Olga Roriz',
    'group': 'CDL',
    'venue': 'Lisboa',
    'id': '353'
  },
  {
    'date': '06/11/1994',
    'medium': 'Correio da Manhã',
    'title': 'Coreografia de Forsythe aposta no artificio',
    'group': 'Ballet da Holanda',
    'venue': 'CCB',
    'id': '354'
  },
  {
    'date': '13/11/1994',
    'medium': 'Correio da Manhã',
    'title': 'Sorrisos e lamentos em noite de homenagem',
    'group': 'Homenagem a Martha Graham',
    'venue': 'Culturgest',
    'id': '355'
  },
  {
    'date': '18/11/1994',
    'medium': 'Correio da Manhã',
    'title': '"Migalhas" coreográficas',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '356'
  },
  {
    'date': '23/11/1994',
    'medium': 'Correio da Manhã',
    'title': 'Propostas nacionais estimulam jovens',
    'group': 'Bienal 94',
    'venue': 'Central Tejo',
    'id': '357'
  },
  {
    'date': '01/12/1994',
    'medium': 'Colóquio Artes',
    'title': 'O monopólio da diva de Wuppertal',
    'group': 'VIII Encontros ACARTE',
    'venue': 'Fundação Gulbenkian',
    'id': '358'
  },
  {
    'date': '01/12/1994',
    'medium': 'Correio da Manhã',
    'title': 'Dança de muitos para todos',
    'group': 'Dancing',
    'venue': 'TV2',
    'id': '359'
  },
  {
    'date': '01/12/1994',
    'medium': 'Estudos de Dança',
    'title': 'Lisboa "94: o sabor amargo do futuro?',
    'venue': 'Faculdade de  Motricidade Humana',
    'id': '360'
  },
  {
    'date': '09/12/1994',
    'medium': 'Correio da Manhã',
    'title': 'Artista e Imperatriz numa só pessoa',
    'group': 'Irene Papas',
    'venue': 'Culturgest',
    'id': '361'
  },
  {
    'date': '11/12/1994',
    'medium': 'Correio da Manhã',
    'title': '"Amor e Rosas" fecham Lisboa "94',
    'group': 'Companhia Rosas',
    'venue': 'CCB',
    'id': '362'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1994',
    'id': '363'
  },
  {
    'date': '15/01/1995',
    'medium': 'Correio da Manhã',
    'title': 'Paulo Ribeiro: o regresso à estrada',
    'group': 'Entrevista',
    'venue': 'Lisboa',
    'id': '364'
  },
  {
    'date': '16/01/1995',
    'medium': 'Correio da Manhã',
    'title': 'Explorar arquitecturas do grotesco',
    'group': 'Francisco Camacho',
    'venue': 'Culturgest',
    'id': '365'
  },
  {
    'date': '23/01/1995',
    'medium': 'Correio da Manhã',
    'title': 'Imaginação real',
    'group': '"Pour Bien"',
    'venue': 'Culturgest',
    'id': '366'
  },
  {
    'date': '04/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Movimento doméstico esfria paixão',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '367'
  },
  {
    'date': '06/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança murmurada leva poesia à Culturgest',
    'group': 'Paco Dècina',
    'venue': 'Culturgest',
    'id': '368'
  },
  {
    'date': '16/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dançar o fado com Amália no coração',
    'group': 'Ballet Gulbenkian',
    'venue': 'Teatro D. Maria II',
    'id': '369'
  },
  {
    'date': '19/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Raízes africanas renascem na Bahía',
    'group': 'Balé do Teatro Castro Alves',
    'venue': 'CCB',
    'id': '370'
  },
  {
    'date': '20/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafo britânico "regressa" a Portugal',
    'group': 'Chistopher Bruce',
    'venue': 'TV2',
    'id': '371'
  },
  {
    'date': '21/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Museu do Teatro veste-se de sonhos',
    'group': 'Exposição Vestir o Sonho',
    'venue': 'Lisboa',
    'id': '372'
  },
  {
    'date': '26/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dias de Carnaval tempo de dança',
    'id': '373'
  },
  {
    'date': '28/02/1995',
    'medium': 'Correio da Manhã',
    'title': 'Corpo regressa com obras novas',
    'group': 'Grupo Corpo',
    'venue': 'CCB',
    'id': '374'
  },
  {
    'date': '03/03/1995',
    'medium': 'Correio da Manhã',
    'title': 'Corpo explode em ritmo e sensualidade',
    'group': 'Grupo Corpo',
    'venue': 'CCB',
    'id': '375'
  },
  {
    'date': '24/03/1995',
    'medium': 'Correio da Manhã',
    'title': 'Braços caem na dança portuguesa',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '376'
  },
  {
    'date': '29/03/1995',
    'medium': 'Correio da Manhã',
    'title': 'Carolice e esperança "alimentam" dança',
    'group': 'Olga Roriz',
    'venue': 'Palácio de Queluz',
    'id': '377'
  },
  {
    'date': '08/04/1995',
    'medium': 'Correio da Manhã',
    'title': 'Danças de espadas incendeiam alma russa',
    'group': 'D. Folclórica da Russia',
    'venue': 'Teatro da Trindade',
    'id': '378'
  },
  {
    'date': '13/04/1995',
    'medium': 'Correio da Manhã',
    'title': 'Companhia Nacional baralha e dá de novo',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '379'
  },
  {
    'date': '21/04/1995',
    'medium': 'Correio da Manhã',
    'title': 'Música e dança para todos os gostos',
    'group': 'Grupo Juan Cedron',
    'venue': 'Teatro da Trindade',
    'id': '380'
  },
  {
    'date': '24/04/1995',
    'medium': 'Correio da Manhã',
    'title': 'Exmediumailarina da CNB e do Verde Gaio morre aos 41 anos',
    'group': 'Óbito de Madalena Sá Pessoa',
    'venue': 'Carcavelos',
    'id': '381'
  },
  {
    'date': '29/04/1995',
    'medium': 'Correio da Manhã',
    'title': 'A eternidade da arte "amada"',
    'group': 'Dia Mundial da Dança',
    'id': '382'
  },
  {
    'date': '07/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Quatro estreias pouca novidade',
    'group': 'Grupo de D. De Almada',
    'venue': 'Academia Almadense',
    'id': '383'
  },
  {
    'date': '08/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Solo de querubim',
    'group': 'Margarida Bettencourt',
    'venue': 'ACARTE',
    'id': '384'
  },
  {
    'date': '12/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Jovens coreógrafos estreiam-se em Benfica',
    'group': 'Diniz Sanchez e Denise Carmo',
    'venue': 'Auditório Carlos Paredes',
    'id': '385'
  },
  {
    'date': '13/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dançar a vida com a morte no horizonte',
    'group': 'Companhia de Bill T. Jones',
    'venue': 'Culturgest',
    'id': '386'
  },
  {
    'date': '26/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Sangue espesso e personalidade vincada',
    'group': 'Lola Greco e Anotnio Márquez',
    'venue': 'CCB',
    'id': '387'
  },
  {
    'date': '28/05/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança andaluza transforma CCB em ardente "tablao"',
    'group': 'Ballet Nacional da Espanha',
    'venue': 'CCB',
    'id': '388'
  },
  {
    'date': '04/06/1995',
    'medium': 'Correio da Manhã',
    'title': 'Estreia auspiciosa futuro incerto',
    'group': 'Comp. de Paulo Ribeiro',
    'venue': 'CCB',
    'id': '389'
  },
  {
    'date': '05/06/1995',
    'medium': 'Correio da Manhã',
    'title': 'A felicidade da dança personalizada',
    'group': 'Comp. De Trisha Brown',
    'venue': 'Culturgest',
    'id': '390'
  },
  {
    'date': '06/06/1995',
    'medium': 'ENTRADAS - Dança',
    'title': 'Enciclopédia Luso-Brasileira da Editorial Verbo',
    'venue': 'Lisboa',
    'id': '391'
  },
  {
    'date': '23/06/1995',
    'medium': 'Correio da Manhã',
    'title': 'Uwe Scholz revitaliza Ballet de Leipzig',
    'group': 'Ballet de Leipzig',
    'venue': 'Teatro de S. Carlos',
    'id': '392'
  },
  {
    'date': '26/06/1995',
    'medium': 'Correio da Manhã',
    'title': '"Criação" de Scholz pelo Ballet de Leipzig',
    'group': 'Ballet de Leipzig',
    'venue': 'Teatro de S. Carlos',
    'id': '393'
  },
  {
    'date': '27/06/1995',
    'medium': 'Correio da Manhã',
    'title': 'Comuna acolhe dueto apaixonado',
    'group': 'Grupo Vo"Arte Dança',
    'venue': 'Comuna',
    'id': '394'
  },
  {
    'date': '09/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Chama de Alicia arde em Cuba',
    'group': 'Ballet Nacional de Cuba',
    'venue': 'Parque Palmela (Estoril)',
    'id': '395'
  },
  {
    'date': '15/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança "revisita" Cabo Verde',
    'group': 'Clara Andermatt',
    'venue': 'CCB',
    'id': '396'
  },
  {
    'date': '18/07/1995',
    'medium': 'Correio da Manhã',
    'title': '"Verniz" dançado em Coimbra',
    'group': 'Sofia Neuparth',
    'venue': 'Teatro Gil Vicente',
    'id': '397'
  },
  {
    'date': '19/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Vento e água empalidecem fogo da dança',
    'group': 'Ballet Nacional de Cuba',
    'venue': 'Estoril',
    'id': '398'
  },
  {
    'date': '23/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Lisboa aprecia expoente máximo do Ballet Argentino',
    'group': 'Julio Bocca',
    'venue': 'CCB',
    'id': '399'
  },
  {
    'date': '23/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Equívoco de uma "Noite de Verão"',
    'group': 'CNB',
    'venue': 'Palácio de Queluz',
    'id': '400'
  },
  {
    'date': '25/07/1995',
    'medium': 'Correio da Manhã',
    'title': 'Julio Bocca e amigos rejubilam no CCB',
    'group': 'Ballet Argentino',
    'venue': 'CCB',
    'id': '401'
  },
  {
    'date': '28/07/1995',
    'medium': 'Correio da Manhã',
    'title': '"Verniz" chega a Lisboa',
    'group': 'Sofia Neuparth',
    'venue': 'Teatro Maria Matos',
    'id': '402'
  },
  {
    'date': '28/07/1995',
    'medium': 'ENTRADAS - Dança',
    'title': 'Enciclopédia Luso-Brasileira da Editorial Verbo',
    'venue': 'Lisboa',
    'id': '403'
  },
  {
    'date': '01/08/1995',
    'medium': 'Correio da Manhã',
    'title': 'Ordem sem porquê',
    'group': 'XV Estúdio Coreográfico',
    'venue': 'Festival dos Capuchos - Almada',
    'id': '404'
  },
  {
    'date': '13/08/1995',
    'medium': 'Correio da Manhã',
    'title': 'Controle e discrição pontuam ballets de câmara',
    'group': 'Ballet Nacional da Holanda',
    'venue': 'Teatro da Trindade',
    'id': '405'
  },
  {
    'date': '27/08/1995',
    'medium': 'Correio da Manhã',
    'title': 'Jóias do bailado brilham em noite amena',
    'group': 'Solistas da Ópera de Paris',
    'venue': 'Jardins do P. de Seteais',
    'id': '406'
  },
  {
    'date': '27/08/1995',
    'medium': 'Correio da Manhã',
    'title': 'Mikhail Baryshnikov dança em Portugal',
    'group': 'Mikhail Baryshnikov',
    'venue': 'CCB',
    'id': '407'
  },
  {
    'date': '07/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança morna abre festival',
    'group': 'Companhia de Tours',
    'venue': 'ACARTE',
    'id': '408'
  },
  {
    'date': '13/09/1995',
    'medium': 'Correio da Manhã',
    'title': '"Fugas Selvagens" em obra pictorica',
    'group': 'Exposição da João Gonçalves',
    'venue': 'Galeria Época - Guarda',
    'id': '409'
  },
  {
    'date': '13/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Martha Graham: bailarina revelada',
    'venue': 'TV2',
    'id': '410'
  },
  {
    'date': '16/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança póstuma em festival "teatral"',
    'group': 'S.O.S',
    'venue': 'ACARTE',
    'id': '411'
  },
  {
    'date': '17/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Tempo de dança tempos de esperança',
    'group': 'CNB',
    'id': '412'
  },
  {
    'date': '18/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Besprosvany e Duras em "Cuarteto" a dois',
    'venue': 'Gulbenkian',
    'id': '413'
  },
  {
    'date': '25/09/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança musculada encerra significados ocultos',
    'group': 'Susanne Linke',
    'venue': 'ACARTE',
    'id': '414'
  },
  {
    'date': '29/09/1995',
    'medium': 'Correio da Manhã',
    'title': '"Projecto" de Baryshnikov em Portugal',
    'group': 'White Oak Dance Project',
    'venue': 'CCB',
    'id': '415'
  },
  {
    'date': '14/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'Cinco velas para a RE.AL',
    'group': 'RE.AL',
    'venue': 'Malaposta',
    'id': '416'
  },
  {
    'date': '16/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'Escócia e Finlândia dividem prémios',
    'group': 'II Conc. Int. de D. de Salão',
    'venue': 'Casino Estoril',
    'id': '417'
  },
  {
    'date': '20/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'Gulbenkian distingue projectos desassossegados',
    'group': 'Prémio ACARTE M.P.',
    'venue': 'ACARTE',
    'id': '418'
  },
  {
    'date': '22/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'Solos femininos bisam na Malaposta',
    'group': 'RE.AL',
    'venue': 'Malaposta',
    'id': '419'
  },
  {
    'date': '27/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'CCB esgotado para ver Baryshnikov',
    'group': 'Mikhail Baryshnikov',
    'venue': 'CCB',
    'id': '420'
  },
  {
    'date': '30/10/1995',
    'medium': 'Correio da Manhã',
    'title': 'Desconforto e metáfora em dança europeizada',
    'group': 'Meg Stuart',
    'venue': 'Culturgest',
    'id': '421'
  },
  {
    'date': '03/11/1995',
    'medium': 'Correio da Manhã',
    'title': '"Nunca tento poupar-me"',
    'group': 'Entrevista com M. Baryshnikov',
    'id': '422'
  },
  {
    'date': '05/11/1995',
    'medium': 'Correio da Manhã',
    'title': 'Misha sublime como um cálice de Porto',
    'group': 'White Oak Dance Project',
    'venue': 'CCB',
    'id': '423'
  },
  {
    'date': '06/11/1995',
    'medium': 'Correio da Manhã',
    'title': 'CNB alerta governo para situação "desesperada"',
    'group': 'MC',
    'venue': 'Palácio da Ajuda',
    'id': '424'
  },
  {
    'date': '17/11/1995',
    'medium': 'Correio da Manhã',
    'title': 'Pão de qualidade em "sandwich" de dança',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '425'
  },
  {
    'date': '19/11/1995',
    'medium': 'Correio da Manhã',
    'title': 'Bailarina portuguesa com mestre americano',
    'group': 'Sílvia Nevjinsky',
    'venue': 'Nova Iorque',
    'id': '426'
  },
  {
    'date': '22/11/1995',
    'medium': 'Correio da Manhã',
    'title': '"D. Quixote" amputado aplaudido no Trindade',
    'group': 'Ballet Clássico de Minsk',
    'venue': 'Teatro da Trindade',
    'id': '427'
  },
  {
    'date': '03/12/1995',
    'medium': 'Correio da Manhã',
    'title': 'Dança reconhe(sida)',
    'venue': 'Teatro de S. Luiz',
    'id': '428'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1995',
    'id': '429'
  },
  {
    'date': '07/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'A tradição já não é o que era',
    'group': 'Solos de Galili e Molina',
    'venue': 'ACARTE',
    'id': '430'
  },
  {
    'date': '07/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'América perde grande patrono da dança',
    'group': 'Óbito de Lincoln Kirstein',
    'venue': 'Nova Iorque',
    'id': '431'
  },
  {
    'date': '13/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'Sem alma nem bananas',
    'group': 'Homenagem a Josephine Baker',
    'venue': 'Culturgest',
    'id': '432'
  },
  {
    'date': '14/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'Mulheres "urbanas" explodem em cena',
    'group': 'Urban Bush Women',
    'venue': 'CCB',
    'id': '433'
  },
  {
    'date': '18/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'Rumores quotidianos aspiram ao olimpo',
    'group': 'Companhia de Paulo Ribeiro',
    'venue': 'ACARTE',
    'id': '434'
  },
  {
    'date': '21/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'México colorido e exótico',
    'group': 'Ballet Folclórico do México',
    'venue': 'CCB',
    'id': '435'
  },
  {
    'date': '26/01/1996',
    'medium': 'Correio da Manhã',
    'title': 'Poucas mudanças nenhumas surpresas',
    'group': 'Bagnolet 96',
    'venue': 'CCB',
    'id': '436'
  },
  {
    'date': '31/01/1996',
    'medium': 'Revista Nova Gente',
    'title': 'Bailarina Portuguesa conquista os EUA',
    'group': 'Sílvia Nevjinsky',
    'venue': 'entrevista',
    'id': '437'
  },
  {
    'date': '02/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'O equilíbrio decoroso',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '438'
  },
  {
    'date': '04/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'Porquê "O Lago Dos Cisnes"?',
    'group': 'B. da Ópera de Novosibirsk',
    'venue': 'Coliseu dos Recreios',
    'id': '439'
  },
  {
    'date': '07/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'Monge dança em jardim de pedra',
    'group': 'João Teixeira da Mota',
    'venue': 'Museu do Chiado',
    'id': '440'
  },
  {
    'date': '08/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco chora o "Grande Antonio"',
    'group': 'Óbito de Antonio Ruiz Soler',
    'venue': 'Madrid',
    'id': '441'
  },
  {
    'date': '09/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'Loulé vê dança contemporânea',
    'group': '2º Mostra de dança contemp.',
    'venue': 'Cine-Teatro Loletano',
    'id': '442'
  },
  {
    'date': '14/02/1996',
    'medium': 'Revista Nova Gente',
    'title': 'Um portguês à conquista dos EUA',
    'group': 'Júlio Leitão',
    'venue': 'Nova Iorque',
    'id': '443'
  },
  {
    'date': '17/02/1996',
    'medium': 'Correio da Manhã',
    'title': 'Movimentos contemporâneos encontram-se hoje e amahã',
    'group': 'Encontros de dança',
    'venue': 'Faculdade de Motric. Hum.',
    'id': '444'
  },
  {
    'date': '01/03/1996',
    'medium': 'Artes & Leilões',
    'title': 'Jardim "floresce" no Museu do Chiado',
    'group': 'João Teixeira da Motta',
    'venue': 'Museu de Arte Contemporânea',
    'notes': 'Lisboa',
    'id': '445'
  },
  {
    'date': '03/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'Dança africana tem curso no CCB',
    'group': 'Batoto Yetu',
    'venue': 'CCB',
    'id': '446'
  },
  {
    'date': '05/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'Tango "démodé" encerra ciclo no Trindade',
    'group': 'Tango Tango',
    'venue': 'Teatro da Trindade',
    'id': '447'
  },
  {
    'date': '11/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'Coreografia preversa une choque e sedução',
    'group': 'Rui Nunes',
    'venue': 'CCB',
    'id': '448'
  },
  {
    'date': '17/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'CCB procura jonens africanos',
    'group': 'Batoto Yetu',
    'venue': 'CCB',
    'id': '449'
  },
  {
    'date': '22/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'Adeus à portuguesa',
    'group': 'Jorge Salavisa',
    'venue': 'Ballet Gulbenkian',
    'id': '450'
  },
  {
    'date': '31/03/1996',
    'medium': 'Correio da Manhã',
    'title': 'Descentralizar é palavra de ordem',
    'group': 'Comp. De Dança de Évora',
    'venue': 'Teatro Garcia de Rezende',
    'id': '451'
  },
  {
    'date': '07/04/1996',
    'medium': 'Correio da Manhã',
    'title': 'Portugueses e americanos dançam África',
    'group': 'Batoto Yetu',
    'venue': 'CCB e Teatro de S. Luiz',
    'id': '452'
  },
  {
    'date': '14/04/1996',
    'medium': 'Correio da Manhã',
    'title': 'Vigor da dança russa faz vibrar Coliseu',
    'group': 'B. da Ópera de Novosibirsk',
    'venue': 'Coliseu dos Recreios',
    'id': '453'
  },
  {
    'date': '21/04/1996',
    'medium': 'Correio da Manhã',
    'title': 'Dança de sobreviventes',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '454'
  },
  {
    'date': '29/04/1996',
    'medium': 'Correio da Manhã',
    'title': 'As teias da dança',
    'group': 'Dia Mundial da Dança',
    'venue': 'Entrevista Rui Vieira Nery',
    'id': '455'
  },
  {
    'date': '09/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Programa variado junta experiências',
    'group': 'Grupo de Dança de Almada',
    'venue': 'Academia Almadense',
    'id': '456'
  },
  {
    'date': '12/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Candoco: danças de impossibilidades',
    'group': 'Candoco',
    'venue': 'Culturgest',
    'id': '457'
  },
  {
    'date': '18/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Alunos de Apolo dançam há 124 Anos',
    'group': 'Sociedade Filarmónia AP',
    'venue': 'Lisboa',
    'id': '458'
  },
  {
    'date': '20/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Noitada de dança festeja os 124 Anos dos AP',
    'group': 'Sociedade Filarmónia AP',
    'venue': 'Lisboa',
    'id': '459'
  },
  {
    'date': '29/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Entre o pouco e o nada',
    'group': 'John Jasperse',
    'venue': 'CCB',
    'id': '460'
  },
  {
    'date': '31/05/1996',
    'medium': 'Correio da Manhã',
    'title': 'Arte sem fronteiras para as crianças do mundo',
    'group': 'Ismailian e Wellenkamp',
    'venue': 'Coliseu dos Recreios',
    'id': '461'
  },
  {
    'date': '04/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Danças sem fim à vista',
    'group': 'Bebe Miller',
    'venue': 'Culturgest',
    'id': '462'
  },
  {
    'date': '10/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Multidão a uma só voz',
    'group': 'Up With People',
    'venue': 'Aula Magna',
    'id': '463'
  },
  {
    'date': '21/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Longos silêncios baixam adrenalina',
    'group': 'Dennis O"Connor',
    'venue': 'CCB',
    'id': '464'
  },
  {
    'date': '23/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Revisitar o passado com Isadora no pensamento',
    'group': 'Vera Belozorovitch',
    'venue': 'CCB',
    'id': '465'
  },
  {
    'date': '25/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Ballet de Nice recria obras de génio',
    'group': 'Ballet de Nice',
    'venue': 'Coliseu dos Recreios',
    'id': '466'
  },
  {
    'date': '26/06/1996',
    'medium': 'Correio da Manhã',
    'title': 'Joffrey Ballet regressa com música de Prince',
    'group': 'Joffrey Ballet',
    'venue': 'CCB',
    'id': '467'
  },
  {
    'date': '01/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Apontamentos íntimos',
    'group': 'Odile Duboc',
    'venue': 'Culturgest',
    'id': '468'
  },
  {
    'date': '08/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'O Ballet que deveria ter sido…',
    'group': 'Festival Dos Capuchos',
    'venue': 'Praia do Meco',
    'id': '469'
  },
  {
    'date': '15/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Poesia ibérica na voz de deusas',
    'group': 'Nuria Espert e Eunice Muñoz',
    'venue': 'Festival de Almada',
    'id': '470'
  },
  {
    'date': '17/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco respira garra e carisma',
    'group': 'Ballet Nacional de Espanha',
    'venue': 'Coliseu dos Recreios',
    'id': '471'
  },
  {
    'date': '21/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco jovem quebra amarras',
    'group': 'Companhia de Ricardo Franco',
    'venue': 'CCB',
    'id': '472'
  },
  {
    'date': '23/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Salsa "picada" com sabor a vingança',
    'group': 'Celia Cruz, Tito Puente e Comp.',
    'venue': 'Praça de Touros de Cascais',
    'id': '473'
  },
  {
    'date': '25/07/1996',
    'medium': 'Correio da Manhã',
    'title': 'Danças na penunbra',
    'group': 'Henri Oguike',
    'venue': 'ACARTE',
    'id': '474'
  },
  {
    'date': '20/08/1996',
    'medium': 'Correio da Manhã',
    'title': 'Jovens africanos descobrem raízes',
    'group': 'Batoto Yetu',
    'venue': 'Baía de Cascais',
    'id': '475'
  },
  {
    'date': '21/08/1996',
    'medium': 'Correio da Manhã',
    'title': 'Aguarela brasileira pinta-se em França',
    'group': '7ª Bienal de D. de Lyon',
    'venue': 'Lyon',
    'id': '476'
  },
  {
    'date': '22/08/1996',
    'medium': 'Correio da Manhã',
    'title': 'América e Europa unidas pela dança',
    'group': 'Festival da Mercosul',
    'venue': 'Brasil',
    'id': '477'
  },
  {
    'date': '25/08/1996',
    'medium': 'Correio da Manhã',
    'title': 'Crianças da Batoto Yetu fazem parar o trânsito',
    'group': 'Batoto Yetu',
    'venue': 'Cascais',
    'id': '478'
  },
  {
    'date': '01/09/1996',
    'medium': 'Ass. Port. P Dança',
    'title': 'Às vezes não há pachorra!',
    'group': 'Dia Mundial da Dança',
    'venue': 'Lisboa',
    'id': '479'
  },
  {
    'date': '05/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Danças explosivas para música "pricipesca"',
    'group': 'Joffrey Ballet',
    'venue': 'Londres',
    'id': '480'
  },
  {
    'date': '16/09/1996',
    'medium': 'Correio da Manhã',
    'title': '"Dança do empata" não convence profissionais',
    'group': 'MC',
    'venue': 'CCB',
    'id': '481'
  },
  {
    'date': '19/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Encontros de culturas ao ritmo do samba',
    'group': '7ª Bienal de D. de Lyon',
    'venue': 'Lyon',
    'id': '482'
  },
  {
    'date': '20/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Bailado brasileiro empolga franceses',
    'group': 'Companhia de Deborah Colker',
    'venue': 'Lyon',
    'id': '483'
  },
  {
    'date': '21/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Estrelas brasileiras brilham em França',
    'group': 'Grupo Corpo',
    'venue': 'Lyon',
    'id': '484'
  },
  {
    'date': '22/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Música de Zeca inspira coreógrafa',
    'group': '7ª Bienal de D. de Lyon',
    'venue': 'Lyon',
    'id': '485'
  },
  {
    'date': '23/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Brasil português e africano na Bienal de Lyon',
    'group': 'Balé da Cidade de São Paulo',
    'venue': 'Lyon',
    'id': '486'
  },
  {
    'date': '24/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'A dança com o diabo no corpo',
    'group': 'Ballet Folclórico da Baía',
    'venue': 'Lyon',
    'id': '487'
  },
  {
    'date': '27/09/1996',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Stagium mostra trabalho pioneiro',
    'group': 'Ballet Stagium',
    'venue': 'Lyon',
    'id': '488'
  },
  {
    'date': '07/10/1996',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco em "traje de luces"',
    'group': 'Ballet de Antonio Canales',
    'venue': 'CCB',
    'id': '489'
  },
  {
    'date': '12/10/1996',
    'medium': 'Correio da Manhã',
    'title': 'Poemas de amor imperfeito',
    'group': 'Clara Andermatt',
    'venue': 'ACARTE',
    'id': '490'
  },
  {
    'date': '27/10/1996',
    'medium': 'Correio da Manhã',
    'title': 'Palavras mudas para viagem a solo',
    'group': 'Laurie Booth',
    'venue': 'ACARTE',
    'id': '491'
  },
  {
    'date': '01/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Ópera para teclados em "robe de chambre"',
    'group': 'Phillip Glass',
    'venue': 'CCB',
    'id': '492'
  },
  {
    'date': '03/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Vitral dançado com entusiasmo',
    'group': 'E.C. da CNB',
    'venue': 'Teatro Politeama',
    'id': '493'
  },
  {
    'date': '04/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Curso de bailado em Cascais',
    'venue': 'Hotel Estoril Sol',
    'id': '494'
  },
  {
    'date': '08/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafos internacionais pelos bailarinos mais maduros',
    'group': 'Nederlands Dans Theater III',
    'venue': 'Teatro da Trindade',
    'id': '495'
  },
  {
    'date': '09/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Duas mulheres dois destinos',
    'group': 'Anna Pásztor',
    'venue': 'Teatro da Trindade',
    'id': '496'
  },
  {
    'date': '11/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'A "barraca" da dança',
    'group': 'Clube de Artes e Ideias',
    'venue': 'Teatro de S. Luiz',
    'id': '497'
  },
  {
    'date': '12/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Luto na CNB por Miguel Lyzarro',
    'group': 'Óbito de Miguel Lyzarro',
    'venue': 'Sintra',
    'id': '498'
  },
  {
    'date': '15/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Mudar… para tudo ficar igual',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '499'
  },
  {
    'date': '15/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Nederlands Dans Theater III no Trindade',
    'group': 'Nederlands Dans Theater III',
    'venue': 'Teatro da Trindade',
    'id': '500'
  },
  {
    'date': '17/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'O Sabor da Maturidade',
    'group': 'Nederlands Dans Theater III',
    'venue': 'Teatro da Trindade',
    'id': '501'
  },
  {
    'date': '23/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Margie Gillis mostra arrebatamento e graça',
    'group': 'Margie Gillis',
    'venue': 'Teatro da Trindade',
    'id': '502'
  },
  {
    'date': '24/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Virtuosismo cénico',
    'group': 'António Nóbrega',
    'venue': 'Teatro Maria Matos',
    'id': '503'
  },
  {
    'date': '28/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Aviário humano em ebulição',
    'group': 'La Fura Dels Baus',
    'venue': 'Estufa Fria',
    'id': '504'
  },
  {
    'date': '30/11/1996',
    'medium': 'Correio da Manhã',
    'title': 'Dançar de dentro para fora',
    'group': 'Margie Gillis e João Maurício',
    'venue': 'Teatro da Trindade',
    'id': '505'
  },
  {
    'date': '04/12/1996',
    'medium': 'Correio da Manhã',
    'title': '"Quero partilhar experiências"',
    'group': 'Maria Reis Lima',
    'venue': 'Teatro Gil Vicente (Cascais)',
    'id': '506'
  },
  {
    'date': '26/12/1996',
    'medium': 'Correio da Manhã',
    'title': 'Ministério dobra subsídios à dança',
    'id': '507'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1996',
    'id': '508'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1996',
    'id': '509'
  },
  {
    'date': '16/01/1997',
    'medium': 'Correio da Manhã',
    'title': 'Rui Horta volta a Lisboa com "Objecto Constante"',
    'group': 'Rui Horta',
    'venue': 'Teatro da Trindade',
    'id': '510'
  },
  {
    'date': '17/01/1997',
    'medium': 'Correio da Manhã',
    'title': '"Contos Curtos" de Sofia Neuparth no Maria Matos',
    'group': 'Sofia Neuparth',
    'venue': 'Teatro Maria Matos',
    'id': '511'
  },
  {
    'date': '18/01/1997',
    'medium': 'Correio da Manhã',
    'title': '"Aurora" desperta no Coliseu',
    'group': 'Ballet de Novosibirsk',
    'venue': 'Coliseu dos Recreios',
    'id': '512'
  },
  {
    'date': '24/01/1997',
    'medium': 'Correio da Manhã',
    'title': 'Arrebatar é preciso',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditírio Gulbenkian',
    'id': '513'
  },
  {
    'date': '30/01/1997',
    'medium': 'Correio da Manhã',
    'title': 'Banalidades ao crepúsculo',
    'group': 'Bernard Montet',
    'venue': 'CCB',
    'id': '514'
  },
  {
    'date': '05/02/1997',
    'medium': 'Correio da Manhã',
    'title': 'Um emigrante "maldatemado"',
    'group': 'Entrevista com Rui Horta',
    'venue': 'Teatro da Trindade',
    'id': '515'
  },
  {
    'date': '16/02/1997',
    'medium': 'Correio da Manhã',
    'title': 'O elogio do caos e da brutalidade',
    'group': 'Wim Vandekeybus',
    'venue': 'CCB',
    'id': '516'
  },
  {
    'date': '20/02/1997',
    'medium': 'Correio da Manhã',
    'title': 'Quando Cassius Clay era rei',
    'id': '517'
  },
  {
    'date': '23/02/1997',
    'medium': 'Correio da Manhã',
    'title': 'O sorriso do fauno negro',
    'group': 'Companhia de Bill T. Jones',
    'venue': 'Culturgest',
    'id': '518'
  },
  {
    'date': '02/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'A inventiva ao poder: viva Decouflé!',
    'group': 'Decodex',
    'venue': 'CCB',
    'id': '519'
  },
  {
    'date': '04/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'Má sorte ter nascido alma',
    'group': 'Madalena Victorino',
    'venue': 'Comuna',
    'id': '520'
  },
  {
    'date': '10/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'Mistérios da criação',
    'group': 'CêDêCê',
    'venue': 'Forum Luísa Todi',
    'id': '521'
  },
  {
    'date': '15/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'Rui Horta reencontra-se na Gulbenkian',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditírio Gulbenkian',
    'id': '522'
  },
  {
    'date': '19/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'Muita dança no corpo',
    'group': 'Alina Lagoas e Xavier Carmo',
    'id': '523'
  },
  {
    'date': '29/03/1997',
    'medium': 'Correio da Manhã',
    'title': 'O insuportável peso do tédio',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '524'
  },
  {
    'date': '14/04/1997',
    'medium': 'Correio da Manhã',
    'title': 'Pureza de Giselle conquista Havana',
    'group': 'Ballet de Cuba',
    'venue': 'Cuba',
    'id': '525'
  },
  {
    'date': '16/04/1997',
    'medium': 'Correio da Manhã',
    'title': 'Julio Bocca anuncia retirada',
    'group': 'Julio Bocca',
    'id': '526'
  },
  {
    'date': '19/04/1997',
    'medium': 'Caras',
    'title': 'Jovens  bailarinos cativam estrelas de Hollywood',
    'group': 'Batoto Yetu',
    'venue': 'Los  Angeles - USA',
    'id': '527'
  },
  {
    'date': '20/04/1997',
    'medium': 'Correio da Manhã',
    'title': 'Comp. de Setúbal estreia bailados de Wellenkamp e Ribeiro',
    'group': 'CêDêCê',
    'venue': 'Teatro Luísa Todi',
    'id': '528'
  },
  {
    'date': '22/04/1997',
    'medium': 'Correio da Manhã',
    'title': 'Revisitação desnecessária',
    'group': 'Quatuor Albrecht Knust',
    'venue': 'Culturgest',
    'id': '529'
  },
  {
    'date': '29/04/1997',
    'medium': 'Correio da Manhã',
    'title': 'Esquecimentos à portuguesa',
    'group': 'Dia Mundial da Dança',
    'venue': 'Lisboa',
    'id': '530'
  },
  {
    'date': '15/05/1997',
    'medium': 'Correio da Manhã',
    'title': 'CNB "à la" Gulbenkian',
    'group': 'CNB',
    'venue': 'Teatro D. Maria II',
    'id': '531'
  },
  {
    'date': '17/05/1997',
    'medium': 'Correio da Manhã',
    'title': 'Regresso à tradição',
    'group': 'Ballet de Monte Carlo',
    'venue': 'CCB',
    'id': '532'
  },
  {
    'date': '19/05/1997',
    'medium': 'Correio da Manhã',
    'title': 'Danças de salão brilham no Casino Estoril',
    'group': 'Alunos D"Apolo',
    'venue': 'Casino Estoril',
    'id': '533'
  },
  {
    'date': '24/05/1997',
    'medium': 'Correio da Manhã',
    'title': 'Lascívia e machismo "Made In Broadway"',
    'group': 'Tango Pasión',
    'venue': 'CCB',
    'id': '534'
  },
  {
    'date': '03/06/1997',
    'medium': 'Correio da Manhã',
    'title': '"O Tango não deve ser uma peça de museu"',
    'group': 'Entrevista com Hector Zaraspe',
    'venue': 'Lisboa',
    'id': '535'
  },
  {
    'date': '12/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo da dança alemã',
    'group': 'Pina Bausch',
    'venue': 'Paris',
    'id': '536'
  },
  {
    'date': '14/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'Obras-primas em risco',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '537'
  },
  {
    'date': '18/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'A doce ironia da história',
    'group': 'Francisco Camacho',
    'venue': 'CCB',
    'id': '538'
  },
  {
    'date': '19/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'Grupo Studium dança na Damaia',
    'group': 'Grupo Studium',
    'venue': 'Teatro D. João V',
    'id': '539'
  },
  {
    'date': '21/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafo alemão retoma Stravinsky',
    'group': 'Joaquim Schlomer',
    'venue': 'Lyon',
    'id': '540'
  },
  {
    'date': '23/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'Saga cigana em flamenco: Gitano',
    'group': 'Antonio Canales',
    'venue': 'Coliseu dos Recreios',
    'id': '541'
  },
  {
    'date': '23/06/1997',
    'medium': 'Correio da Manhã',
    'title': 'Nudez em trio',
    'group': 'Boris Charmatz',
    'venue': 'Culturgest',
    'id': '542'
  },
  {
    'date': '26/06/1997',
    'medium': 'Correio da Manhã',
    'title': '"Fun da mental" entre a neurose e caricatura',
    'group': 'Amélia Bentes',
    'venue': 'CCB',
    'id': '543'
  },
  {
    'date': '02/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Prémio alemão para Rui Horta',
    'group': 'Rui Horta',
    'id': '544'
  },
  {
    'date': '03/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Dezassete anos de tradição',
    'group': 'Festival de Montpellier',
    'venue': 'França',
    'id': '545'
  },
  {
    'date': '04/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'O fogo do narcisismo:Paixão Cigana',
    'group': 'Joaquín Cortés',
    'venue': 'CCB',
    'id': '546'
  },
  {
    'date': '10/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Anna Mascolo: 50 anos de carreira',
    'group': 'Homenagem a Anna Mascolo',
    'venue': 'Faculdade de Motric. Hum.',
    'id': '547'
  },
  {
    'date': '10/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Regresso ao passado',
    'group': 'Companhia de Dança de Lisboa',
    'venue': 'Torre de Belém',
    'id': '548'
  },
  {
    'date': '18/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'A sedução das almas torturadas',
    'group': 'DV8',
    'venue': 'CCB',
    'id': '549'
  },
  {
    'date': '27/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Companhia Nacional de Bailado: 2 décadas de incertezas',
    'group': 'CNB',
    'venue': 'Teatro Rivoli',
    'id': '550'
  },
  {
    'date': '30/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Mestres estrangeiros ensinam no CCB',
    'group': 'Escola de Marta Ataíde',
    'venue': 'CCB',
    'id': '551'
  },
  {
    'date': '31/07/1997',
    'medium': 'Correio da Manhã',
    'title': 'Ballet de Cuba abre Festival de Seteais',
    'group': 'Ballet de Cuba',
    'venue': 'Parque Palmela',
    'id': '552'
  },
  {
    'date': '01/08/1997',
    'medium': 'Correio da Manhã',
    'title': 'Curso e espectáculos de dança para africanos',
    'group': 'Batoto Yetu',
    'venue': 'CCB',
    'id': '553'
  },
  {
    'date': '03/08/1997',
    'medium': 'Correio da Manhã',
    'title': 'Dançar sem empolgar',
    'group': 'Ballet de Cuba - F.de Seteais',
    'venue': 'Parque Palmela',
    'id': '554'
  },
  {
    'date': '08/08/1997',
    'medium': 'Correio da Manhã',
    'title': 'A César o que é de César',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '555'
  },
  {
    'date': '24/08/1997',
    'medium': 'Correio da Manhã',
    'title': 'Eternamente Balanchine!',
    'group': 'Artistas do N. York City Ballet',
    'venue': 'Parque Palmela',
    'id': '556'
  },
  {
    'date': '31/08/1997',
    'medium': 'Correio da Manhã',
    'title': 'Crianças dançam e cantam raízes africanas',
    'group': 'Batoto Yetu',
    'venue': 'CCB',
    'id': '557'
  },
  {
    'date': '06/09/1997',
    'medium': 'Correio da Manhã',
    'title': 'Danças para a comunidade',
    'group': 'Batoto Yetu',
    'venue': 'CCB',
    'id': '558'
  },
  {
    'date': '08/09/1997',
    'medium': 'Correio da Manhã',
    'title': 'Missa perdida',
    'group': 'Balleteatro Companhia',
    'venue': 'ACARTE',
    'id': '559'
  },
  {
    'date': '13/09/1997',
    'medium': 'Correio da Manhã',
    'title': 'Quotidiano e tecnologia',
    'group': 'Sasha Waltz',
    'venue': 'Encontros ACARTE',
    'id': '560'
  },
  {
    'date': '15/09/1997',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafa alemã em busca da alma portuguesa',
    'group': 'Pina Bausch',
    'id': '561'
  },
  {
    'date': '26/09/1997',
    'medium': 'Correio da Manhã',
    'title': 'Dança no espaço virtual',
    'group': 'Companhia de Yacov Sharir',
    'venue': 'ACARTE',
    'id': '562'
  },
  {
    'date': '19/10/1997',
    'medium': 'Correio da Manhã',
    'title': 'Solo robotizado',
    'group': 'Rui Nunes',
    'venue': 'Culturgest',
    'id': '563'
  },
  {
    'date': '08/11/1997',
    'medium': 'Correio da Manhã',
    'title': '"Tudo o que faço é com entusiasmo"',
    'group': 'Entrevista com Itzik Galili',
    'venue': 'Gulbenkian',
    'id': '564'
  },
  {
    'date': '09/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Danças insanas',
    'group': 'Mathilde Monnier',
    'venue': 'Culturgest',
    'id': '565'
  },
  {
    'date': '12/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Génio coreográfico em corpos de alta fidelidade',
    'group': 'Twyla Tharp',
    'venue': 'CCB',
    'id': '566'
  },
  {
    'date': '15/11/1997',
    'medium': 'Correio da Manhã',
    'title': '"Bailarinos bem treinados e atractivos"',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditírio Gulbenkian',
    'id': '567'
  },
  {
    'date': '18/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Doze dias a dançar na cidade',
    'group': 'Fest. Danças na Cidade',
    'venue': 'Lisboa',
    'id': '568'
  },
  {
    'date': '21/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Libertar o espírito através da dança',
    'group': 'Monges do Tibete',
    'venue': 'CCB',
    'id': '569'
  },
  {
    'date': '21/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Excesso coloridos',
    'group': 'Companhia de Paulo Ribeiro',
    'venue': 'Fest. Danças na Cidade',
    'id': '570'
  },
  {
    'date': '23/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo da provocação',
    'group': 'Quatro Solos de Dança',
    'venue': 'Culturgest',
    'id': '571'
  },
  {
    'date': '26/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Mãe extremosa filha aplicada',
    'group': 'Monserrat Caballé e M. Martí',
    'venue': 'Coliseu dos Recreios',
    'id': '572'
  },
  {
    'date': '28/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Muitos aplausos para pouco movimento',
    'group': 'Fest. Danças na Cidade',
    'venue': 'Lisboa',
    'id': '573'
  },
  {
    'date': '30/11/1997',
    'medium': 'Correio da Manhã',
    'title': 'Fábula de saltimbancos',
    'group': 'Josef Nadj',
    'venue': 'Culturgest',
    'id': '574'
  },
  {
    'date': '02/12/1997',
    'medium': 'Correio da Manhã',
    'title': '"Anos áureos da CNB" na Gymnásio',
    'group': 'CNB',
    'venue': 'Galeria Gymnásio',
    'id': '575'
  },
  {
    'date': '05/12/1997',
    'medium': 'Correio da Manhã',
    'title': 'Recordar os bons tempos da CNB na Gymnásio',
    'group': 'CNB',
    'venue': 'Galeria Gymnásio',
    'id': '576'
  },
  {
    'date': '13/12/1997',
    'medium': 'Correio da Manhã',
    'title': 'Danças e sons que falam português em New Jersey',
    'group': 'Batoto Yetu',
    'venue': 'New Jersey P. A. C.',
    'id': '577'
  },
  {
    'date': '20/12/1997',
    'medium': 'Correio da Manhã',
    'title': 'Muitas palavras para pouca dança',
    'group': 'Companhia de Olga Roriz',
    'venue': 'Teatro D. Maria II',
    'id': '578'
  },
  {
    'medium': 'Grande Enciclopédia',
    'title': 'Dança - Livro do Ano',
    'group': 'Edicões Zairol',
    'venue': 'Lisboa',
    'notes': '1997',
    'id': '579'
  },
  {
    'date': '18/01/1998',
    'medium': 'Correio da Manhã',
    'title': 'Regressos há muito esperados',
    'group': 'Festival dos 100 Dias',
    'venue': 'CCB',
    'id': '580'
  },
  {
    'date': '27/01/1998',
    'medium': 'Correio da Manhã',
    'title': 'Portugal, O - Finlândia,O',
    'venue': 'Culturgest',
    'id': '581'
  },
  {
    'date': '31/01/1998',
    'medium': 'Correio da Manhã',
    'title': 'O prazer dos corpos focados',
    'group': 'Solos de Vincent Dunoyer',
    'venue': 'Culturgest',
    'id': '582'
  },
  {
    'date': '07/02/1998',
    'medium': 'Correio da Manhã',
    'title': 'Aplausos premeiam corpos afinados',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '583'
  },
  {
    'date': '13/02/1998',
    'medium': 'Correio da Manhã',
    'title': 'Piano de gala',
    'group': 'Maria João Pires',
    'venue': 'CCB',
    'id': '584'
  },
  {
    'date': '14/02/1998',
    'medium': 'Correio da Manhã',
    'title': 'Divina e cintilante',
    'group': 'Liza Minnelli',
    'venue': 'Casino Estoril',
    'id': '585'
  },
  {
    'date': '15/02/1998',
    'medium': 'Correio da Manhã',
    'title': 'Danças suadas',
    'group': 'Joan-Paul Bucchieri',
    'venue': 'Central Tejo',
    'id': '586'
  },
  {
    'date': '11/03/1998',
    'medium': 'Correio da Manhã',
    'title': 'Programa em "crescendo" entre o afectado e o sublime',
    'group': 'Mark Morris',
    'venue': 'CCB',
    'id': '587'
  },
  {
    'date': '13/03/1998',
    'medium': 'Correio da Manhã',
    'title': 'Danças mornas em tons de verde',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '588'
  },
  {
    'date': '15/03/1998',
    'medium': 'Correio da Manhã',
    'title': 'Roda de anjos musculados',
    'group': 'Deborah Colker',
    'venue': 'Belo Horizonte',
    'id': '589'
  },
  {
    'date': '27/03/1998',
    'medium': 'Correio da Manhã',
    'title': 'Energia empolgante',
    'group': 'Companhia de Paul Taylor',
    'venue': 'CCB',
    'id': '590'
  },
  {
    'date': '29/03/1998',
    'medium': 'Correio da Manhã',
    'title': 'Matar a "Bela Adormecida"',
    'group': 'CNB',
    'venue': 'Évora',
    'id': '591'
  },
  {
    'date': '05/04/1998',
    'medium': 'Correio da Manhã',
    'title': 'Salto positivo',
    'group': 'CêDêCê',
    'venue': 'Forum Luisa Todi',
    'id': '592'
  },
  {
    'date': '19/04/1998',
    'medium': 'Correio da Manhã',
    'title': 'A tradição e a alma lusa',
    'group': 'Olga Roriz',
    'venue': 'CCB',
    'id': '593'
  },
  {
    'date': '26/04/1998',
    'medium': 'Correio da Manhã',
    'title': 'Cultos de virgem imagens de aldeia',
    'group': 'Olga Roriz',
    'venue': 'CCB',
    'id': '594'
  },
  {
    'date': '29/04/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dia Mundial da Dança lança mensagem ao Universo',
    'group': 'Dia Mundial da Dança',
    'id': '595'
  },
  {
    'date': '30/04/1998',
    'medium': 'Correio da Manhã',
    'title': 'A mais viva das artes no Auditório Eunice Muñoz',
    'group': 'Ver a Música e Ouvir a Dança',
    'venue': 'Oeiras',
    'id': '596'
  },
  {
    'date': '10/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'Diversidade conceptual',
    'group': 'Grupo de D. de Almada',
    'venue': 'Forum  Municipal de Almada',
    'id': '597'
  },
  {
    'date': '12/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança recorda Freddie Mercury',
    'group': 'Béjart Ballet',
    'venue': 'Coliseu dos Recreios',
    'id': '598'
  },
  {
    'date': '13/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'A luminosidade mestiça de Lisboa',
    'group': 'Companhia de Pina Bausch',
    'venue': 'CCB',
    'id': '599'
  },
  {
    'date': '17/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'Deborah Colker traz "Rota" à Expo',
    'group': 'Companhia D. de Deborah C.',
    'venue': 'Anfiteatro da Doca',
    'id': '600'
  },
  {
    'date': '19/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'Danças de fogo',
    'group': 'Homen. a Manuel de Falla',
    'venue': 'CCB',
    'id': '601'
  },
  {
    'date': '27/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'Gulbenkian em digressão',
    'group': 'Ballet Gulbenkian',
    'venue': 'Porto e Coimbra',
    'id': '602'
  },
  {
    'date': '31/05/1998',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo de corpos exemplares',
    'group': 'Ballet Nacacional da Holanda',
    'venue': 'Anfiteatro da Doca',
    'id': '603'
  },
  {
    'date': '06/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'O eterno apelo da juventude',
    'group': 'Magyar Festival Ballet',
    'venue': 'Expo 98',
    'id': '604'
  },
  {
    'date': '13/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança e música de qualidade superior',
    'group': 'Grupo Corpo',
    'venue': 'Teatro Camões',
    'id': '605'
  },
  {
    'date': '14/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'New York City Ballet dança o seu coreógrafo',
    'group': 'Jerome Robbins',
    'venue': 'Nova Iorque',
    'id': '606'
  },
  {
    'date': '15/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'Exaltação de corpos em sintonia',
    'group': 'Grupo Corpo',
    'venue': 'Teatro Camões',
    'id': '607'
  },
  {
    'date': '15/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'António Nóbrega: engenho e ardil',
    'group': 'António Nóbrega',
    'venue': 'Teatro Camões',
    'id': '608'
  },
  {
    'date': '21/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'É uma bela cidade que dança',
    'group': '18º Fest. de Montpellier',
    'venue': 'França',
    'id': '609'
  },
  {
    'date': '25/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'Estreia auspiciosa',
    'group': 'Comp. Port. de B. Cont.',
    'venue': 'Docas dos Olivais',
    'id': '610'
  },
  {
    'date': '25/06/1998',
    'medium': 'Correio da Manhã',
    'title': 'Batoto Yetu: a festa dos sentidos',
    'group': 'Batoto Yetu',
    'venue': 'Expo 98',
    'id': '611'
  },
  {
    'date': '04/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Mergulhar em Bach com Alain Platel',
    'venue': 'CCB',
    'id': '612'
  },
  {
    'date': '08/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Carmen: a doce tragédia da sedução',
    'group': 'Ópera de Lyon',
    'venue': 'Lyon',
    'id': '613'
  },
  {
    'date': '19/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'O impulso da dança',
    'group': 'Festival de Verão',
    'venue': 'Viena',
    'id': '614'
  },
  {
    'date': '20/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Danças do quotidiano',
    'group': 'Balleteatro Companhia',
    'venue': 'Expo 98',
    'id': '615'
  },
  {
    'date': '22/07/1998',
    'medium': 'Correio da Manhã',
    'title': '"Trovoada" Kodo: originalidade e vigor',
    'group': 'Kodo',
    'venue': 'Expo 98',
    'id': '616'
  },
  {
    'date': '25/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Miscelânea de danças',
    'group': 'Ballet Nacional do Cairo',
    'venue': 'Expo "98',
    'id': '617'
  },
  {
    'date': '26/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Combinação explosiva',
    'group': 'Javier De Frutos',
    'venue': 'CCB',
    'id': '618'
  },
  {
    'date': '30/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Corpos em busca de identidade',
    'group': 'Rui Nunes',
    'venue': 'Teatro Maria Matos',
    'id': '619'
  },
  {
    'date': '31/07/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança perde um dos maiores criadores do século',
    'group': 'Óbito de Jerome Robbins',
    'venue': 'Nova Iorque',
    'id': '620'
  },
  {
    'date': '03/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Monte Carlo dança antes da hora',
    'group': 'Ballet de Monte Carlo',
    'venue': 'Teatro Camões',
    'id': '621'
  },
  {
    'date': '06/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Cirurgia e dança',
    'group': 'Paulo Henrique',
    'venue': 'Teatro Maria Matos',
    'id': '622'
  },
  {
    'date': '09/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'A "invasão" flamenga',
    'group': 'Anjelika Oei',
    'venue': 'Expo 98',
    'id': '623'
  },
  {
    'date': '10/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Corpos masculinos suados e exibidos',
    'group': 'Clara Andermatt',
    'venue': 'CCB',
    'id': '624'
  },
  {
    'date': '11/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Espírito latino evoca Lorca',
    'group': 'Ballet do Novo Mundo',
    'venue': 'Anfiteatro da Doca',
    'id': '625'
  },
  {
    'date': '17/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Questões que ficam no ar',
    'group': 'Sílvia Real',
    'venue': 'Teatro Maria Matos',
    'id': '626'
  },
  {
    'date': '23/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'A poesia do lixo',
    'group': 'Vera Mantero',
    'venue': 'CCB',
    'id': '627'
  },
  {
    'date': '24/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Portugal e Brasil dançam em São Paulo',
    'group': 'Festival "Navegar é Preciso"',
    'venue': 'São Paulo',
    'id': '628'
  },
  {
    'date': '27/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'A arte de questionar a arte',
    'group': 'Ballet Preljocaj',
    'venue': 'Teatro D.Maria II',
    'id': '629'
  },
  {
    'date': '28/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Sonhar acordado',
    'group': 'Francisco Camacho',
    'venue': 'Teatro Maria Matos',
    'id': '630'
  },
  {
    'date': '29/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Corpos leves para vozes de garra',
    'group': 'Rui Lopes Graça',
    'venue': 'Expo 98',
    'id': '631'
  },
  {
    'date': '30/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'Tensão e fogo',
    'group': 'Wim Vandekeybus',
    'venue': 'CCB',
    'id': '632'
  },
  {
    'date': '31/08/1998',
    'medium': 'Correio da Manhã',
    'title': 'E depois do acidente...',
    'group': 'Babylónia',
    'venue': 'CCB',
    'id': '633'
  },
  {
    'date': '08/09/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança enérgica com música gravada',
    'group': 'Moving Into Dance',
    'venue': 'Gulbenkian',
    'id': '634'
  },
  {
    'date': '12/09/1998',
    'medium': 'Correio da Manhã',
    'title': 'Mediterrânea: a alma dos povos do Sul',
    'group': 'VIII Bienal de Dança',
    'venue': 'Lyon',
    'id': '635'
  },
  {
    'date': '14/09/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança portuguesa em festival brasileiro',
    'group': 'Ballet Gulbenkian',
    'venue': 'São Paulo',
    'id': '636'
  },
  {
    'date': '15/09/1998',
    'medium': 'Correio da Manhã',
    'title': 'Longo desfile anima ruas da cidade',
    'group': 'VIII Bienal de Dança',
    'venue': 'Lyon',
    'id': '637'
  },
  {
    'date': '08/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança de ambiguidades',
    'group': 'Bruno Listopad',
    'venue': 'Gulbenkian',
    'id': '638'
  },
  {
    'date': '09/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'Brincar com o movimento',
    'group': 'Companhia de D.de Almada',
    'venue': 'Fórum Romeu Correia',
    'id': '639'
  },
  {
    'date': '10/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'Ironia linear',
    'group': 'Amélia Bentes',
    'venue': 'Teatro Taborda',
    'id': '640'
  },
  {
    'date': '21/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'O regresso do filho pródigo',
    'group': 'Béjart Ballet Lausanne',
    'venue': 'Coliseu dos Recreios',
    'id': '641'
  },
  {
    'date': '24/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'Canto de amor e morte',
    'group': 'Béjart Ballet Lausanne',
    'venue': 'Coliseu dos Recreios',
    'id': '642'
  },
  {
    'date': '27/10/1998',
    'medium': 'Correio da Manhã',
    'title': 'Sampaio condecora Béjart em Belém',
    'group': 'Homenagem a M. Béjart',
    'venue': 'Palácio de Belém',
    'id': '643'
  },
  {
    'date': '01/11/1998',
    'medium': 'Revista do CM',
    'title': 'Tempo de Nordeste...',
    'venue': 'Brasil',
    'id': '644'
  },
  {
    'date': '08/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança a concurso no Algarve',
    'group': 'I Conc. Inter. de D. do Alg',
    'venue': 'Portimão',
    'id': '645'
  },
  {
    'date': '13/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Nem sonho nem pesadelo',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '646'
  },
  {
    'date': '15/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Danças na penumbra',
    'group': 'Navas e Bill T. Jones',
    'venue': 'Culturgest',
    'id': '647'
  },
  {
    'date': '21/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Enigmas da dança e da vida',
    'group': 'Bill T. Jones',
    'venue': 'Culturgest',
    'id': '648'
  },
  {
    'date': '22/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Pombas e águias partilham palco',
    'group': 'Comp. de D. de Almada',
    'venue': 'Fórum Romeu Correia',
    'id': '649'
  },
  {
    'date': '26/11/1998',
    'medium': 'Correio da Manhã',
    'title': '"Casta Diva" na penumbra',
    'group': 'CêDêCê',
    'venue': 'CCB',
    'id': '650'
  },
  {
    'date': '29/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'Abstracção estrangeira',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '651'
  },
  {
    'date': '30/11/1998',
    'medium': 'Correio da Manhã',
    'title': 'A magia do centenário "Quebra-Nozes"',
    'group': 'Ballet de Novosibirsk',
    'venue': 'Coliseu dos Recreios',
    'id': '652'
  },
  {
    'date': '03/12/1998',
    'medium': 'Correio da Manhã',
    'title': 'Abraço recebe legado de Nuno Côrte-Real',
    'group': 'Nuno Côrte-Real',
    'venue': 'Lisboa',
    'id': '653'
  },
  {
    'date': '16/12/1998',
    'medium': 'Correio da Manhã',
    'title': 'Dança em quantidade',
    'venue': 'Teatro de S. Luiz',
    'id': '654'
  },
  {
    'date': '19/12/1998',
    'medium': 'Correio da Manhã',
    'title': 'Entre as raízes e a morte',
    'group': 'CêDêCê',
    'venue': 'ACARTE',
    'id': '655'
  },
  {
    'date': '20/12/1998',
    'medium': 'Correio da Manhã',
    'title': 'O circo dos desajeitados',
    'group': 'Abbondanza e Bertoni',
    'venue': 'CCB',
    'id': '656'
  },
  {
    'medium': 'Catálogo',
    'title': 'Galeria Municipal Gymnásio',
    'group': 'CNB: 20 anos em fotografias',
    'venue': 'Lisboa',
    'notes': '1998',
    'id': '657'
  },
  {
    'date': '10/01/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dança, circo e cinema em casamento exemplar',
    'group': 'Grupo de Philippe Decouflé',
    'venue': 'Culturgest',
    'id': '658'
  },
  {
    'date': '12/01/1999',
    'medium': 'Correio da Manhã',
    'title': 'City Ballet homenageia George Balanchine',
    'group': 'New York City Ballet',
    'venue': 'Nova Iorque',
    'id': '659'
  },
  {
    'date': '22/01/1999',
    'medium': 'Correio da Manhã',
    'title': 'Mozart empolga em cartografia de lugares cumuns',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '660'
  },
  {
    'date': '25/01/1999',
    'medium': 'Correio da Manhã',
    'title': 'Jogos de personalidade',
    'group': 'Jérome Bel',
    'venue': 'CCB',
    'id': '661'
  },
  {
    'date': '01/02/1999',
    'medium': 'Correio da Manhã',
    'title': 'O fascínio do celulóide',
    'group': 'Michel Kelemenis',
    'venue': 'Culturgest',
    'id': '662'
  },
  {
    'date': '02/02/1999',
    'medium': 'Correio da Manhã',
    'title': '"Gitanerías" de exportação',
    'group': 'Ballet Nacional de Espanha',
    'venue': 'CCB',
    'id': '663'
  },
  {
    'date': '08/02/1999',
    'medium': 'Correio da Manhã',
    'title': 'Os corpos diáfanos da fantasia',
    'group': 'Dana Reitz e Sara Rudner',
    'venue': 'Culturgest',
    'id': '664'
  },
  {
    'date': '22/02/1999',
    'medium': 'Correio da Manhã',
    'title': 'Maria João Pires no S. Luis com "As Nossas Crianças"',
    'group': 'Batoto Yetu e Maria J. P.',
    'venue': 'Teatro de S. Luiz',
    'id': '665'
  },
  {
    'date': '28/02/1999',
    'medium': 'Correio da Manhã',
    'title': 'Vigor e graça em percussão japonesa',
    'group': 'Grupo Matsurishu Taiko',
    'venue': 'CCB',
    'id': '666'
  },
  {
    'date': '13/03/1999',
    'medium': 'Correio da Manhã',
    'title': 'Em ritmo de rock e rap',
    'group': 'Batsheva Dance Company',
    'venue': 'CCB',
    'id': '667'
  },
  {
    'date': '23/04/1999',
    'medium': 'Correio da Manhã',
    'title': 'A magia do "Lago"',
    'group': 'Ballet Nacional de Cuba',
    'venue': 'Coliseu dos Recreios',
    'id': '668'
  },
  {
    'date': '29/04/1999',
    'medium': 'Correio da Manhã',
    'title': 'Mensagem "Urbi et Orbi"',
    'group': 'Dia Mundial da Dança',
    'id': '669'
  },
  {
    'date': '01/05/1999',
    'medium': 'África Notícias',
    'title': 'Batoto Yetu',
    'group': 'Batoto Yetu',
    'id': '670'
  },
  {
    'date': '12/05/1999',
    'medium': 'Correio da Manhã',
    'title': 'A Dança desce à rua',
    'group': 'Hip Hop',
    'venue': 'Lisboa',
    'id': '671'
  },
  {
    'date': '20/05/1999',
    'medium': 'Correio da Manhã',
    'title': 'Circo sem alma de palhaço',
    'group': 'Quetitleir-Que',
    'venue': 'CCB',
    'id': '672'
  },
  {
    'date': '21/05/1999',
    'medium': 'Correio da Manhã',
    'title': 'Embaixada da dança do Canadá',
    'group': 'La La La Human Steps',
    'venue': 'CCB',
    'id': '673'
  },
  {
    'date': '30/05/1999',
    'medium': 'Correio da Manhã',
    'title': '"Giselle"... para sempre',
    'group': 'Ballet Nacional de Cuba',
    'venue': 'Coliseu dos Recreios',
    'id': '674'
  },
  {
    'date': '20/06/1999',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco narcisista',
    'group': 'António Canales',
    'venue': 'CCB',
    'id': '675'
  },
  {
    'date': '21/06/1999',
    'medium': 'Correio da Manhã',
    'title': 'Ney confia no público e promete arrasar',
    'group': 'Entrevista com Ney Matogrosso',
    'venue': 'Coliseu dos Recreios',
    'id': '676'
  },
  {
    'date': '23/06/1999',
    'medium': 'Correio da Manhã',
    'title': 'Uma tradição que se renova',
    'group': 'Fest. de D. de Montpellier',
    'venue': 'França',
    'id': '677'
  },
  {
    'date': '27/06/1999',
    'medium': 'Correio da Manhã',
    'title': 'O feitiço de Balanchine',
    'group': 'Centro de Dança do Porto',
    'venue': 'Teatro Rivoli',
    'id': '678'
  },
  {
    'date': '09/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Tangos e Festa Brava',
    'group': 'Companhia de Dança do Tejo',
    'venue': 'Teatro Eunice Munõz',
    'id': '679'
  },
  {
    'date': '10/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Uma voz, uma alma, uma diva',
    'group': 'Milva e Daniel Binelli',
    'venue': 'CCB',
    'id': '680'
  },
  {
    'date': '12/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Milva: a voz cor de fogo',
    'group': 'Milva e Daniel Binelli',
    'venue': 'CCB',
    'id': '681'
  },
  {
    'date': '21/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Humor e poesia em movimento',
    'group': 'Cirque Plume',
    'venue': 'Parque das Nações',
    'id': '682'
  },
  {
    'date': '25/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Bailarinos atraentes, coreografia…nem tanto',
    'group': 'Ballet da Pensilvânia',
    'venue': 'Palácio de Seteais',
    'id': '683'
  },
  {
    'date': '28/07/1999',
    'medium': 'Correio da Manhã',
    'title': 'Jovens reencontram mestres estrangeiros',
    'group': 'XII Estágio Inter. de Dança',
    'venue': 'Ginásio Clube Português',
    'id': '684'
  },
  {
    'date': '09/08/1999',
    'medium': 'Correio da Manhã',
    'title': '"Magnífica e miraculosa"? Chamem-lhe apenas Ninochka',
    'group': 'Entrevista com Nina Ananiashvili',
    'venue': 'Nova Iorque',
    'id': '685'
  },
  {
    'date': '20/08/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dançar na floresta',
    'group': 'Batoto Yetu',
    'venue': 'Jacob"s Pilllow Festival',
    'id': '686'
  },
  {
    'date': '20/08/1999',
    'medium': 'Correio da Manhã',
    'title': 'Portugueses triunfam nos EUA',
    'group': 'Batoto Yetu',
    'venue': 'Lee Massachusetts',
    'id': '687'
  },
  {
    'date': '29/08/1999',
    'medium': 'Correio da Manhã',
    'title': 'Barbara Griggi e Rui Pinto no festival de San Pantaleo',
    'group': 'Festival de San Pantaleo',
    'venue': 'Itália',
    'id': '688'
  },
  {
    'date': '31/08/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dança de ouro na costa esmeralda',
    'group': 'Festival de San Pantaleo',
    'venue': 'Itália',
    'id': '689'
  },
  {
    'date': '10/09/1999',
    'medium': 'Correio da Manhã',
    'title': 'O eco do sonho e da água',
    'group': 'Sílvia Real',
    'venue': 'ACARTE',
    'id': '690'
  },
  {
    'date': '12/09/1999',
    'medium': 'Correio da Manhã',
    'title': 'Jogos adolescentes',
    'group': 'Companhia Instável',
    'venue': 'Teatro Viriato',
    'id': '691'
  },
  {
    'date': '19/09/1999',
    'medium': 'Correio da Manhã',
    'title': 'Mergulho no passado',
    'group': 'Acad. de D. Antiga de Lisb.',
    'venue': 'Palác. Marquês de Pombal',
    'id': '692'
  },
  {
    'date': '13/10/1999',
    'medium': 'Correio da Manhã',
    'title': 'Brasil enfeitiça franceses',
    'group': 'Grupo Corpo',
    'venue': 'Lyon',
    'id': '693'
  },
  {
    'date': '26/10/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dança de Alvin Ailey de regresso a Portugal',
    'group': 'Alvin Ailey American D. T.',
    'venue': 'CCB',
    'id': '694'
  },
  {
    'date': '28/10/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dança com espírito e raça',
    'group': 'Alvin Ailey American D. T.',
    'venue': 'CCB',
    'id': '695'
  },
  {
    'date': '12/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Ballet de Frankfurt no CCB',
    'group': 'Ballet de Frankfurt',
    'venue': 'CCB',
    'id': '696'
  },
  {
    'date': '12/11/1999',
    'medium': 'Correio da Manhã',
    'title': '"Clássico" de Kylián casa com obras de Naharim',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '697'
  },
  {
    'date': '14/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Rápido, actual, complexo e... seco',
    'group': 'Ballet de Frankfurt',
    'venue': 'CCB',
    'id': '698'
  },
  {
    'date': '14/11/1999',
    'medium': 'Correio da Manhã',
    'title': '"Cinderella" dança em Lisboa e no Porto',
    'group': 'Ballet do Kremlin',
    'venue': 'Coliseu de Lisboa e Porto',
    'id': '699'
  },
  {
    'date': '15/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo do sapateado irlandês',
    'group': 'The Lord of the Dance',
    'venue': 'Pavilhão Atlântico',
    'id': '700'
  },
  {
    'date': '20/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Danças exóticas no feminino',
    'group': 'Marie Chouinard',
    'venue': 'Culturgest',
    'id': '701'
  },
  {
    'date': '26/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Sapateado electrizante',
    'group': 'Tap Dogs',
    'venue': 'CCB',
    'id': '702'
  },
  {
    'date': '27/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Danças de limbo',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '703'
  },
  {
    'date': '28/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'A gata que veio do frio',
    'group': 'Ballet do Kremlin',
    'venue': 'Coliseu dos Recreios',
    'id': '704'
  },
  {
    'date': '28/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Yekaterina "Ballerina"',
    'group': 'Entrevista Yekatrina Maximova',
    'venue': 'Lisboa',
    'id': '705'
  },
  {
    'date': '30/11/1999',
    'medium': 'Correio da Manhã',
    'title': 'Trabalhos de solistas americanos',
    'group': 'Marcelo Gabriel e Steve Paxton',
    'venue': 'CCB',
    'id': '706'
  },
  {
    'date': '01/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Amores de espuma',
    'group': 'Ninho de Víboras',
    'venue': 'ACARTE',
    'id': '707'
  },
  {
    'date': '08/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Estrelas em Cannes',
    'group': 'XII Festival de Dança de Cannes',
    'venue': 'França',
    'id': '708'
  },
  {
    'date': '10/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Dança no feminino',
    'group': 'XII Festival de Dança de Cannes',
    'venue': 'França',
    'id': '709'
  },
  {
    'date': '11/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Criadores de sucesso',
    'group': 'XII Festival de Dança de Cannes',
    'venue': 'França',
    'id': '710'
  },
  {
    'date': '12/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Viva o Natal... abaixo o "Quebra-Nozes"',
    'group': 'A Torneira',
    'venue': 'CCB',
    'id': '711'
  },
  {
    'date': '19/12/1999',
    'medium': 'Correio da Manhã',
    'title': 'Batoto Yetu e amigos dançam e cantam por Timor',
    'group': 'Batoto Yetu',
    'venue': 'Aula Magna',
    'id': '712'
  },
  {
    'date': '09/01/2000',
    'medium': 'Correio da Manhã',
    'title': 'Aplaudir o encanto da estrela',
    'group': 'Mikhail Baryshnikov',
    'venue': 'CCB',
    'id': '713'
  },
  {
    'date': '15/01/2000',
    'medium': 'Correio da Manhã',
    'title': 'Homenagem ao malandro e à mulata',
    'group': 'Carlinhos da Jesus',
    'venue': 'Casino Estoril',
    'id': '714'
  },
  {
    'date': '21/01/2000',
    'medium': 'Correio da Manhã',
    'title': 'Memórias no feminino',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '715'
  },
  {
    'date': '26/01/2000',
    'medium': 'Correio da Manhã',
    'title': 'Danças de rua passam ao teatro',
    'group': 'Fest. Suresnes Cités Danse',
    'venue': 'Paris',
    'id': '716'
  },
  {
    'date': '27/01/2000',
    'medium': 'Correio da Manhã',
    'title': 'O jardim mágico de Montalvo',
    'group': 'Fest. Suresnes Cités Danse',
    'venue': 'Paris',
    'id': '717'
  },
  {
    'date': '16/02/2000',
    'medium': 'Correio da Manhã',
    'title': 'Dois americanos na Ópera de Lyon',
    'group': 'Trisha Brown e W. Forsythe',
    'venue': 'Lyon',
    'id': '718'
  },
  {
    'date': '17/02/2000',
    'medium': 'Correio da Manhã',
    'title': 'Kader Belardi dança Hip-Hop e coreografa Picasso',
    'group': 'Kader Belardi',
    'venue': 'Lyon',
    'id': '719'
  },
  {
    'date': '18/02/2000',
    'medium': 'Correio da Manhã',
    'title': 'A magia das histórias simples',
    'group': 'Slava',
    'venue': 'CCB',
    'id': '720'
  },
  {
    'date': '20/02/2000',
    'medium': 'Correio da Manhã',
    'title': 'Centro em Movimento abre as portas a 2000',
    'group': 'CEM',
    'venue': 'Lisboa',
    'id': '721'
  },
  {
    'date': '26/02/2000',
    'medium': 'Correio da Manhã',
    'title': 'O colorido e vivacidade das danças do Leste',
    'group': 'Ballet da Ucrânia',
    'venue': 'Coliseu dos Recreios',
    'id': '722'
  },
  {
    'date': '02/03/2000',
    'medium': 'Correio da Manhã',
    'title': 'A raça do tango eterno',
    'group': 'Forever Tango',
    'venue': 'CCB',
    'id': '723'
  },
  {
    'date': '11/03/2000',
    'medium': 'Correio da Manhã',
    'title': 'Aplausos mornos premeiam programa da "câmara"',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '724'
  },
  {
    'date': '18/03/2000',
    'medium': 'Correio da Manhã',
    'title': 'Alegria no gelo e nas bancadas',
    'group': 'Disney On Ice',
    'venue': 'Pavilhão Atlântico',
    'id': '725'
  },
  {
    'date': '23/03/2000',
    'medium': 'Correio da Manhã',
    'title': 'Três décadas de criatividade',
    'group': 'Trisha Brown',
    'venue': 'CCB',
    'id': '726'
  },
  {
    'date': '30/03/2000',
    'medium': 'Correio da Manhã',
    'title': 'Seis décadas de memórias',
    'group': 'Homenagem Margarida de Abreu',
    'venue': 'Teatro de S. Carlos',
    'id': '727'
  },
  {
    'date': '31/03/2000',
    'medium': 'Correio da Manhã',
    'title': '"Sinfonia" de coisas "improvisadas"',
    'group': '"Stomp"',
    'venue': 'CCB',
    'id': '728'
  },
  {
    'date': '06/04/2000',
    'medium': 'Catálogo',
    'title': 'Filhos do Vento - Exposição de Pintura',
    'group': 'Antonieta Janeiro',
    'venue': 'Galeria Municipal - VF Xira',
    'id': '729'
  },
  {
    'date': '06/04/2000',
    'medium': 'Correio da Manhã',
    'title': 'Estranhos traseuntes',
    'group': 'Comp. de D. da Pedra Sorridente',
    'venue': 'Culturgest',
    'id': '730'
  },
  {
    'date': '12/04/2000',
    'medium': 'Correio da Manhã',
    'title': 'Plumas e lantejoulas',
    'group': 'Lido de Paris',
    'venue': 'Coliseu dos Recreios',
    'id': '731'
  },
  {
    'date': '16/04/2000',
    'medium': 'Correio da Manhã',
    'title': 'Danças, melopeias e o rufar dos tambores',
    'group': 'Ea Sola',
    'venue': 'Culturgest',
    'id': '732'
  },
  {
    'date': '29/04/2000',
    'medium': 'Correio da Manhã',
    'title': 'Dia Mundial da Dança: mensagem tripla',
    'group': 'Dia Mundial da Dança',
    'id': '733'
  },
  {
    'date': '06/05/2000',
    'medium': 'Correio da Manhã',
    'title': 'CêDêCê dança Ismailian no Luísa Todi',
    'group': 'CêDêCê',
    'venue': 'Teatro Luísa Todi',
    'id': '734'
  },
  {
    'date': '12/05/2000',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco depurado',
    'group': 'Eva Garrido, La Yerbabuena',
    'venue': 'CCB',
    'id': '735'
  },
  {
    'date': '20/05/2000',
    'medium': 'Correio da Manhã',
    'title': 'Um "divo" do "taconeo"',
    'group': 'Comp. de Antonio Márquez',
    'venue': 'Coliseu dos Recreios',
    'id': '736'
  },
  {
    'date': '29/05/2000',
    'medium': 'Correio da Manhã',
    'title': 'Europa e américa "dançam" em Seteais',
    'group': 'Fest. de Música de Sintra',
    'venue': 'Palácio de Seteais',
    'id': '737'
  },
  {
    'date': '13/06/2000',
    'medium': 'Correio da Manhã',
    'title': 'Sílvia Nevjinsky ensina em Lisboa',
    'group': 'Sílvia Nevjinsky',
    'venue': 'Centro em Movimento',
    'id': '738'
  },
  {
    'date': '15/06/2000',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafo inglês trabalha com companhia portuguesa',
    'group': 'Comp. de Bailado Contemporâneo',
    'venue': 'CCB',
    'id': '739'
  },
  {
    'date': '16/06/2000',
    'medium': 'Correio da Manhã',
    'title': '"Terra Nova" em busca do Brasil',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '740'
  },
  {
    'date': '21/06/2000',
    'medium': 'Correio da Manhã',
    'title': 'Corpos quentes programa morno',
    'group': 'Bahia Ballet',
    'venue': 'Teatro Camões',
    'id': '741'
  },
  {
    'date': '28/06/2000',
    'medium': 'Correio da Manhã',
    'title': 'Minimalismo balético',
    'group': 'Companhia de Lucinda Childs',
    'venue': 'Montpellier (França)',
    'id': '742'
  },
  {
    'date': '14/07/2000',
    'medium': 'Correio da Manhã',
    'title': 'Tempo de magia e sonho',
    'group': '"Tempo"',
    'venue': 'Casino Estoril',
    'id': '743'
  },
  {
    'date': '15/07/2000',
    'medium': 'Correio da Manhã',
    'title': 'Ora bolas!',
    'group': 'Circo de Jérôme Thomas',
    'venue': 'CCB',
    'id': '744'
  },
  {
    'date': '23/07/2000',
    'medium': 'Correio da Manhã',
    'title': 'O fascínio da velha dança',
    'group': 'Ballet Nacional de Cuba',
    'venue': 'Palácio de Seteais',
    'id': '745'
  },
  {
    'date': '26/07/2000',
    'medium': 'Correio da Manhã',
    'title': '"Ballerina" relembra triunfo lisboeta',
    'group': 'Magdalena Popa',
    'venue': 'Ginásio Clube Português',
    'id': '746'
  },
  {
    'date': '06/08/2000',
    'medium': 'Correio da Manhã',
    'title': 'Danças do lado de baixo do Equador',
    'group': 'Ballet Argentino de Julio Bocca',
    'venue': 'Palácio de Seteais',
    'id': '747'
  },
  {
    'date': '03/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'O sorriso das borboletas',
    'group': 'Companhia de Paulo Ribeiro',
    'venue': 'CCB',
    'id': '748'
  },
  {
    'date': '10/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'Danças suaves e tambores vibrantes',
    'group': 'Bienal de Dança de Lyon',
    'venue': 'Lyon',
    'id': '749'
  },
  {
    'date': '12/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'Roupas de ouro  danças de cobre',
    'group': 'Companhia de Dança de Xangai',
    'venue': 'Lyon',
    'id': '750'
  },
  {
    'date': '13/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'Dança deliberadamente exibicionista',
    'group': 'Daniel Yeung',
    'venue': 'Lyon',
    'id': '751'
  },
  {
    'date': '16/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'As lágrimas da erosão',
    'group': 'Gru. de Jeantitlelaude Gallota',
    'venue': 'Lyon',
    'id': '752'
  },
  {
    'date': '17/09/2000',
    'medium': 'Correio da Manhã',
    'title': 'Que o sol ilumine os caminhos da seda',
    'group': 'Desfile da Bienal de Lyon',
    'venue': 'Lyon',
    'id': '753'
  },
  {
    'date': '01/10/2000',
    'medium': 'Correio da Manhã',
    'title': 'A alma do exibicionismo',
    'group': 'Joaquín Cortés',
    'venue': 'Coliseu dos Recreios',
    'id': '754'
  },
  {
    'date': '05/10/2000',
    'medium': 'Correio da Manhã',
    'title': 'Grupo de Rui Horta dança em Hannover',
    'group': 'Grupo de Rui Horta',
    'venue': 'Hannover',
    'id': '755'
  },
  {
    'date': '23/10/2000',
    'medium': 'Correio da Manhã',
    'title': 'Um jardim de delícias',
    'group': 'Comp.Montalvo-Hervieu',
    'venue': 'Culturgest',
    'id': '756'
  },
  {
    'date': '28/10/2000',
    'medium': 'Correio da Manhã',
    'title': 'Espírito de Bob Fosse paira sobre Lisboa',
    'group': 'Chicago',
    'venue': 'Coliseu dos Recreios',
    'id': '757'
  },
  {
    'date': '30/10/2000',
    'medium': 'Correio da Manhã',
    'title': 'Bailarinas assanhadas sobem as "pontas"',
    'group': 'Ballet Trockadero',
    'venue': 'CCB',
    'id': '758'
  },
  {
    'date': '10/11/2000',
    'medium': 'Correio da Manhã',
    'title': 'História fantasiada de lendária "ballerina"',
    'group': 'Boris Eifman',
    'venue': 'CCB',
    'id': '759'
  },
  {
    'date': '13/11/2000',
    'medium': 'Correio da Manhã',
    'title': 'Roda viva de bailarinos',
    'group': 'Companhia de Deborah Colker',
    'venue': 'CCB',
    'id': '760'
  },
  {
    'date': '16/11/2000',
    'medium': 'Correio da Manhã',
    'title': '"Petróleo" com pouca luz',
    'group': 'Filipa Francisco',
    'venue': 'Armazem do Ferrro - Lisboa',
    'id': '761'
  },
  {
    'date': '18/11/2000',
    'medium': 'Correio da Manhã',
    'title': 'O perigo teatral de Bruno Cochat',
    'group': 'Bruno Cochat',
    'venue': 'Teatro da Trindade',
    'id': '762'
  },
  {
    'date': '22/11/2000',
    'medium': 'Correio da Manhã',
    'title': 'A arte de confundir a arte',
    'group': 'Gilles Jobin',
    'venue': 'CCB',
    'id': '763'
  },
  {
    'date': '26/11/2000',
    'medium': 'Correio da Manhã',
    'title': 'Dança contemporânea em Loulé',
    'group': 'VI Fest. Int. de D. Cont.',
    'venue': 'Cine-Teatro Loletano',
    'id': '764'
  },
  {
    'date': '01/12/2000',
    'medium': 'Correio da Manhã',
    'title': 'A arte de fazer sonhar',
    'group': 'Circo Le Masque',
    'venue': 'CCB',
    'id': '765'
  },
  {
    'date': '16/12/2000',
    'medium': 'Correio da Manhã',
    'title': 'Rui Nunes na festa dos Óscares da Dança',
    'group': 'Monaco World Dance Awards',
    'venue': 'Mónaco',
    'id': '766'
  },
  {
    'date': '18/12/2000',
    'medium': 'Correio da Manhã',
    'title': 'Prémios Nijinsky entregues em gala de estrelas',
    'group': 'Monaco World Dance Awards',
    'venue': 'Mónaco',
    'id': '767'
  },
  {
    'date': '06/01/2001',
    'medium': 'Correio da Manhã',
    'title': 'Companhia de bailado sob chefia de holandês',
    'group': 'CNB',
    'id': '768'
  },
  {
    'date': '13/01/2001',
    'medium': 'Correio da Manhã',
    'title': 'Cisnes russos invadem Coliseu',
    'group': '"Lago" de Yuri Grigorovich',
    'venue': 'Coliseu dos Recreios',
    'id': '769'
  },
  {
    'date': '22/01/2001',
    'medium': 'Correio da Manhã',
    'title': 'O galo cantou só no fim…',
    'group': 'Susanne Linke',
    'venue': 'Culturgest',
    'id': '770'
  },
  {
    'date': '25/01/2001',
    'medium': 'Correio da Manhã',
    'title': 'A felicidade da partilha',
    'group': 'Olga Roriz',
    'venue': 'Teatro Sá de Miranda',
    'id': '771'
  },
  {
    'date': '26/01/2001',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo da diversidade',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '772'
  },
  {
    'date': '08/02/2001',
    'medium': 'Correio da Manhã',
    'title': 'O poder da mente sobre o espírito',
    'group': 'Monges de Shaolin',
    'venue': 'Aula Magna',
    'id': '773'
  },
  {
    'date': '09/02/2001',
    'medium': 'Correio da Manhã',
    'title': 'Bailarinos na aventura da coreografia',
    'group': 'CNB',
    'venue': 'Teatro D. Maria II',
    'id': '774'
  },
  {
    'date': '10/02/2001',
    'medium': 'Correio da Manhã',
    'title': 'A magia da musicalidade',
    'group': 'Companhia de Paulo Ribeiro',
    'venue': 'CCB',
    'id': '775'
  },
  {
    'date': '22/02/2001',
    'medium': 'Correio da Manhã',
    'title': 'A magia das imagens em movimento',
    'group': 'Momix',
    'venue': 'CCB',
    'id': '776'
  },
  {
    'date': '23/02/2001',
    'medium': 'Correio da Manhã',
    'title': 'Muita dança e pouca computação',
    'group': 'Companhia de Dança de Almada',
    'venue': 'Teatro Maria Matos',
    'id': '777'
  },
  {
    'date': '03/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'A eternidade da dança',
    'group': 'Companhia de Dança da Madeira',
    'venue': 'Teatro Baltazar Dias',
    'id': '778'
  },
  {
    'date': '08/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'Teatro e dança no Maria Matos',
    'group': 'Amélia Bentes',
    'venue': 'Teatro Maria Matos',
    'id': '779'
  },
  {
    'date': '11/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'Leis do acaso',
    'group': 'Claudia Dias',
    'venue': 'CCB',
    'id': '780'
  },
  {
    'date': '23/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'A bela "atormentada"',
    'group': 'Ballet Cullberg',
    'venue': 'CCB',
    'id': '781'
  },
  {
    'date': '26/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'Trivialidades "poéticas"',
    'group': 'Solos Francófonos',
    'venue': 'Culturgest',
    'id': '782'
  },
  {
    'date': '27/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'Danças e gestos',
    'group': 'Companhia de Dança de Almada',
    'venue': 'Forum Romeu Correia',
    'id': '783'
  },
  {
    'date': '28/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'Algarve inaugura centro das artes performativas',
    'group': 'CAPA',
    'venue': 'Faro',
    'id': '784'
  },
  {
    'date': '30/03/2001',
    'medium': 'Correio da Manhã',
    'title': 'A energia que vem do leste',
    'group': 'Ballet da Ucrânia',
    'venue': 'Coliseu dos Recreios',
    'id': '785'
  },
  {
    'date': '05/04/2001',
    'medium': 'Correio da Manhã',
    'title': 'A magia das formas em movimento',
    'group': 'Mummenshanz',
    'venue': 'CCB',
    'id': '786'
  },
  {
    'date': '29/04/2001',
    'medium': 'Correio da Manhã',
    'title': 'País dança no Dia Mundial',
    'group': 'Dia Mundial da Dança',
    'id': '787'
  },
  {
    'date': '29/04/2001',
    'medium': 'Correio da Manhã',
    'title': 'A arte de Terpsicore na cultura e na educação',
    'group': 'Dia Mundial da Dança',
    'id': '788'
  },
  {
    'date': '13/05/2001',
    'medium': 'Correio da Manhã',
    'title': 'Dança inglesa em estreia',
    'group': 'Comp.Port. de Bailado Cont',
    'venue': 'Teatro Tivoli',
    'id': '789'
  },
  {
    'date': '13/05/2001',
    'medium': 'Correio da Manhã',
    'title': 'Outono em Lisboa é sinónimo de qualidade',
    'id': '790'
  },
  {
    'date': '31/05/2001',
    'medium': 'Correio da Manhã',
    'title': '"Riverdance": o poder do sapateado',
    'group': 'Show Riverdance',
    'venue': 'Genebra',
    'id': '791'
  },
  {
    'date': '03/06/2001',
    'medium': 'Correio da Manhã',
    'title': 'O deslumbre da dança soviética',
    'group': 'Russian Theatre Ballet',
    'venue': 'Coliseus do Porto e de Lisboa',
    'id': '792'
  },
  {
    'date': '17/06/2001',
    'medium': 'Magazine Domingo',
    'title': 'Riverdance sobe aos céus em Lisboa',
    'group': 'Show Riverdance',
    'venue': 'Pavilhão Atlântico',
    'notes': 'fotos: Lord Snowdown',
    'id': '793'
  },
  {
    'date': '24/06/2001',
    'medium': 'Correio da Manhã',
    'title': 'Programa sem "rei nem roque"',
    'group': 'CNB',
    'venue': 'Teatro D. Maria II',
    'id': '794'
  },
  {
    'date': '12/07/2001',
    'medium': 'Algarve Hoje',
    'title': 'Uma Foto Exemplar',
    'id': '795'
  },
  {
    'date': '17/07/2001',
    'medium': 'Correio da Manhã',
    'title': 'Feios, porcos e neuróticos',
    'group': 'Alain Platel',
    'venue': 'CCB',
    'id': '796'
  },
  {
    'date': '20/07/2001',
    'medium': 'Correio da Manhã',
    'title': '"Cantata": uma bela novidade',
    'group': 'Ballet Gulbenkian',
    'venue': 'Fórum Luísa Todi',
    'id': '797'
  },
  {
    'date': '26/07/2001',
    'medium': 'Algarve Hoje',
    'title': 'Requiem Por Sasportes',
    'id': '798'
  },
  {
    'date': '27/07/2001',
    'medium': 'Correio da Manhã',
    'title': 'Sílvia Nevjinsky em Seteais',
    'group': 'Festival de Seteais',
    'venue': 'Palácio de Seteais',
    'id': '799'
  },
  {
    'date': '05/08/2001',
    'medium': 'Correio da Manhã',
    'title': 'Em nome da energia',
    'group': 'Monte/Brown Dance',
    'venue': 'Palácio de Seteais',
    'id': '800'
  },
  {
    'date': '05/08/2001',
    'medium': 'Correio da Manhã',
    'title': 'Morreu bailarina e coreógrafa Mónica Lapa',
    'group': 'Óbito de Mónica Lapa',
    'venue': 'Lisboa',
    'id': '801'
  },
  {
    'date': '09/08/2001',
    'medium': 'Algarve Hoje',
    'title': 'Carreras no "Teatro do Pó"',
    'id': '802'
  },
  {
    'date': '09/08/2001',
    'medium': 'Algarve Hoje',
    'title': 'Os Índios e... Guterres',
    'id': '803'
  },
  {
    'date': '26/08/2001',
    'medium': 'Correio da Manhã',
    'title': 'Entre Kylian e Béjart',
    'group': 'Aterballeto',
    'venue': 'Palácio de Seteais',
    'id': '804'
  },
  {
    'date': '02/09/2001',
    'medium': 'Correio da Manhã',
    'title': '"Sonho de Verão" fecha bailado em Seteais',
    'group': 'Ballet da Ópera do Reno',
    'venue': 'Palácio de Seteais',
    'id': '805'
  },
  {
    'date': '02/09/2001',
    'medium': 'Correio da Manhã',
    'title': 'Curso de dança em Algés',
    'group': 'Centro de Dança de Oeiras',
    'venue': 'Algés',
    'id': '806'
  },
  {
    'date': '10/09/2001',
    'medium': 'Correio da Manhã',
    'title': 'Para além da dança tradicional',
    'group': 'Aditi Mangaldas e Quarteto',
    'venue': 'CCB',
    'id': '807'
  },
  {
    'date': '13/09/2001',
    'medium': 'Algarve Hoje',
    'title': 'Um Verão Delicioso!',
    'id': '808'
  },
  {
    'date': '17/09/2001',
    'medium': 'Correio da Manhã',
    'title': 'Estrela da dança portuguesa morre em Lisboa',
    'group': 'Óbito de Isabel Santa-Rosa',
    'venue': 'Lisboa',
    'id': '809'
  },
  {
    'date': '24/09/2001',
    'medium': 'Correio da Manhã',
    'title': 'Dimensões ilusivas',
    'group': 'Bruno Listopad',
    'venue': 'CCB',
    'id': '810'
  },
  {
    'date': '27/09/2001',
    'medium': 'Algarve Hoje',
    'title': 'O Choro da Águia',
    'id': '811'
  },
  {
    'date': '28/09/2001',
    'medium': 'Correio da Manhã',
    'title': 'Companhia de Dança de Espanha estreia-se em Portugal',
    'group': 'Compañia Nacional de Danza',
    'venue': 'Coliseu dos Recreios',
    'id': '812'
  },
  {
    'date': '11/10/2001',
    'medium': 'Algarve Hoje',
    'title': 'Turista Acidental quase "Acidentado"',
    'id': '813'
  },
  {
    'date': '21/10/2001',
    'medium': 'Correio da Manhã',
    'title': 'A era do ( total ) vazio',
    'group': 'Tânia Carvalho',
    'venue': 'CCB',
    'id': '814'
  },
  {
    'date': '25/10/2001',
    'medium': 'Algarve Hoje',
    'title': 'Apagou-se no céu uma Estrela',
    'id': '815'
  },
  {
    'date': '27/10/2001',
    'medium': 'Correio da Manhã',
    'title': 'À sombra de Balanchine…',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '816'
  },
  {
    'date': '28/10/2001',
    'medium': 'Correio da Manhã',
    'title': 'Variedade e um toque de emoção',
    'group': 'Quinzena da Dança de Almada',
    'venue': 'Forum Romeu Correia',
    'id': '817'
  },
  {
    'date': '29/10/2001',
    'medium': 'Correio da Manhã',
    'title': 'O importante é a rosa',
    'group': 'Sofia Silva',
    'venue': 'Cine-Teatro S. Vicente - Paio Pires',
    'id': '818'
  },
  {
    'date': '30/10/2001',
    'medium': 'Correio da Manhã',
    'title': 'Jogos de ritmos sonoros',
    'group': 'Mayhumana',
    'venue': 'CCB',
    'id': '819'
  },
  {
    'date': '08/11/2001',
    'medium': 'Algarve Hoje',
    'title': 'Corvos Brancos',
    'id': '820'
  },
  {
    'date': '10/11/2001',
    'medium': 'Correio da Manhã',
    'title': 'A magia dos contos infantis',
    'group': 'Ballet de Cincinnati',
    'venue': 'CCB',
    'id': '821'
  },
  {
    'date': '20/11/2001',
    'medium': 'Correio da Manhã',
    'title': '"Gizelle"... num saco de compras',
    'group': 'Xavier Le Roy',
    'venue': 'CCB',
    'id': '822'
  },
  {
    'date': '22/11/2001',
    'medium': 'Algarve Hoje',
    'title': 'A Aventura da Arte de Rua',
    'id': '823'
  },
  {
    'date': '24/11/2001',
    'medium': 'Correio da Manhã',
    'title': 'Amores disfuncionais',
    'group': 'David Miguel',
    'venue': 'Espaço Ginjal - Cacilhas',
    'id': '824'
  },
  {
    'date': '26/11/2001',
    'medium': 'Correio da Manhã',
    'title': 'Ballet de Frankfurt: a luminosidade da dança de excelência',
    'group': 'Ballet de Frankfurt',
    'venue': 'CCB',
    'id': '825'
  },
  {
    'date': '28/11/2001',
    'medium': 'Correio da Manhã',
    'title': 'Sobversões pouco convincentes',
    'group': 'Silvia Real',
    'venue': 'CCB',
    'id': '826'
  },
  {
    'date': '02/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'Vincent Dunoyer: a vaidade do corpo projectado',
    'group': 'Vincent Dunoyer',
    'venue': 'CCB',
    'id': '827'
  },
  {
    'date': '04/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'Um sucesso chamado Duato',
    'group': 'Fest.de Dança',
    'venue': 'Cannes',
    'id': '828'
  },
  {
    'date': '05/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'Frederick Flamand: um "arquitecto" da modernidade',
    'group': 'Companhia de Charleroi',
    'venue': 'Cannes',
    'id': '829'
  },
  {
    'date': '06/12/2001',
    'medium': 'Algarve Hoje',
    'title': 'A Capacidade de Ser Verdadeiro',
    'id': '830'
  },
  {
    'date': '06/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'Jogos de atracção',
    'group': 'Comp.de Stephen Petronio',
    'venue': 'Cannes',
    'id': '831'
  },
  {
    'date': '07/12/2001',
    'medium': 'Correio da Manhã',
    'title': '"Vírus Ohad" contagia mas não destrói',
    'group': 'Batsheva Dance Company',
    'venue': 'Cannes',
    'id': '832'
  },
  {
    'date': '08/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'A descoberta do outro',
    'group': 'Grupo de Kelemenis',
    'venue': 'Cannes',
    'id': '833'
  },
  {
    'date': '09/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'A genialidade de Josef Nadj',
    'group': 'Josef Nadj',
    'venue': 'Cannes',
    'id': '834'
  },
  {
    'date': '20/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'A alegre luminosidade de "Zin!"',
    'group': 'Comp.Port. de Bailado Cont',
    'venue': 'Teatro de S. Luiz',
    'id': '835'
  },
  {
    'date': '23/12/2001',
    'medium': 'Correio da Manhã',
    'title': 'O eterno drama amoroso',
    'group': 'CNB',
    'venue': 'CCB',
    'id': '836'
  },
  {
    'date': '13/01/2002',
    'medium': 'Correio da Manhã',
    'title': 'A nostalgia dos contos do passado',
    'group': 'B.da Ópera de Novosibirsk',
    'venue': 'Coliseu dos Recreios',
    'id': '837'
  },
  {
    'date': '17/01/2002',
    'medium': 'Algarve Hoje',
    'title': 'A Inauguração',
    'id': '838'
  },
  {
    'date': '26/01/2002',
    'medium': 'Correio da Manhã',
    'title': 'Tripla desilusão em noite de estreia',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '839'
  },
  {
    'date': '31/01/2002',
    'medium': 'Algarve Hoje',
    'title': 'Natal dos Simples…',
    'id': '840'
  },
  {
    'date': '02/02/2002',
    'medium': 'Correio da Manhã',
    'title': 'Soltar todos os fantasmas',
    'group': 'Olga Roriz',
    'venue': 'CCB',
    'id': '841'
  },
  {
    'date': '04/02/2002',
    'medium': 'Correio da Manhã',
    'title': 'A felicidade do momento',
    'group': 'Ana Rita Batata',
    'venue': 'Fórum Romeu Correia',
    'id': '842'
  },
  {
    'date': '14/02/2002',
    'medium': 'Algarve Hoje',
    'title': 'Soltar Todos os Fantasmas',
    'id': '843'
  },
  {
    'date': '19/02/2002',
    'medium': 'Correio da Manhã',
    'title': 'Um português no "Trockadero"',
    'group': 'Edgar Cortes',
    'venue': 'CCB',
    'id': '844'
  },
  {
    'date': '21/02/2002',
    'medium': 'Correio da Manhã',
    'title': 'Carnaval com atraso',
    'group': 'Ballet Trockadero',
    'venue': 'CCB',
    'id': '845'
  },
  {
    'date': '28/02/2002',
    'medium': 'Algarve Hoje',
    'title': 'A Dor da Morte e o Humor da Vida',
    'id': '846'
  },
  {
    'date': '03/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'O requinte do gesto',
    'group': 'Grupo Mekar Swari',
    'venue': 'CCB',
    'id': '847'
  },
  {
    'date': '05/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'Austeridade e monotonia',
    'group': 'Dança do Tadjiquistão',
    'venue': 'CCB',
    'id': '848'
  },
  {
    'date': '08/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'Amalgama leva "V.I.T.R.I.O.L." à Ericeira',
    'group': 'Grupo Amalgama',
    'venue': 'Casa da Cul. Jaime Lobo Silva',
    'id': '849'
  },
  {
    'date': '14/03/2002',
    'medium': 'Algarve Hoje',
    'title': 'Um País de Vírgulas',
    'id': '850'
  },
  {
    'date': '14/03/2002',
    'medium': 'Correio da Manhã',
    'title': '"25 Anos" de dança em tons de rosa',
    'group': 'CNB',
    'venue': 'Lisboa',
    'id': '851'
  },
  {
    'date': '15/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo dos sentimentos',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '852'
  },
  {
    'date': '16/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'A luminosa noite de Grilo',
    'group': 'Joaquín Grilo',
    'venue': 'Coliseu dos Recreios',
    'id': '853'
  },
  {
    'date': '25/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'Animais de palco',
    'group': 'Marie Chouinard',
    'venue': 'Culturgest',
    'id': '854'
  },
  {
    'date': '28/03/2002',
    'medium': 'Algarve Hoje',
    'title': '"FF" Alimenta a "PP"',
    'id': '855'
  },
  {
    'date': '28/03/2002',
    'medium': 'Correio da Manhã',
    'title': 'O fecho do "ciclo" alemão',
    'group': 'Rui Horta',
    'venue': 'Teatro Maria Matos',
    'id': '856'
  },
  {
    'date': '11/04/2002',
    'medium': 'Algarve Hoje',
    'title': 'Os Mistérios da Rainha',
    'id': '857'
  },
  {
    'date': '25/04/2002',
    'medium': 'Algarve Hoje',
    'title': 'Danças sem Palcos',
    'id': '858'
  },
  {
    'date': '27/04/2002',
    'medium': 'Correio da Manhã',
    'title': 'Bailarinos portugueses dançam no Festival de Riga',
    'group': 'Cláudia Martins e Rafael Carriço',
    'venue': 'Letónia',
    'id': '859'
  },
  {
    'date': '28/04/2002',
    'medium': 'Correio da Manhã',
    'title': 'Dança para todos',
    'group': 'Centro de Dança de Oeiras',
    'venue': 'Aud. Mun. Eunice Muñoz',
    'id': '860'
  },
  {
    'date': '29/04/2002',
    'medium': 'Correio da Manhã',
    'title': 'Dia Mundial sem brilho',
    'group': 'Dia Mundial da Dança',
    'id': '861'
  },
  {
    'date': '29/04/2002',
    'medium': 'Correio da Manhã',
    'title': 'Défice de espectáculos',
    'group': 'Dia Mundial da Dança',
    'id': '862'
  },
  {
    'date': '05/05/2002',
    'medium': 'Correio da Manhã',
    'title': 'Veloz como o desejo',
    'group': 'Companhia de Dança de Almada',
    'venue': 'Forum Romeu Correia',
    'id': '863'
  },
  {
    'date': '09/05/2002',
    'medium': 'Algarve Hoje',
    'title': 'Depois da Dança... Vamos à Música',
    'id': '864'
  },
  {
    'date': '19/05/2002',
    'medium': 'Correio da Manhã',
    'title': '"Giselle" modernizada',
    'group': 'CNB',
    'venue': 'Teatro de S. Carlos',
    'id': '865'
  },
  {
    'date': '23/05/2002',
    'medium': 'Algarve Hoje',
    'title': 'Maldita Televisão',
    'id': '866'
  },
  {
    'date': '26/05/2002',
    'medium': 'Correio da Manhã',
    'title': 'Virtuosismo difícil de igualar',
    'group': 'Ballet Nacional da Holanda',
    'venue': 'CCB',
    'id': '867'
  },
  {
    'date': '04/06/2002',
    'medium': 'Correio da Manhã',
    'title': 'Os lugares reais e urbanos do nosso quotidiano',
    'group': 'Dança em Paisagens Urbanas',
    'venue': 'Baixa e CCB',
    'id': '868'
  },
  {
    'date': '04/06/2002',
    'medium': 'Correio da Manhã',
    'title': '"É bom viver no palco aquilo que não é real"',
    'group': 'Entrevista a Ana Lacerda',
    'venue': 'Lisboa',
    'id': '869'
  },
  {
    'date': '13/06/2002',
    'medium': 'Algarve Hoje',
    'title': 'Bem-Vinda Espanha!',
    'id': '870'
  },
  {
    'date': '19/06/2002',
    'medium': 'Correio da Manhã',
    'title': 'Fernando Pessoa dançado na Finlândia',
    'group': 'Jorma Uotinen',
    'venue': 'Festival de Kuopio',
    'id': '871'
  },
  {
    'date': '24/06/2002',
    'medium': 'Correio da Manhã',
    'title': 'Programa de Catálogo',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '872'
  },
  {
    'date': '26/06/2002',
    'medium': 'Correio da Manhã',
    'title': 'Ballet Preljocaj menos genial',
    'group': 'Helicóptero e Sagração',
    'venue': 'Festival de Kuopio',
    'id': '873'
  },
  {
    'date': '04/07/2002',
    'medium': 'Algarve Hoje',
    'title': 'Futebol, sim...Alucinação já temos que chegue',
    'id': '874'
  },
  {
    'date': '18/07/2002',
    'medium': 'Algarve Hoje',
    'title': 'Arte ou Barbárie?',
    'id': '875'
  },
  {
    'date': '21/07/2002',
    'medium': 'Correio da Manhã',
    'title': 'Dançar com aprumo',
    'group': 'Ballet da Ópera de Novosibirsk',
    'venue': 'Cent. Cult. Olga de Cadaval',
    'id': '876'
  },
  {
    'date': '01/08/2002',
    'medium': 'Algarve Hoje',
    'title': 'Não há "Silly Seasons" mas "Silly People"',
    'id': '877'
  },
  {
    'date': '05/09/2002',
    'medium': 'Algarve Hoje',
    'title': 'Notas de fim de Verão',
    'id': '878'
  },
  {
    'date': '12/09/2002',
    'medium': 'Correio da Manhã',
    'title': 'Festa latinodatemericana',
    'group': 'X Bienal de D. de Lyon',
    'venue': 'França',
    'id': '879'
  },
  {
    'date': '16/09/2002',
    'medium': 'Correio da Manhã',
    'title': 'Febre do Carnaval ao rubro em Lyon',
    'group': 'X Bienal de D. de Lyon',
    'venue': 'França',
    'id': '880'
  },
  {
    'date': '17/09/2002',
    'medium': 'Correio da Manhã',
    'title': 'Energia e colorido do país do samba',
    'group': 'Balé de Rua',
    'venue': 'França',
    'id': '881'
  },
  {
    'date': '19/09/2002',
    'medium': 'Algarve Hoje',
    'title': 'Voltar ao Lugar do Crime...',
    'id': '882'
  },
  {
    'date': '19/09/2002',
    'medium': 'Correio da Manhã',
    'title': 'A festa saiu às ruas de Lyon',
    'group': 'Grande Desfile da Bienal',
    'venue': 'França',
    'id': '883'
  },
  {
    'date': '30/09/2002',
    'medium': 'Correio da Manhã',
    'title': 'A leveza do "não-espectáculo" no CCB',
    'group': 'Tiago Guedes',
    'venue': 'CCB',
    'id': '884'
  },
  {
    'date': '01/10/2002',
    'medium': 'Correio da Manhã',
    'title': 'O lago dos macacos…humanos',
    'group': 'Les Ballets C. De La B.',
    'venue': 'CCB',
    'id': '885'
  },
  {
    'date': '03/10/2002',
    'medium': 'Algarve Hoje',
    'title': 'Aqui a Arte conta!',
    'id': '886'
  },
  {
    'date': '23/10/2002',
    'medium': 'Correio da Manhã',
    'title': 'O circo na cidade',
    'group': 'Colectivo AOC',
    'venue': 'Culturgest',
    'id': '887'
  },
  {
    'date': '02/11/2002',
    'medium': 'Correio da Manhã',
    'title': 'Sentimentalismo e exaltação',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '888'
  },
  {
    'date': '14/11/2002',
    'medium': 'Algarve Hoje',
    'title': 'Encantos do Norte da Europa: Vasa e Kiasma',
    'id': '889'
  },
  {
    'date': '17/11/2002',
    'medium': 'Correio da Manhã',
    'title': 'Memórias alheias',
    'group': 'Rui Horta',
    'venue': 'CCB',
    'id': '890'
  },
  {
    'date': '28/11/2002',
    'medium': 'Algarve Hoje',
    'title': 'A Multa-I',
    'id': '891'
  },
  {
    'date': '28/11/2002',
    'medium': 'Correio da Manhã',
    'title': 'A magia do sucesso',
    'group': 'Stomp',
    'venue': 'CCB',
    'id': '892'
  },
  {
    'date': '10/12/2002',
    'medium': 'Correio da Manhã',
    'title': 'Dança com alto nível de energia',
    'group': 'CêDêCê',
    'venue': 'Teatro Luísa Todi',
    'id': '893'
  },
  {
    'date': '12/12/2002',
    'medium': 'Algarve Hoje',
    'title': 'A Multa-II',
    'id': '894'
  },
  {
    'date': '18/12/2002',
    'medium': 'Correio da Manhã',
    'title': 'A energia da dança no Natal',
    'group': 'Comp. Port. de B. Cont.',
    'venue': 'Teatro de S. Luiz',
    'id': '895'
  },
  {
    'date': '26/12/2002',
    'medium': 'Algarve Hoje',
    'title': 'Mas que Linda Senhora!',
    'id': '896'
  },
  {
    'date': '11/01/2003',
    'medium': 'Correio da Manhã',
    'title': 'Uma "água" brilhante',
    'group': 'Pina Bausch',
    'venue': 'CCB',
    'id': '897'
  },
  {
    'date': '16/01/2003',
    'medium': 'Algarve Hoje',
    'title': '"Água" corre do Wupper para o Tejo',
    'id': '898'
  },
  {
    'date': '23/01/2003',
    'medium': 'Correio da Manhã',
    'title': 'Fado cruzado com o flamenco e a dança contemporânea',
    'group': 'Amálgama',
    'venue': 'Casa de Fados Taberna E.',
    'id': '899'
  },
  {
    'date': '30/01/2003',
    'medium': 'Algarve Hoje',
    'title': 'Balanços e (Des)equilíbrios',
    'id': '900'
  },
  {
    'date': '01/02/2003',
    'medium': 'Correio da Manhã',
    'title': '"Salero" a menos',
    'group': 'Ballet Nacional de Espanha',
    'venue': 'CCB',
    'id': '901'
  },
  {
    'date': '23/02/2003',
    'medium': 'Correio da Manhã',
    'title': 'Quando a dança cruza culturas',
    'group': 'José Montalvo e D. Hervieu',
    'venue': 'Culturgest',
    'id': '902'
  },
  {
    'date': '08/03/2003',
    'medium': 'Correio da Manhã',
    'title': 'Leiria dança em festival',
    'group': 'Fest. "Dança em Leiria"',
    'venue': 'Auditório do Orfeão - Leiria',
    'id': '903'
  },
  {
    'date': '13/03/2003',
    'medium': 'Algarve Hoje',
    'title': 'Estrelas e Estrelinhas!',
    'id': '904'
  },
  {
    'date': '15/03/2003',
    'medium': 'Correio da Manhã',
    'title': 'Zensacional Oriente',
    'group': 'Comp. Nac.de Circo da China',
    'venue': 'Passeio Marítimo de Algés',
    'id': '905'
  },
  {
    'date': '27/03/2003',
    'medium': 'Algarve Hoje',
    'title': 'Equívocos Virtuais',
    'id': '906'
  },
  {
    'date': '30/03/2003',
    'medium': 'Correio da Manhã',
    'title': 'CNB à "la Turka"',
    'group': 'CNB',
    'venue': 'Teatro de Camões',
    'id': '907'
  },
  {
    'date': '04/04/2003',
    'medium': 'Correio da Manhã',
    'title': 'Uma dança deliciosa',
    'group': 'Dominique Boivin',
    'venue': 'CCB',
    'id': '908'
  },
  {
    'date': '10/04/2003',
    'medium': 'Algarve Hoje',
    'title': 'Ver o Circo Pegar Fogo!',
    'id': '909'
  },
  {
    'date': '10/04/2003',
    'medium': 'Correio da Manhã',
    'title': 'O talento dos dobra-pilas',
    'group': 'David Friend e Lincoln Davies',
    'venue': 'Teatro Tivoli',
    'id': '910'
  },
  {
    'date': '13/04/2003',
    'medium': 'Correio da Manhã',
    'title': 'Três matronas à moda do Porto',
    'group': 'As Madamas do Bolhão',
    'venue': 'Teatro Maria Matos',
    'id': '911'
  },
  {
    'date': '24/04/2003',
    'medium': 'Algarve Hoje',
    'title': 'A Estrada e a Escola...',
    'id': '912'
  },
  {
    'date': '27/04/2003',
    'medium': 'Correio da Manhã',
    'title': 'Exímio sapateador',
    'group': 'Joaquin Cortés',
    'venue': 'Pavilhão Atlântico',
    'id': '913'
  },
  {
    'date': '29/04/2003',
    'medium': 'Correio da Manhã',
    'title': 'Cá se vai dançando...',
    'group': 'Dia Mundial da Dança',
    'id': '914'
  },
  {
    'date': '06/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'O ritmo da dança irlandesa',
    'group': 'O Ritmo da Dança',
    'venue': 'Casino Estoril',
    'id': '915'
  },
  {
    'date': '10/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Amálgama dança "Arcana"',
    'group': 'Amálgama',
    'venue': 'Hotel Convento de S. Paulo',
    'id': '916'
  },
  {
    'date': '11/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Corpos maravilhosos',
    'group': 'Grupo Corpo',
    'venue': 'Teatro S.Luiz',
    'id': '917'
  },
  {
    'date': '15/05/2003',
    'medium': 'Algarve Hoje',
    'title': 'Nome de Rua',
    'id': '918'
  },
  {
    'date': '18/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Exelente "Polaroid" no Teatro Rivoli',
    'group': 'Clara Andermatt',
    'venue': 'Teatro Rivoli',
    'id': '919'
  },
  {
    'date': '19/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Um coreógrafo de primeira',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '920'
  },
  {
    'date': '23/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Muitos cisnes pouco lago',
    'group': 'Ballet Cullberg',
    'venue': 'CCB',
    'id': '921'
  },
  {
    'date': '29/05/2003',
    'medium': 'Algarve Hoje',
    'title': 'Um Oásis Abençoado (com nome de santo)',
    'id': '922'
  },
  {
    'date': '31/05/2003',
    'medium': 'Correio da Manhã',
    'title': 'Olga Roriz "salta" em Cabo Verde',
    'group': 'Comp. de Olga Roriz',
    'venue': 'Fest. Clássico da UCCLA',
    'id': '923'
  },
  {
    'date': '12/06/2003',
    'medium': 'Algarve Hoje',
    'title': 'Esperanças e Utopias',
    'id': '924'
  },
  {
    'date': '18/06/2003',
    'medium': 'Correio da Manhã',
    'title': 'Dança "Valsa Lenta 03" estreia-se em Coimbra',
    'group': 'José Laginha',
    'venue': 'Teatro Académico Gil Vicente',
    'id': '925'
  },
  {
    'date': '26/06/2003',
    'medium': 'Algarve Hoje',
    'title': 'Senhor Presidente...Tenha dó!',
    'id': '926'
  },
  {
    'date': '01/07/2003',
    'medium': 'Correio da Manhã',
    'title': 'Olga Roriz mostra amores de "Pedro e Inês"',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '927'
  },
  {
    'date': '10/07/2003',
    'medium': 'Algarve Hoje',
    'title': 'Revistas e "Revisteiros"',
    'id': '928'
  },
  {
    'date': '24/07/2003',
    'medium': 'Algarve Hoje',
    'title': '"Vergonha"... Disseram Eles!',
    'id': '929'
  },
  {
    'date': '22/08/2003',
    'medium': 'Correio da Manhã',
    'title': '"Maré de Agosto" sobe à ilha de St.ª Maria',
    'group': 'Fest. "Maré de Agosto"',
    'venue': 'Praia Formosa (Açores)',
    'id': '930'
  },
  {
    'date': '24/09/2003',
    'medium': 'Correio da Manhã',
    'title': 'Marília Pêra deslumbra Lisboa',
    'group': 'Marília Pêra',
    'venue': 'CCB',
    'id': '931'
  },
  {
    'date': '28/09/2003',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco de fusão',
    'group': 'Ánjel Rojas e Carlos Rodríguez',
    'venue': 'Coliseu dos Recreios',
    'id': '932'
  },
  {
    'date': '09/10/2003',
    'medium': 'Correio da Manhã',
    'title': 'Slava mágico, hipnótico e belo',
    'group': 'Slava',
    'venue': 'CCB',
    'id': '933'
  },
  {
    'date': '13/10/2003',
    'medium': 'Correio da Manhã',
    'title': '"Mutações" em antigo convento',
    'group': 'Amálgama',
    'venue': 'Hotel Convento de S. Paulo',
    'id': '934'
  },
  {
    'date': '21/10/2003',
    'medium': 'Correio da Manhã',
    'title': 'Do musical à alta costura, sem brilho nem invenção',
    'group': 'André Murraças e Inês Jacques',
    'venue': 'CCB',
    'id': '935'
  },
  {
    'date': '09/11/2003',
    'medium': 'Correio da Manhã',
    'title': 'Estreia auspiciosa',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '936'
  },
  {
    'date': '13/11/2003',
    'medium': 'Correio da Manhã',
    'title': 'A singular fantasia do "Quebra-Nozes"',
    'group': 'B. no Gelo de S. Petersburgo',
    'venue': 'Coliseu dos Recreios',
    'id': '937'
  },
  {
    'date': '26/11/2003',
    'medium': 'Correio da Manhã',
    'title': 'Sedução e morte',
    'group': 'Ballet Flamenco de Madrid',
    'venue': 'Coliseu dos Recreios',
    'id': '938'
  },
  {
    'date': '28/11/2003',
    'medium': 'Correio da Manhã',
    'title': 'Sylvie Guillem e Ópera de Lyon em Cannes',
    'group': 'Ballet da Ópera de Lyon',
    'venue': 'França',
    'id': '939'
  },
  {
    'date': '07/12/2003',
    'medium': 'Correio da Manhã',
    'title': 'Obras de gabarito para todos os gostos',
    'group': 'Festival de Dança de Cannes',
    'venue': 'França',
    'id': '940'
  },
  {
    'date': '12/12/2003',
    'medium': 'Correio da Manhã',
    'title': 'O belo flamenco de Sara Baras',
    'group': 'B. Flamenco de Sara Baras',
    'venue': 'Teatro de S. Luiz',
    'id': '941'
  },
  {
    'date': '19/12/2003',
    'medium': 'Correio da Manhã',
    'title': 'Dança partilhada na Culturgest',
    'group': 'Amálgama',
    'venue': 'Culturgest',
    'id': '942'
  },
  {
    'date': '20/12/2003',
    'medium': 'Correio da Manhã',
    'title': 'CNB reinventa velho "Quebra-Nozes"',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '943'
  },
  {
    'date': '20/12/2003',
    'medium': 'Correio da Manhã',
    'title': '"Quebra-Nozes" no Teatro Camões',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '944'
  },
  {
    'date': '17/01/2004',
    'medium': 'Correio da Manhã',
    'title': 'Bela "florida" mas exaltante',
    'group': 'Ballet da Ópera de Kazan',
    'venue': 'Coliseu dos Recreios',
    'id': '945'
  },
  {
    'date': '22/01/2004',
    'medium': 'Correio da Manhã',
    'title': 'O espantoso "Woyzeck"',
    'group': 'Josef Nadj',
    'venue': 'CCB',
    'id': '946'
  },
  {
    'date': '24/01/2004',
    'medium': 'Correio da Manhã',
    'title': 'Prazer de dançar e de ver dançar',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '947'
  },
  {
    'date': '25/01/2004',
    'medium': 'Correio da Manhã',
    'title': 'A arte de ser alentejano em terra alheia',
    'group': 'Ronda dos Quatro Caminhos',
    'venue': 'CCB',
    'id': '948'
  },
  {
    'date': '29/01/2004',
    'medium': 'Correio da Manhã',
    'title': 'A vanguarda "ribeirinha"',
    'group': '2º Fest. W.A.Y.',
    'venue': 'Discoteca Lux',
    'id': '949'
  },
  {
    'date': '01/02/2004',
    'medium': 'Correio da Manhã',
    'title': 'A força dos ritmos',
    'group': '"Gumboots"',
    'venue': 'Paris',
    'id': '950'
  },
  {
    'date': '11/02/2004',
    'medium': 'Correio da Manhã',
    'title': 'Musical "Gumboots" estreia-se no CCB',
    'group': '"Gumboots"',
    'venue': 'CCB',
    'id': '951'
  },
  {
    'date': '13/02/2004',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo do ritmo de "Gumboots"',
    'group': '"Gumboots"',
    'venue': 'CCB',
    'id': '952'
  },
  {
    'date': '15/02/2004',
    'medium': 'Correio da Manhã',
    'title': 'O Exotismo do "Taiko"',
    'group': 'Japão Kodo',
    'venue': 'Coliseu dos Recreios',
    'id': '953'
  },
  {
    'date': '06/03/2004',
    'medium': 'Correio da Manhã',
    'title': 'Cem anos de feitiço',
    'group': '"Disney no Gelo"',
    'venue': 'Pavilhão Atlântico',
    'id': '954'
  },
  {
    'date': '14/03/2004',
    'medium': 'Correio da Manhã',
    'title': 'Tango em tom de jazz',
    'group': 'Artango',
    'venue': 'Coliseu dos Recreios',
    'id': '955'
  },
  {
    'date': '23/03/2004',
    'medium': 'Jornal de Oeiras',
    'title': 'Danças na "linha"',
    'venue': 'Algés',
    'id': '956'
  },
  {
    'date': '26/03/2004',
    'medium': 'Correio da Manhã',
    'title': 'Armas, flores e feitos extraordinários',
    'group': 'Monges Shaolin',
    'venue': 'CCB',
    'id': '957'
  },
  {
    'date': '27/03/2004',
    'medium': 'Correio da Manhã',
    'title': '"Cisne" modesto aplaudido de pé',
    'group': 'Ballet da Ópera de Rostov',
    'venue': 'Coliseu dos Recreios',
    'id': '958'
  },
  {
    'date': '28/03/2004',
    'medium': 'Correio da Manhã',
    'title': 'Emoção e estrelas no Casino',
    'group': 'Roberto Carlos',
    'venue': 'Casino Estoril',
    'id': '959'
  },
  {
    'date': '04/04/2004',
    'medium': 'Correio da Manhã',
    'title': 'Rotina neoclássica',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '960'
  },
  {
    'date': '16/04/2004',
    'medium': 'Correio da Manhã',
    'title': 'O rufar hipnotizante dos tambores nipónicos',
    'group': 'Yamato',
    'venue': 'CCB',
    'id': '961'
  },
  {
    'date': '16/04/2004',
    'medium': 'Correio da Manhã',
    'title': 'Dançar a vida e a morte de Inês de Castro',
    'group': 'Lídia Martinez',
    'venue': 'Espaço "Abril em Maio"',
    'id': '962'
  },
  {
    'date': '18/04/2004',
    'medium': 'Correio da Manhã',
    'title': 'Alma africana',
    'group': 'Danças na Cidade',
    'venue': 'Culturgest',
    'id': '963'
  },
  {
    'date': '02/05/2004',
    'medium': 'Correio da Manhã',
    'title': 'Um Béjart nostálgico',
    'group': 'Ballet Béjart Lausanne',
    'venue': 'Coliseu dos Recreios',
    'id': '964'
  },
  {
    'date': '04/05/2004',
    'medium': 'Correio da Manhã',
    'title': 'Uma gala animada',
    'group': 'Gala de Bailado',
    'venue': 'Teatro Camões',
    'id': '965'
  },
  {
    'date': '12/05/2004',
    'medium': 'Correio da Manhã',
    'title': '"Tenho tido muito sucesso"',
    'group': 'Entrevista com Joaquin Cortés',
    'venue': 'Lisboa',
    'id': '966'
  },
  {
    'date': '14/05/2004',
    'medium': 'Correio da Manhã',
    'title': 'Cortés... mas pouco',
    'group': 'De Amor e Ódio',
    'venue': 'Coliseu dos Recreios',
    'id': '967'
  },
  {
    'date': '15/05/2004',
    'medium': 'Correio da Manhã',
    'title': 'Um solo monótono',
    'group': 'João Fiadeiro',
    'venue': 'CCB',
    'id': '968'
  },
  {
    'date': '19/06/2004',
    'medium': 'Correio da Manhã',
    'title': 'Shakespeare em versão "quatro em um"',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '969'
  },
  {
    'date': '20/06/2004',
    'medium': 'Correio da Manhã',
    'title': 'Uma "fé" a toda a prova',
    'group': 'Les Ballets C.de la B.',
    'venue': 'CCB',
    'id': '970'
  },
  {
    'date': '26/06/2004',
    'medium': 'Correio da Manhã',
    'title': 'Dança contemporânea em Algés',
    'group': 'Almágama e Cª de Sintra',
    'venue': 'Palácio Ribamar',
    'id': '971'
  },
  {
    'date': '27/06/2004',
    'medium': 'Correio da Manhã',
    'title': 'Festival com pouca raça',
    'group': 'Grupo Raça',
    'venue': 'Centro Olga do Cadaval',
    'id': '972'
  },
  {
    'date': '01/07/2004',
    'medium': 'Correio da Manhã',
    'title': 'Garra e sensualidade à moda da Broadway',
    'group': 'Tango Pasión',
    'venue': 'CCB',
    'id': '973'
  },
  {
    'date': '09/07/2004',
    'medium': 'Correio da Manhã',
    'title': 'Sua Exª a roqueira',
    'group': 'Rita Lee',
    'venue': 'Coliseu dos Recreios',
    'id': '974'
  },
  {
    'date': '10/07/2004',
    'medium': 'Correio da Manhã',
    'title': '"Suave" pesadelo',
    'group': 'A Brisa da Vida',
    'venue': 'Teatro de S. Luiz',
    'id': '975'
  },
  {
    'date': '18/07/2004',
    'medium': 'Correio da Manhã',
    'title': 'Vigor em programa atractivo',
    'group': 'Comp. de Henri Oguike',
    'venue': 'Centro Olga do Cadaval',
    'id': '976'
  },
  {
    'date': '25/07/2004',
    'medium': 'Correio da Manhã',
    'title': 'Danças de memória no CCB',
    'group': 'Bill T. Jones',
    'venue': 'CCB',
    'id': '977'
  },
  {
    'date': '27/07/2004',
    'medium': 'Correio da Manhã',
    'title': 'A arte do combate',
    'group': 'Angelin Prejocaj',
    'venue': 'Fest.de Aix-en-Provence',
    'id': '978'
  },
  {
    'date': '27/07/2004',
    'medium': 'Danzahoy (on line)',
    'title': 'Radiografia en tonos de  ceniza',
    'group': 'Panorama de la Danza en Port',
    'venue': 'California - USA',
    'id': '979'
  },
  {
    'date': '15/09/2004',
    'medium': 'Correio da Manhã',
    'title': 'A dança na Europa',
    'group': 'Bienal de Dança de Lyon',
    'venue': 'Lyon',
    'id': '980'
  },
  {
    'date': '19/09/2004',
    'medium': 'Correio da Manhã',
    'title': 'A gueixa da lata de sardinhas',
    'group': 'Sónia Baptista',
    'venue': 'Lyon',
    'id': '981'
  },
  {
    'date': '21/09/2004',
    'medium': 'Correio da Manhã',
    'title': 'Jirí Kylián homenageado em Lyon',
    'group': 'Homenagem a Jirí Kylián',
    'venue': 'Lyon',
    'id': '982'
  },
  {
    'date': '28/09/2004',
    'medium': 'Correio da Manhã',
    'title': 'Cantata semilusa faz furor em Lyon',
    'group': 'Alterballetto',
    'venue': 'Lyon',
    'id': '983'
  },
  {
    'date': '02/10/2004',
    'medium': 'Correio da Manhã',
    'title': 'Companhia de Dança de Mafra no Redondo',
    'group': 'Almágama',
    'venue': 'Hotel Convento de S. Paulo',
    'id': '984'
  },
  {
    'date': '08/10/2004',
    'medium': 'Correio da Manhã',
    'title': 'Lua cheia e magia felina',
    'group': 'Cats',
    'venue': 'Coliseu dos Recreios',
    'id': '985'
  },
  {
    'date': '11/10/2004',
    'medium': 'Correio da Manhã',
    'title': 'Entrar na dança...mas em silêncio',
    'group': 'Almágama',
    'venue': 'Hotel Convento de S. Paulo',
    'id': '986'
  },
  {
    'date': '13/10/2004',
    'medium': 'Correio da Manhã',
    'title': 'Wanda, animal de palco',
    'group': 'Wanda Stuart',
    'venue': 'Casino Estoril',
    'id': '987'
  },
  {
    'date': '24/10/2004',
    'medium': 'Correio da Manhã',
    'title': 'Um festival de solos e duetos',
    'group': 'XII Quinzena de Almada',
    'venue': 'Forum Romeu Correia',
    'id': '988'
  },
  {
    'date': '04/11/2004',
    'medium': 'Correio da Manhã',
    'title': 'Aquela máquina',
    'group': 'Stomp',
    'venue': 'CCB',
    'id': '989'
  },
  {
    'date': '06/11/2004',
    'medium': 'Correio da Manhã',
    'title': 'O desconhecido ali tão perto',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '990'
  },
  {
    'date': '16/11/2004',
    'medium': 'Correio da Manhã',
    'title': 'Ela é a Julie Andrews portuguesa',
    'group': 'Sandra Pires',
    'venue': 'Lisboa',
    'id': '991'
  },
  {
    'date': '19/11/2004',
    'medium': 'Correio da Manhã',
    'title': 'Cinderela tradicional',
    'group': 'B. no Gelo de S. Petersburgo',
    'venue': 'Coliseu dos Recreios',
    'id': '992'
  },
  {
    'date': '27/11/2004',
    'medium': 'Correio da Manhã',
    'title': '"Quebra-Nozes" académico',
    'group': 'Ballet da Ópera de Kiev',
    'venue': 'Teatro Camões',
    'id': '993'
  },
  {
    'date': '01/12/2004',
    'medium': 'Correio da Manhã',
    'title': 'Magia voadora',
    'group': 'Nevada Ballet Theatre',
    'venue': 'CCB',
    'id': '994'
  },
  {
    'date': '04/12/2004',
    'medium': 'Correio da Manhã',
    'title': 'Dança em estreia',
    'group': 'Vortice Dance',
    'venue': 'CAE da Figueira da Foz',
    'id': '995'
  },
  {
    'date': '12/12/2004',
    'medium': 'Correio da Manhã',
    'title': 'Dança em Alcobaça',
    'group': 'CêDêCê',
    'venue': 'Cine- Teatro de Alcobaça',
    'id': '996'
  },
  {
    'date': '13/12/2004',
    'medium': 'Correio da Manhã',
    'title': 'Nas mãos do fado maior',
    'group': 'Katia Guerreiro',
    'venue': 'Teatro S. Luiz',
    'id': '997'
  },
  {
    'date': '19/12/2004',
    'medium': 'Correio da Manhã',
    'title': '" Carmina Burana" monumental',
    'venue': 'Pavilhão Atlântico',
    'id': '998'
  },
  {
    'date': '19/12/2004',
    'medium': 'Correio da Manhã',
    'title': 'Água, magia e muito rigor',
    'group': 'Cirque Plume',
    'venue': 'CCB',
    'id': '999'
  },
  {
    'date': '07/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'Celebrar o amor de Pedro e Inês',
    'group': 'Ano Inesiano',
    'venue': 'Mosteiro de Alcobaça',
    'id': '1000'
  },
  {
    'date': '08/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'Certas metáforas de amor e solidão',
    'group': 'Meg Suart',
    'venue': 'Culturgest',
    'id': '1001'
  },
  {
    'date': '15/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'Boa dança à moda da Rússia czariana',
    'group': 'Ballet Da Ópera De Kiev',
    'venue': 'Coliseu de Lisboa e Porto',
    'id': '1002'
  },
  {
    'date': '16/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'Desafiar a gravidade',
    'group': 'Plano B',
    'venue': 'CCB',
    'id': '1003'
  },
  {
    'date': '17/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'Um "Pinóquio" pouco infantil',
    'group': 'Jean-Paul Bucchieri',
    'venue': 'CCB',
    'id': '1004'
  },
  {
    'date': '23/01/2005',
    'medium': 'Correio da Manhã',
    'title': 'O peso da música',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '1005'
  },
  {
    'date': '03/02/2005',
    'medium': 'Correio da Manhã',
    'title': 'Virtuosismo em sapateado electrizante',
    'group': 'Tap Dogs',
    'venue': 'CCB',
    'id': '1006'
  },
  {
    'date': '12/02/2005',
    'medium': 'Correio da Manhã',
    'title': '"La Traviata" de leste nos Coliseus',
    'group': 'Ópera da Moldávia',
    'venue': 'Coliseu dos Recreios',
    'id': '1007'
  },
  {
    'date': '27/02/2005',
    'medium': 'Correio da Manhã',
    'title': 'Coliseu em festa com dança irlandesa',
    'group': '"Lord Of The Dance"',
    'venue': 'Coliseu de Lisboa',
    'id': '1008'
  },
  {
    'date': '28/02/2005',
    'medium': 'Correio da Manhã',
    'title': 'Um musical brilhante',
    'group': '"Ópera do Malandro"',
    'venue': 'CCB',
    'id': '1009'
  },
  {
    'date': '04/03/2005',
    'medium': 'Correio da Manhã',
    'title': 'Festa na selva africana',
    'group': '"Disney no Gelo"',
    'venue': 'Pavilhão Atlântico',
    'id': '1010'
  },
  {
    'date': '10/03/2005',
    'medium': 'Correio da Manhã',
    'title': 'A magia delirante para lá do visível',
    'group': 'Victoria Chaplin',
    'venue': 'CCB',
    'id': '1011'
  },
  {
    'date': '13/03/2005',
    'medium': 'Correio da Manhã',
    'title': 'Três visões da dança portuguesa',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1012'
  },
  {
    'date': '13/03/2005',
    'medium': 'Correio da Manhã',
    'title': '"O Rei" em Lisboa leva fãs às lágrimas',
    'group': 'Roberto Carlos',
    'venue': 'Pavilhão Atlântico',
    'id': '1013'
  },
  {
    'date': '19/03/2005',
    'medium': 'Correio da Manhã',
    'title': 'Magia de Stravinsky',
    'group': 'Ballet Gulbenkian',
    'venue': 'Grande Auditório Gulbenkian',
    'id': '1014'
  },
  {
    'date': '08/04/2005',
    'medium': 'Correio da Manhã',
    'title': 'Quatro meses de festa',
    'group': '75 Anos do Cine-Teatro',
    'venue': 'Loulé',
    'id': '1015'
  },
  {
    'date': '09/04/2005',
    'medium': 'Correio da Manhã',
    'title': '"D. Quixote"de alta voltagem',
    'group': 'B. da Cidade de Moscovo',
    'venue': 'Coliseu dos Recreios',
    'id': '1016'
  },
  {
    'date': '15/04/2005',
    'medium': 'Voz de  Loulé, A',
    'title': 'Loulé antecipa Faro Capital da Cultura 2005',
    'group': '75 anos Cine-Teatro Louletano',
    'venue': 'Cine-Teatro Louletano - Loulé',
    'id': '1017'
  },
  {
    'date': '17/04/2005',
    'medium': 'Correio da Manhã',
    'title': 'A violência da vontade',
    'group': '"Comer o Coração"',
    'venue': 'CCB',
    'id': '1018'
  },
  {
    'date': '28/04/2005',
    'medium': 'CêDêCê - Boletim',
    'title': 'Memória, Gratidão, Homenagem',
    'group': 'Dia Mundial da Dança',
    'venue': 'Oeiras e Alcobaça',
    'id': '1019'
  },
  {
    'date': '29/04/2005',
    'medium': 'Correio da Manhã',
    'title': 'Dançar sem esqucer os problemas',
    'group': 'Dia Mundial da Dança',
    'id': '1020'
  },
  {
    'date': '06/05/2005',
    'medium': 'Correio da Manhã',
    'title': 'O melhor do fado no Casino',
    'group': 'Gala Carlos Zel',
    'venue': 'Casino Estoril',
    'id': '1021'
  },
  {
    'date': '14/05/2005',
    'medium': 'Correio da Manhã',
    'title': 'Julio Iglésias aplaudido em delírio',
    'group': 'Julio Iglésias',
    'venue': 'Pavilhão Atlântico',
    'id': '1022'
  },
  {
    'date': '26/05/2005',
    'medium': 'Correio da Manhã',
    'title': 'Uma rave que caiu do céu',
    'group': 'De la Guarda',
    'venue': 'Toyota Box',
    'id': '1023'
  },
  {
    'date': '29/05/2005',
    'medium': 'Correio da Manhã',
    'title': 'Entre a ópera e o baile mandado',
    'group': 'Fausto',
    'venue': 'CCB',
    'id': '1024'
  },
  {
    'date': '30/05/2005',
    'medium': 'Correio da Manhã',
    'title': 'Salada irlandesa',
    'group': 'Spirit of the Dance',
    'venue': 'Coliseu dos Recreios',
    'id': '1025'
  },
  {
    'date': '06/06/2005',
    'medium': 'Correio da Manhã',
    'title': 'Nasceu uma cantora de culto',
    'group': 'Aldina Duarte',
    'venue': 'Culturgest',
    'id': '1026'
  },
  {
    'date': '07/06/2005',
    'medium': 'Correio da Manhã',
    'title': 'Russell incendeia Coliseu',
    'group': 'Russell Watson',
    'venue': 'Coliseu dos Recreios',
    'id': '1027'
  },
  {
    'date': '12/06/2005',
    'medium': 'Correio da Manhã',
    'title': 'Danças mornas em Sintra',
    'group': 'Grande Teatro de Genebra',
    'venue': 'Festival de Sintra',
    'id': '1028'
  },
  {
    'date': '25/06/2005',
    'medium': 'Correio da Manhã',
    'title': 'Corpo de baile despido',
    'group': 'Miguel Pereira',
    'venue': 'Culturgest',
    'id': '1029'
  },
  {
    'date': '04/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Ódio, amor e morte num bailado em tons de negro',
    'group': 'Benvindo Fonseca',
    'venue': 'Teatro S.Luiz',
    'id': '1030'
  },
  {
    'date': '06/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Gulbenkian extingue companhia de dança',
    'group': 'Ballet Gulbenkian',
    'venue': 'Lisboa',
    'id': '1031'
  },
  {
    'date': '12/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Unidos na Net e no jardim',
    'group': 'Ballet Gulbenkian',
    'venue': 'Jardins da Gulbenkian',
    'id': '1032'
  },
  {
    'date': '17/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Descobrir a obra Ernesto Korrodi',
    'group': 'Ernesto Korrodi',
    'venue': 'Leiria',
    'id': '1033'
  },
  {
    'date': '20/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Quatro décadas de sucesso na dança',
    'group': 'Ballet Gulbenkian',
    'venue': 'Extinção do BG',
    'id': '1034'
  },
  {
    'date': '28/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'Coreógrafos portugueses dançam em Burgos',
    'group': 'Cláudia Martins e Rafael Carriço',
    'venue': 'Espanha',
    'id': '1035'
  },
  {
    'date': '31/07/2005',
    'medium': 'Correio da Manhã',
    'title': 'A última dança',
    'group': 'Ballet Gulbenkian',
    'venue': 'Gulbenkian',
    'id': '1036'
  },
  {
    'date': '01/08/2005',
    'medium': 'Correio da Manhã',
    'title': 'Adeus, despedida emocionante',
    'group': 'Ballet Gulbenkian',
    'venue': 'Teatro Camões',
    'id': '1037'
  },
  {
    'date': '03/08/2005',
    'medium': 'Correio da Manhã',
    'title': 'Aterballetto em clima de festa',
    'group': 'Aterballetto',
    'venue': 'Sintra',
    'id': '1038'
  },
  {
    'date': '12/08/2005',
    'medium': 'Correio da Manhã',
    'title': 'Olga Roriz apresenta projecto',
    'group': 'Olga Roriz',
    'venue': 'Algarve',
    'id': '1039'
  },
  {
    'date': '14/08/2005',
    'medium': 'Correio da Manhã',
    'title': 'Com ritmo e energia',
    'group': 'Cª.Henry Oguike',
    'venue': 'Faro',
    'id': '1040'
  },
  {
    'date': '03/09/2005',
    'medium': 'Correio da Manhã',
    'title': 'Cisnes gregos em fábula moderna',
    'group': 'Cª Dança do Norte da Grécia',
    'venue': 'Festival A Sul - Faro',
    'id': '1041'
  },
  {
    'date': '09/09/2005',
    'medium': 'Danzahoy (on line)',
    'title': 'A sangre fría',
    'group': 'Extinción del Ballet Gulbenkian',
    'venue': 'California - USA',
    'id': '1042'
  },
  {
    'date': '10/09/2005',
    'medium': 'Correio da Manhã',
    'title': 'As letras dançantes',
    'group': 'Dança com Letras',
    'venue': 'Casino Estoril',
    'id': '1043'
  },
  {
    'date': '01/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'A magia dos cravos humanos',
    'group': 'Pina Bausch',
    'venue': 'Teatro S.Luiz',
    'id': '1044'
  },
  {
    'date': '04/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Geometria de gestos',
    'group': 'Cª Paulo Ribeiro',
    'venue': 'CCB',
    'id': '1045'
  },
  {
    'date': '08/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Perfume do Japão',
    'group': 'Pina Bausch',
    'venue': 'Teatro S.Luiz',
    'id': '1046'
  },
  {
    'date': '09/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Sou um pessoa sem medos',
    'group': 'Entrevista com Katia Guerreiro',
    'id': '1047'
  },
  {
    'date': '12/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Documentação',
    'group': 'António Laginha',
    'venue': 'Centro de Dança de Oeiras',
    'id': '1048'
  },
  {
    'date': '15/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Um casamento feliz entre o canto e a poesia',
    'group': 'Katia Guerreiro',
    'venue': 'Faculdade de Ciências Médicas',
    'id': '1049'
  },
  {
    'date': '18/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'A poesia do apocalipse',
    'group': 'Francisco Camacho',
    'venue': 'Culturgest',
    'id': '1050'
  },
  {
    'date': '19/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Ondulantes e luzidías',
    'group': 'Bellydance Superstars',
    'venue': 'CCB',
    'id': '1051'
  },
  {
    'date': '22/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Belas vozes para encenação previsível',
    'group': 'Opera de Kazan',
    'venue': 'Coliseu dos Recreios',
    'id': '1052'
  },
  {
    'date': '23/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Não tenho rivais em Espanha',
    'group': 'Entrevista com Joaquín Cortés',
    'venue': 'Lisboa',
    'id': '1053'
  },
  {
    'date': '28/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Longo tempo dos corpos brancos',
    'group': 'Companhia Rosas',
    'venue': 'Faro',
    'id': '1054'
  },
  {
    'date': '30/10/2005',
    'medium': 'Correio da Manhã',
    'title': 'Amor de mel, amor de fel',
    'group': 'Olga Roriz',
    'venue': 'CCB',
    'id': '1055'
  },
  {
    'date': '01/11/2005',
    'medium': 'Boletín Danzar',
    'title': 'Teoría de la Danza - Cubaescena',
    'group': 'Noel Bonilla - Editor',
    'venue': 'La Havana - Cuba',
    'id': '1056'
  },
  {
    'date': '08/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Força promete energia e emoção',
    'group': 'Fuerza Bruta',
    'venue': 'Toyota Box',
    'id': '1057'
  },
  {
    'date': '12/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Impacto visual',
    'group': 'Fuerza Bruta',
    'venue': 'Toyota Box',
    'id': '1058'
  },
  {
    'date': '13/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Homenagem justa mas entediante',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1059'
  },
  {
    'date': '18/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Abertura do festival de dança',
    'group': 'Festival de Cannes',
    'venue': 'França',
    'id': '1060'
  },
  {
    'date': '22/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Fascínio tardio',
    'group': 'Ballet do Reno',
    'venue': 'Cannes',
    'id': '1061'
  },
  {
    'date': '27/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Um lago vibrante',
    'group': 'Ballet do Teatro Maryinsky',
    'venue': 'Festival de Cannes',
    'id': '1062'
  },
  {
    'date': '30/11/2005',
    'medium': 'Correio da Manhã',
    'title': 'Uma CNB cada vez menos nacional',
    'group': 'CNB',
    'venue': 'Lisboa',
    'id': '1063'
  },
  {
    'date': '03/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'Vivacidade e picardia',
    'group': 'Marília Pêra',
    'venue': 'Teatro Tivoli',
    'id': '1064'
  },
  {
    'date': '09/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'A magia das coisas simples',
    'group': 'Slava',
    'venue': 'CCB',
    'id': '1065'
  },
  {
    'date': '10/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'Portuguesa faz sucesso na Áustria',
    'group': 'Sandra Pires',
    'venue': 'Opera de Viena',
    'id': '1066'
  },
  {
    'date': '11/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'Katia Guerreiro nas mãos de um fado maior',
    'group': 'Katia Guerreiro',
    'venue': 'Teatro S.Luiz',
    'id': '1067'
  },
  {
    'date': '17/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'CNB importa da Turquia um D.Quixote requentado',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1068'
  },
  {
    'date': '18/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'A magia de Partimpim',
    'group': 'Adriana Calcanhotto',
    'venue': 'Pavilhão Atlântico',
    'id': '1069'
  },
  {
    'date': '19/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'D.Quixote sem estilo',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1070'
  },
  {
    'date': '21/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'Estrela americana em Aveiro',
    'group': 'Myrna Kamara',
    'venue': 'Teatro Aveirense',
    'id': '1071'
  },
  {
    'date': '27/12/2005',
    'medium': 'Correio da Manhã',
    'title': '2005 é para esquecer',
    'id': '1072'
  },
  {
    'date': '31/12/2005',
    'medium': 'Correio da Manhã',
    'title': 'Ano negro para a dança portuguesa',
    'id': '1073'
  },
  {
    'date': '07/01/2006',
    'medium': 'Correio da Manhã',
    'title': 'Madame serve chá no do S.Carlos',
    'group': 'Olga Roriz',
    'venue': 'Teatro S.Carlos',
    'id': '1074'
  },
  {
    'date': '08/01/2006',
    'medium': 'Correio da Manhã',
    'title': 'Vivacidade e alegria no Coliseu',
    'group': 'Strauss Festival Orchestra',
    'venue': 'Coliseu dos Recreios',
    'id': '1075'
  },
  {
    'date': '10/01/2006',
    'medium': 'Correio da Manhã',
    'title': 'Tédio na casa dos bifes',
    'group': 'Gilles Jobin',
    'venue': 'Culturgest',
    'id': '1076'
  },
  {
    'date': '14/01/2006',
    'medium': 'Correio da Manhã',
    'title': 'Muito grito e pouco peixe',
    'group': 'Clara Andermatt',
    'venue': 'CCB',
    'id': '1077'
  },
  {
    'date': '19/01/2006',
    'medium': 'Correio da Manhã',
    'title': 'Tragédia amorosa em tons épicos',
    'group': 'Miss Saigão',
    'venue': 'Coliseu dos Recreios',
    'id': '1078'
  },
  {
    'date': '06/02/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dedicação e energia de oito bailarinos',
    'group': 'Cª de Benvindo Fonseca',
    'venue': 'Teatro Camões',
    'id': '1079'
  },
  {
    'date': '11/02/2006',
    'medium': 'Correio da Manhã',
    'title': 'Bartoli na Gulbenkian',
    'group': 'Cecília Bartoli',
    'venue': 'Fundação Gulbenkian',
    'id': '1080'
  },
  {
    'date': '14/02/2006',
    'medium': 'Correio da Manhã',
    'title': 'Concerto que deixou música no coração',
    'group': 'Cecília Bartoli',
    'venue': 'Fundação Gulbenkian',
    'id': '1081'
  },
  {
    'date': '10/03/2006',
    'medium': 'Correio da Manhã',
    'title': 'Sempre o mesmo rei',
    'group': 'Roberto Carlos',
    'venue': 'Pavilhão Atlântico',
    'id': '1082'
  },
  {
    'date': '11/03/2006',
    'medium': 'Correio da Manhã',
    'title': 'Circo de laboratório',
    'group': 'Johann Leguillerm',
    'venue': 'CCB',
    'id': '1083'
  },
  {
    'date': '12/03/2006',
    'medium': 'Correio da Manhã',
    'title': 'Prostitutas e malandragem',
    'group': 'Ópera do Malandro',
    'venue': 'Coliseu dos Recreios',
    'id': '1084'
  },
  {
    'date': '13/03/2006',
    'medium': 'Correio da Manhã',
    'title': 'Fado é sentimento em bruto',
    'group': 'Entrevista com Gonçalo Salgueiro',
    'id': '1085'
  },
  {
    'date': '18/03/2006',
    'medium': 'Correio da Manhã',
    'title': 'Fado, amigos e farra',
    'group': 'João Braga',
    'venue': 'Aula Magna',
    'id': '1086'
  },
  {
    'date': '01/04/2006',
    'medium': 'Correio da Manhã',
    'title': 'Bailarino Anatoli Grigoriev',
    'group': 'Óbito de Anatoli Grigoriev',
    'venue': 'Londres',
    'id': '1087'
  },
  {
    'date': '29/04/2006',
    'medium': 'Correio da Manhã',
    'title': 'Luto pelo BG continua',
    'group': 'Dia Mundial da Dança',
    'id': '1088'
  },
  {
    'date': '01/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Um espectaculo com sabor a Verão',
    'group': 'Grease',
    'venue': 'Edimburgo',
    'id': '1089'
  },
  {
    'date': '03/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Peça procura ligar o divino ao humano',
    'group': 'Entrevista com Rafael Carriço',
    'venue': 'Fátima',
    'id': '1090'
  },
  {
    'date': '04/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dança com fogo e raça',
    'group': 'Forever Tango',
    'venue': 'Casino Lisboa',
    'id': '1091'
  },
  {
    'date': '06/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Um elenco excepção',
    'group': 'Grease',
    'venue': 'Coliseu dos Recreios',
    'id': '1092'
  },
  {
    'date': '18/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Convidados de luxo no novo Campo Pequeno',
    'venue': 'Campo Pequeno',
    'id': '1093'
  },
  {
    'date': '20/05/2006',
    'medium': 'Correio da Manhã',
    'title': 'Paulo de Carvalho passa em revista 44 anos de canções',
    'group': 'Paulo de Carvalho',
    'venue': 'CCB',
    'id': '1094'
  },
  {
    'date': '03/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Giselle resurge no 2º acto',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1095'
  },
  {
    'date': '04/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Brasileirismo contemporâneo',
    'group': 'Cª Quasar',
    'venue': 'Festival de Sintra',
    'id': '1096'
  },
  {
    'date': '14/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Show de... dança',
    'group': 'Grupo de Rua de Niterói',
    'venue': 'CCB',
    'id': '1097'
  },
  {
    'date': '25/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Com pouco sumo',
    'group': 'Scapino Ballet',
    'venue': 'Festival de Sintra',
    'id': '1098'
  },
  {
    'date': '26/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Katia emociona S.Jorge',
    'group': 'Katia Guerreiro',
    'venue': 'Castelo de S.Jorge',
    'id': '1099'
  },
  {
    'date': '27/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Ana Pereira Caldas',
    'group': 'Para Baixo',
    'id': '1100'
  },
  {
    'date': '27/06/2006',
    'medium': 'Correio da Manhã',
    'title': 'Bailarina principal despedida da CNB',
    'group': 'Peggy Konik',
    'venue': 'Lisboa',
    'id': '1101'
  },
  {
    'date': '04/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Sons e sabores misturam-se em Loulé',
    'group': 'Festival do Mediterrânico',
    'venue': 'Loulé',
    'id': '1102'
  },
  {
    'date': '08/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Bailado desvia 3,6 milhões de Euros',
    'group': 'CNB',
    'venue': 'Lisboa',
    'id': '1103'
  },
  {
    'date': '09/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Bom gosto visual',
    'group': 'Akram Khan e Sidi Cherkaoui',
    'venue': 'CCB',
    'id': '1104'
  },
  {
    'date': '11/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Tédio de Rui Horta',
    'group': 'Cª Instável',
    'venue': 'Festival de Sintra',
    'id': '1105'
  },
  {
    'date': '14/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Pirmin Trecu faleceu em Espanha',
    'group': 'Óbito de Pirmin Trecu',
    'venue': 'San Sebastian',
    'id': '1106'
  },
  {
    'date': '17/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dança que fez Sintra sorrir',
    'group': 'Hubbard Street Dance',
    'venue': 'Festival de Sintra',
    'id': '1107'
  },
  {
    'date': '23/07/2006',
    'medium': 'Correio da Manhã',
    'title': 'Seis personagens à procura de autor',
    'group': 'Olga Roriz',
    'venue': 'Festival de Sintra',
    'id': '1108'
  },
  {
    'date': '09/08/2006',
    'medium': 'Correio da Manhã',
    'title': 'O controlo do físico',
    'group': 'Circo acrobático de Pequim',
    'venue': 'Estádio Algarve',
    'id': '1109'
  },
  {
    'date': '25/08/2006',
    'medium': 'Correio da Manhã',
    'title': 'Danças de salão de Kiev',
    'group': 'Teatro de Danças de Salão de Kiev',
    'venue': 'Oeiras',
    'id': '1110'
  },
  {
    'date': '01/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Tinha o desejo de criar em Portugal',
    'group': 'Entrevista com Nuno Silva',
    'venue': 'Faro',
    'id': '1111'
  },
  {
    'date': '07/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'O calor do flamenco',
    'group': 'Carmen Linares',
    'venue': 'Teatro S.Carlos',
    'id': '1112'
  },
  {
    'date': '09/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Lisboa não dança em Lyon',
    'group': 'Bienal de Dança de Lyon',
    'venue': 'França',
    'id': '1113'
  },
  {
    'date': '14/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Com um perfume de escândalo',
    'group': 'Kim Itoh',
    'venue': 'Bienal de Dança de Lyon',
    'id': '1114'
  },
  {
    'date': '17/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Madrid dança com toque lusitano',
    'group': 'Nacho Duato',
    'venue': 'Bienal de Dança de Lyon',
    'id': '1115'
  },
  {
    'date': '24/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dançar de canadianas e bengalas',
    'group': 'Cª Marie Chouinard',
    'venue': 'CCB',
    'id': '1116'
  },
  {
    'date': '27/09/2006',
    'medium': 'Correio da Manhã',
    'title': '"Para ter resultados é preciso amadurecer"',
    'group': 'Entrevista com Antonio Márquez',
    'venue': 'Casino Lisboa',
    'id': '1117'
  },
  {
    'date': '29/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'O colorido e a garra andaluza',
    'group': 'Ballert Flamenco',
    'venue': 'Casino Lisboa',
    'id': '1118'
  },
  {
    'date': '30/09/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dança perde a pioneira',
    'group': 'Óbito de Margarida de Abreu',
    'venue': 'Lisboa',
    'id': '1119'
  },
  {
    'date': '03/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Fado dançado no Convento de S.Paulo',
    'group': 'Amálgama',
    'venue': 'Convento de S.Paulo',
    'id': '1120'
  },
  {
    'date': '10/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Comuna dança',
    'group': 'Konai e Yurab',
    'venue': 'Teatro da Comuna',
    'id': '1121'
  },
  {
    'date': '15/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Euforia nas bancadas com heróis em carne e osso',
    'group': 'Holiday on Ice',
    'venue': 'Pavilhão Atlântico',
    'id': '1122'
  },
  {
    'date': '17/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Acrobacia e música juntam-se em espectáculo de "novo" circo',
    'group': 'Festival Tempo de Imagens',
    'venue': 'Culturgest',
    'id': '1123'
  },
  {
    'date': '22/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Sempre tudo mais do mesmo',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1124'
  },
  {
    'date': '24/10/2006',
    'medium': 'Correio da Manhã',
    'title': 'Um concerto a louvar a música clássica',
    'group': 'Andrea Bocelli',
    'venue': 'Pavilhão Atlântico',
    'id': '1125'
  },
  {
    'date': '05/11/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dulce Pontes brilhante e poderosa',
    'group': 'Dulce Pontes',
    'venue': 'Casino Lisboa',
    'id': '1126'
  },
  {
    'date': '26/11/2006',
    'medium': 'Correio da Manhã',
    'title': '"Quebra-Nozes" vivo e colorido no Coliseu',
    'group': 'Ballet Imperial Russo',
    'venue': 'Coliseu dos Recreios',
    'id': '1127'
  },
  {
    'date': '26/11/2006',
    'medium': 'Correio da Manhã',
    'title': 'Dança de imagens na penumbra',
    'group': 'Momix',
    'venue': 'Casino Lisboa',
    'id': '1128'
  },
  {
    'date': '26/11/2006',
    'medium': 'Correio da Manhã',
    'title': 'Oficina de dança indiana em Algés',
    'group': 'Tarikavalli',
    'venue': 'Centro de Dança de Oeiras',
    'id': '1129'
  },
  {
    'date': '08/12/2006',
    'medium': 'Correio da Manhã',
    'title': 'Viva Mozart…de pernas ao léu no São Luiz',
    'group': 'Companhia Rosas',
    'venue': 'Teatro S. Luiz',
    'id': '1130'
  },
  {
    'date': '18/12/2006',
    'medium': 'Correio da Manhã',
    'title': '"Aida" a ferro e fogo no Atlântico',
    'group': 'Opera on Fire',
    'venue': 'Pavilhão Atlântico',
    'id': '1131'
  },
  {
    'date': '20/12/2006',
    'medium': 'Correio da Manhã',
    'title': 'O drama de Peggy Konik',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1132'
  },
  {
    'date': '24/12/2006',
    'medium': 'Correio da Manhã',
    'title': 'Jovens intérpretes fazem o sucesso de "Pollicino"',
    'group': 'Eugénio Sena',
    'venue': 'Culturgest',
    'id': '1133'
  },
  {
    'date': '07/01/2007',
    'medium': 'Correio da Manhã',
    'title': '"Lago" pouco criativo',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1134'
  },
  {
    'date': '18/01/2007',
    'medium': 'Correio da Manhã',
    'title': 'O regresso da bela batucada',
    'group': 'Stomp',
    'venue': 'Casino Lisboa',
    'id': '1135'
  },
  {
    'date': '28/01/2007',
    'medium': 'Correio da Manhã',
    'title': 'O "enterro" de Domicília',
    'group': 'Real Pelágio',
    'venue': 'Culturgest',
    'id': '1136'
  },
  {
    'date': '01/02/2007',
    'medium': 'Correio da Manhã',
    'title': 'O (novo) circo chegou ao Casino Estoril',
    'group': 'Four - O Espírito dos Elementos',
    'venue': 'Casino Estoril',
    'id': '1137'
  },
  {
    'date': '04/02/2007',
    'medium': 'Correio da Manhã',
    'title': 'Ritmo, sedução e alegria no palco do teatro Tivoli',
    'group': 'Ballet Flamenco de Madrid',
    'venue': 'Teatro Tivoli',
    'id': '1138'
  },
  {
    'date': '04/02/2007',
    'medium': 'Correio da Manhã',
    'title': 'Cristina Branco presta homenagem ao génio',
    'group': 'Cristina Branco Canta Zeca',
    'venue': 'Teatro S. Luiz',
    'id': '1139'
  },
  {
    'date': '05/02/2007',
    'medium': 'Correio da Manhã',
    'title': 'Jovem português premiado na Suíça',
    'group': 'Telmo Moreira',
    'venue': 'Prix de Lausanne',
    'id': '1140'
  },
  {
    'date': '17/02/2007',
    'medium': 'Correio da Manhã',
    'title': 'Estou muito mais aquém e além do fado',
    'group': 'Entrevista com Amélia Muge',
    'venue': 'Culturgest',
    'id': '1141'
  },
  {
    'date': '04/03/2007',
    'medium': 'Correio da Manhã',
    'title': 'Casamento perfeito entre a ópera e a dança',
    'group': 'Dido e Eneias - Sasha Waltz',
    'venue': 'CCB',
    'id': '1142'
  },
  {
    'date': '11/03/2007',
    'medium': 'Correio da Manhã',
    'title': 'Escolhidas a dedo',
    'group': 'Crazy Horse',
    'venue': 'Paris',
    'id': '1143'
  },
  {
    'date': '12/03/2007',
    'medium': 'Correio da Manhã',
    'title': 'Saudades do Ballet Gulbenkian',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1144'
  },
  {
    'date': '25/03/2007',
    'medium': 'Correio da Manhã',
    'title': 'O mistério de todos os silêncios',
    'group': 'Companhia Pina Bausch',
    'venue': 'CCB',
    'id': '1145'
  },
  {
    'date': '01/04/2007',
    'medium': 'Correio da Manhã',
    'title': '"Caruma" inconsistente',
    'group': 'Companhia Instável',
    'venue': 'Culturgest',
    'id': '1146'
  },
  {
    'date': '03/04/2007',
    'medium': 'Correio da Manhã',
    'title': 'Erotisma á parisiense',
    'group': 'Crazy Horse',
    'venue': 'Casino de Lisboa',
    'id': '1147'
  },
  {
    'date': '04/04/2007',
    'medium': 'Correio da Manhã',
    'title': '"No meu trabalho tudo são detalhes"',
    'group': 'Wuppertal',
    'venue': 'Teatro Camões',
    'id': '1148'
  },
  {
    'date': '06/04/2007',
    'medium': 'Correio da Manhã',
    'title': 'Fado invadiu Casino do Estoril',
    'group': 'Homenagem a Carlos Zel',
    'venue': 'Casino do Estoril',
    'id': '1149'
  },
  {
    'date': '07/04/2007',
    'medium': 'Correio da Manhã',
    'title': 'A eterna magia da condição humana',
    'group': 'Pina Bausch',
    'venue': 'Teatro Camões',
    'id': '1150'
  },
  {
    'date': '15/04/2007',
    'medium': 'Correio da Manhã',
    'title': 'Em perfeita comunhão',
    'group': 'Apassionata',
    'venue': 'Campo Pequeno',
    'id': '1151'
  },
  {
    'date': '29/04/2007',
    'medium': 'Correio da Manhã',
    'title': '"Em Portugal há pouca estabilidade"',
    'group': 'Hugo Marmelada',
    'id': '1152'
  },
  {
    'date': '29/04/2007',
    'medium': 'Correio da Manhã',
    'title': '"Gostava de ter um grupo meu"',
    'group': 'Paulo Manso',
    'id': '1153'
  },
  {
    'date': '29/04/2007',
    'medium': 'Correio da Manhã',
    'title': 'Debate urgente precisa-se',
    'id': '1154'
  },
  {
    'date': '04/05/2007',
    'medium': 'Correio da Manhã',
    'title': 'Concerto Ibérico',
    'venue': 'Pavilhão Atlântico',
    'id': '1155'
  },
  {
    'date': '12/05/2007',
    'medium': 'Correio da Manhã',
    'title': 'Benvindo Fonseca assina obra despretensiosa',
    'group': 'Lisboa Ballet Contemporâneo',
    'venue': 'Teatro Camões',
    'id': '1156'
  },
  {
    'date': '14/05/2007',
    'medium': 'Correio da Manhã',
    'title': 'Criador Diniz Sanchez pede que o deixem trabalhar',
    'group': 'Comapnhia Lua',
    'venue': 'Instituto Franco-Português',
    'id': '1157'
  },
  {
    'date': '04/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Mistèrio e sedução',
    'group': 'Ballet Cullberg',
    'venue': 'Centro Olga Cadaval',
    'id': '1158'
  },
  {
    'date': '12/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Bailado clássico em cenário imponente do século XVIII',
    'group': 'CNB',
    'venue': 'Casa da Pesca',
    'id': '1159'
  },
  {
    'date': '17/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Águas perdiadas em corpos lunares',
    'group': 'Cloud Gate',
    'venue': 'Centro Olga de Cadaval',
    'id': '1160'
  },
  {
    'date': '18/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Barrigada de riso',
    'group': 'Companhia de Música Teatral',
    'venue': 'Teatro Armando Cortez',
    'id': '1161'
  },
  {
    'date': '23/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Tão perto e tão longe',
    'group': 'CNB',
    'venue': 'Teatro Camões',
    'id': '1162'
  },
  {
    'date': '23/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Para as massas',
    'id': '1163'
  },
  {
    'date': '29/06/2007',
    'medium': 'Correio da Manhã',
    'title': 'Em ritmo de cruzeiro',
    'group': 'Zucchero',
    'venue': 'Casino Estoril',
    'id': '1164'
  },
  {
    'date': '16/07/2007',
    'medium': 'Correio da Manhã',
    'title': 'O triunfo de ´Romeu e Julieta´ motard',
    'group': 'Mauro bigonzetti',
    'venue': 'Teatro S. Luiz',
    'id': '1165'
  },
  {
    'date': '25/07/2007',
    'medium': 'Correio da Manhã',
    'title': 'Fado tem nova voz',
    'group': 'Fábia Rebordão',
    'venue': 'Museu do Fado',
    'id': '1166'
  },
  {
    'date': '29/07/2007',
    'medium': 'Correio da Manhã',
    'title': '11º Festival Andanças espera 25 mil visitantes',
    'group': 'Festival Andanças',
    'venue': 'Carvalhais',
    'id': '1167'
  },
  {
    'date': '04/09/2007',
    'medium': 'Correio da Manhã',
    'title': 'Relações dinâmicas',
    'group': 'Quorum Ballet',
    'venue': 'Teatro Municipal de Faro',
    'id': '1168'
  },
  {
    'date': '13/09/2007',
    'medium': 'Correio da Manhã',
    'title': 'Piscina no Jamor acolhe ´impermeável´',
    'group': 'Companhia Astrakam',
    'venue': 'Culturgest',
    'id': '1169'
  },
  {
    'date': '18/09/2007',
    'medium': 'Correio da Manhã',
    'title': 'Turbilhão de imagens',
    'group': 'Cirque du Soleil',
    'venue': 'Pavilhão Atlântico',
    'id': '1170'
  },
  {
    'date': '07/10/2007',
    'medium': 'Correio da Manhã',
    'title': '´Carpe Diem´ no Teatro Camões',
    'group': 'Bruno Colchat',
    'venue': 'Teatro Camões',
    'id': '1171'
  },
  {
    'date': '09/10/2007',
    'medium': 'Correio da Manhã',
    'title': 'Ana Moura: entrega, humildade e raça fadista',
    'group': 'Ana Moura',
    'venue': 'CCB',
    'id': '1172'
  },
  {
    'date': '13/10/2007',
    'medium': 'Correio da Manhã',
    'title': '´Caixa de brinquedos´… vazia',
    'group': 'Clara Andermatt',
    'venue': 'Teatro São Carlos',
    'id': '1173'
  },
  {
    'date': '14/10/2007',
    'medium': 'Correio da Manhã',
    'title': 'Coliseu a seus pés',
    'group': 'Caetano Veloso',
    'venue': 'Coliseu dos Recreios',
    'id': '1174'
  },
  {
    'date': '19/10/2007',
    'medium': 'Correio da Manhã',
    'title': 'Simone leva carnaval ao Casino',
    'group': 'Simone',
    'venue': 'Casino Estoril',
    'id': '1175'
  },
  {
    'date': '30/10/2007',
    'medium': 'Correio da Manhã',
    'title': 'A grande festa dos decibéis',
    'group': 'Enrique Iglesias',
    'venue': 'Pavilhão Atlântico',
    'id': '1176'
  },
  {
    'date': '05/11/2007',
    'medium': 'Correio da Manhã',
    'title': '´Paraíso` no Teatro São Carlos',
    'group': 'Olga Roriz',
    'venue': 'Teatro São Carlos',
    'id': '1177'
  },
  {
    'date': '10/11/2007',
    'medium': 'Correio da Manhã',
    'title': 'Invulgar energia',
    'group': 'Mariza',
    'venue': 'Pavilhão Atlântico',
    'id': '1178'
  },
  {
    'date': '14/11/2007',
    'medium': 'Correio da Manhã',
    'title': 'Brasileiro Seu Jorge faz Carnaval fora de época',
    'group': 'Seu Jorge',
    'venue': 'Coliseu de Lisboa',
    'id': '1179'
  },
  {
    'date': '18/11/2007',
    'medium': 'Correio da Manhã',
    'title': '´Barbie´exuberante cativa crianças',
    'group': '"Barbie na Sinfonia"',
    'venue': 'Coliseu de Lisboa',
    'id': '1180'
  },
  {
    'date': '23/11/2007',
    'medium': 'Correio da Manhã',
    'title': 'Morreu o coreógrafo que a PIDE expulsou',
    'group': 'Maurice Béjart',
    'id': '1181'
  },
  {
    'date': '26/11/2007',
    'medium': 'Correio da Manhã',
    'title': 'Cannes acolhe 16º festival de dança',
    'group': 'Festival de Cannes',
    'venue': 'Cannes',
    'id': '1182'
  },
  {
    'date': '28/11/2007',
    'medium': 'Correio da Manhã',
    'title': '´Delirium´ lisboeta',
    'group': 'Cirque du Soleil',
    'venue': 'Pavilhão Atlântico',
    'id': '1183'
  },
  {
    'date': '12/12/2007',
    'medium': 'Correio da Manhã',
    'title': '´Rigoletto´mediano no São Carlos',
    'group': 'OPART',
    'venue': 'Teatro São Carlos',
    'id': '1184'
  },
  {
    'date': '14/12/2007',
    'medium': 'Correio da Manhã',
    'title': 'Morreu a bailarina Isabel Queriroz',
    'id': '1185'
  },
  {
    'date': '16/12/2007',
    'medium': 'Correio da Manhã',
    'title': 'Cortéz seduz com flamenco de ´fusão´',
    'group': 'Joaquín Cortez',
    'venue': 'Campo Pequeno',
    'id': '1186'
  },
  {
    'date': '17/12/2007',
    'medium': 'Correio da Manhã',
    'title': '´Carmen´na era digital',
    'group': 'Companhia Nacional da Ucrânia',
    'venue': 'Pavilhão Atlântico',
    'id': '1187'
  },
  {
    'date': '21/01/2008',
    'medium': 'Correio da Manhã',
    'title': '"Só falta o instituto das Artes"',
    'group': 'Quorum Ballet',
    'venue': 'Singapura',
    'id': '1188'
  },
  {
    'date': '23/01/2008',
    'medium': 'Correio da Manhã',
    'title': 'Máquinas infernais invadem Lisboa',
    'group': 'Evil Machines',
    'venue': 'Teatro S. Luiz',
    'id': '1189'
  },
  {
    'date': '24/04/2008',
    'medium': 'Correio da Manhã',
    'title': 'Amália com sotaque brasileiro',
    'group': 'Edson Ribeiro',
    'venue': 'Casa da Música',
    'id': '1190'
  },
  {
    'date': '25/04/2008',
    'medium': 'Correio da Manhã',
    'title': 'Dança em família',
    'group': 'Los Vivancos',
    'venue': 'Casino de Lisboa',
    'id': '1191'
  },
  {
    'date': '11/05/2008',
    'medium': 'Correio da Manhã',
    'title': 'Prémios Amália com meia casa',
    'group': 'Gala Amália Rodrigues',
    'venue': 'Campo Pequeno',
    'id': '1192'
  },
  {
    'date': '15/05/2008',
    'medium': 'Correio da Manhã',
    'title': 'Elizabete Matos é atracção em ´Tosca´',
    'group': 'Ópera de Antuérpia',
    'venue': 'Teatro S. Carlos',
    'id': '1193'
  },
  {
    'date': '15/06/2008',
    'medium': 'Correio da Manhã',
    'title': 'Cinco Romeus em Sintra',
    'group': 'Maribor Ballet',
    'venue': 'Festival de Sintra',
    'id': '1194'
  },
  {
    'date': '05/09/2008',
    'medium': 'Correio da Manhã',
    'title': 'Mariza fecha Bienal de Dança de Lyon',
    'group': 'Bienal de Dança de Lyon',
    'venue': 'Lyon',
    'id': '1195'
  },
  {
    'date': '21/09/2008',
    'medium': 'Correio da Manhã',
    'title': 'Maria João Pires no CCB',
    'group': 'Maria João Pires e Companhia',
    'venue': 'CCB',
    'id': '1196'
  },
  {
    'date': '28/09/2008',
    'medium': 'Correio da Manhã',
    'title': 'Paulo de Carvalho dá clássicos ao público',
    'group': 'Paulo de Carvalho',
    'venue': 'Centro Cultural Olga Cadaval',
    'id': '1197'
  },
  {
    'date': '04/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Duas horas de beleza a cavalo',
    'group': 'Cavalia',
    'venue': 'Passeio Marítimo de Algés',
    'id': '1198'
  },
  {
    'date': '06/10/2008',
    'medium': 'Correio da Manhã',
    'title': '"Os meus quadros não são simpáticos"',
    'group': 'Paula Rego',
    'venue': 'Algés',
    'id': '1199'
  },
  {
    'date': '12/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Uma surpresa que veio da ´Terra Prometida´',
    'group': 'Noa',
    'venue': 'CCB',
    'id': '1200'
  },
  {
    'date': '18/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Uma noite mágica de Juliette Gréco',
    'group': 'Juliette Gréco',
    'venue': 'CCB',
    'id': '1201'
  },
  {
    'date': '20/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Deolinda motiva petição inédita',
    'group': 'Deolinda',
    'venue': 'Aula Magna',
    'id': '1202'
  },
  {
    'date': '20/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Emoção no fecho de Maria Callas',
    'group': 'Exposição sobre a cantora',
    'venue': 'Museu da Electricidade',
    'id': '1203'
  },
  {
    'date': '23/10/2008',
    'medium': 'Correio da Manhã',
    'title': '´Monstros´ do metal fazem festa lisboeta',
    'group': 'Digressão "Priest Feast"',
    'venue': 'Pavilhão Atlântico',
    'id': '1204'
  },
  {
    'date': '24/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Lenda viva cubana enche Aula Magna',
    'group': 'Omara Portuondo',
    'venue': 'Aula Magna',
    'id': '1205'
  },
  {
    'date': '26/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Deficientes em palco juntam arte e emoção',
    'group': 'My dream',
    'venue': 'Coliseu de Lisboa',
    'id': '1206'
  },
  {
    'date': '31/10/2008',
    'medium': 'Correio da Manhã',
    'title': 'Carlos do Carmo a fazer de Sinatra',
    'group': 'Orquestra Count Basie',
    'venue': 'Campo Pequeno',
    'id': '1207'
  },
  {
    'date': '24/11/2008',
    'medium': 'Correio da Manhã',
    'title': 'Presidente condecora artista Armando Jorge',
    'venue': 'Teatro S. Carlos',
    'id': '1208'
  },
  {
    'date': '24/11/2008',
    'medium': 'Correio da Manhã',
    'title': '´Quebra-Nozes´em reposição no Teatro S. Carlos',
    'group': '´Quebra-Nozes´',
    'venue': 'Teatro S. Carlos',
    'id': '1209'
  },
  {
    'date': '26/11/2008',
    'medium': 'Correio da Manhã',
    'title': 'Katia Guerreiro em noite recheada de emoções',
    'group': 'Katia Guerreiro',
    'venue': 'Tivoli',
    'id': '1210'
  },
  {
    'date': '28/11/2008',
    'medium': 'Correio da Manhã',
    'title': 'Cesária Évora volta a Lisboa',
    'group': 'Cesária Évora',
    'venue': 'Cinema S. Jorge',
    'id': '1211'
  },
  {
    'date': '01/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Fado, família e Lisboa em festa',
    'group': 'Carlos do Carmo',
    'venue': 'Pavilhão Atlântico',
    'id': '1212'
  },
  {
    'date': '02/12/2008',
    'medium': 'Correio da Manhã',
    'title': '"A solo só no momento certo"',
    'group': 'Olga Roriz',
    'id': '1213'
  },
  {
    'date': '07/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Músicas preciosas e momentos doces',
    'group': 'Maria João e Mário Laginha',
    'venue': 'CCB',
    'id': '1214'
  },
  {
    'date': '09/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Amélia Muge entre a festa e a emoção',
    'group': 'Amélia Muge',
    'venue': 'CCB',
    'id': '1215'
  },
  {
    'date': '09/12/2008',
    'medium': 'Correio da Manhã',
    'title': '"Portugal é um lugar excitante para tocar"',
    'group': 'Gogol Bordello',
    'venue': 'Campo Pequeno',
    'id': '1216'
  },
  {
    'date': '13/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Fados de Amália trazem Olympia para Lisboa',
    'group': '(vários artistas)',
    'venue': 'Campo Pequeno',
    'id': '1217'
  },
  {
    'date': '14/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Homenagem á baliarina Isabel Queiroz',
    'group': 'exposição de homenagem',
    'venue': 'Centro de Dança de Oeiras',
    'id': '1218'
  },
  {
    'date': '16/12/2008',
    'medium': 'Correio da Manhã',
    'title': '"Os meus concertos precisam de ter vida"',
    'group': 'Concha Buika',
    'id': '1219'
  },
  {
    'date': '18/12/2008',
    'medium': 'Correio da Manhã',
    'title': 'Flamenco de fusão chora na voz de Concha Buika',
    'group': 'Concha Buika',
    'venue': 'CCB',
    'id': '1220'
  },
  {
    'date': '25/02/2009',
    'medium': 'Correio da Manhã',
    'title': 'Campo Pequeno volta a receber Ápassionata´',
    'group': 'Apassionata',
    'venue': 'Campo Pequeno',
    'id': '1221'
  },
  {
    'date': '01/03/2009',
    'medium': 'Correio da Manhã',
    'title': 'Um desfile de raças e escolas equestres',
    'group': 'Apassionata',
    'venue': 'Campo Pequeno',
    'id': '1222'
  },
  {
    'date': '15/03/2009',
    'medium': 'Correio da Manhã',
    'title': 'Trio azul traz riso e música ao palco',
    'group': 'Blue Man Group',
    'venue': 'Casino de Lisboa',
    'id': '1223'
  },
  {
    'date': '25/03/2009',
    'medium': 'Correio da Manhã',
    'title': 'Pouca ´Copélia´',
    'group': '´Copélia´',
    'venue': 'CNB',
    'id': '1224'
  },
  {
    'date': '30/03/2009',
    'medium': 'Correio da Manhã',
    'title': 'Loucura e sangue',
    'group': '"Salomé"',
    'venue': 'Teatro S. Carlos',
    'id': '1225'
  },
  {
    'date': '23/05/2009',
    'medium': 'Correio da Manhã',
    'title': 'Gerações do fado enchem Casino',
    'group': 'Grande Gala do Fado Carlos Zel',
    'venue': 'Casino do Estoril',
    'id': '1226'
  },
  {
    'date': '06/06/2009',
    'medium': 'Correio da Manhã',
    'title': 'Primerira vez em grande',
    'group': 'Javier Barón',
    'venue': 'Aula Magna',
    'id': '1227'
  },
  {
    'date': '07/06/2009',
    'medium': 'Correio da Manhã',
    'title': 'Rodrigo Leão encanta Estoril',
    'group': 'Rodrigo Leão Cinema Ensemble',
    'venue': 'Casino Estoril',
    'id': '1228'
  },
  {
    'date': '27/06/2009',
    'medium': 'Correio da Manhã',
    'title': 'Maria da Fé enche Coliseu',
    'group': 'Tributo a Maria da Fé',
    'venue': 'Coliseu de Lisboa',
    'id': '1229'
  },
  {
    'date': '12/07/2009',
    'medium': 'Correio da Manhã',
    'title': 'Caldas devolve dez mil',
    'group': '(sobre Ana Caldas)',
    'id': '1230'
  },
  {
    'date': '21/12/2009',
    'medium': 'Correio da Manhã',
    'title': 'Campo de vozes grandes',
    'group': 'Concerto de natal-vários artistas',
    'venue': 'Campo Pequeno',
    'id': '1231'
  },
  {
    'date': '08/02/2010',
    'medium': 'Correio da Manhã',
    'title': 'Rão Kyao com fado no CCB',
    'group': 'Rão Kyao',
    'venue': 'CCB',
    'id': '1232'
  },
  {
    'date': '03/05/2010',
    'medium': 'Correio da Manhã',
    'title': 'Ney exibicionista mas rigoroso',
    'group': 'Ney Matogrosso',
    'venue': 'Coliseu dos Recreios',
    'id': '1233'
  },
  {
    'date': '10/05/2010',
    'medium': 'Correio da Manhã',
    'title': 'Ritmos africanos aquecem Coliseu',
    'group': 'Cesária Évora e Bonga',
    'venue': 'Coliseu dos Recreios',
    'id': '1234'
  },
  {
    'date': '29/11/2010',
    'medium': 'Correio da Manhã',
    'title': '"Alimento-me de influências"',
    'group': 'Joaquín Cortés',
    'id': '1235'
  },
  {
    'date': '02/12/2010',
    'medium': 'Correio da Manhã',
    'title': 'Noite de festa com amigos e cúmplices de Rodrigo',
    'group': '"50 anos de Fado" de Rodrigo',
    'venue': 'Teatro S. Luiz',
    'id': '1236'
  },
  {
    'date': '13/03/2011',
    'medium': 'Correio da Manhã',
    'title': 'Maria Gadú encanta CCB',
    'group': 'Maria Gadú',
    'venue': 'CCB',
    'id': '1237'
  },
  {
    'date': '18/04/2011',
    'medium': 'Correio da Manhã',
    'title': 'Ana Moura dá novo ritmo ao fado',
    'group': 'Ana Moura',
    'venue': 'Coliseu de Lisboa',
    'id': '1238'
  },
  {
    'date': '22/04/2207',
    'medium': 'Correio da Manhã',
    'title': 'Plácido não canta devido a catarro',
    'group': 'Plácido Domingo',
    'venue': 'Pavilhão Atlântico',
    'id': '1239'
  },
  {
    'medium': 'Algarve Hoje',
    'title': 'Por terras de além-mar - S. Miguel',
    'id': '0'
  },
  {
    'medium': 'Independente',
    'title': 'Chuva de subsídios II',
    'venue': 'Lisboa',
    'id': '1'
  },
  {
    'title': 'Textos para programas',
    'group': '<ul><li>Ballet Gulbenkian</li><li>Companhia Nacional de Bailado</li><li>CêDêCê - Companhia de Dança Contemporânea</li><li>Companhia de Dança de Évora</li><li>Companhia de Dança Vórtice</li><li>Centro Cultural de  Belém - Homenagem a Graça Barroso</li><li>Lisboa Ballet Contemporâneo</li><li>Companhia de Dança de Sintra</li><li>CriaDança</li><li>Teatro da Trindade - Margie Gillis</li><li>White Oak Dance Project - Mikhail Baryshnikov</li><li>Teatro da Trindade - S.O.A.P. Rui Horta</li><li>Teatro S. Luiz - Gala Internacional Carlos Trincheiras</li><li>Auditório Municipal Eunice Muñoz</li><li>Cine-Teatro Louletano</li><li>Nederlans Dans Theater III</li><li>Academia de  Bailado do Porto</li><li>ACARTE</li><li>Secretaria de Estado da Cultura/UNESCO</li><li>Grupo Studium - Margarida de Abreu</li><li>Batoto Yetu-Portugal</li><li>Uma água brilhante</li><li>etc.</li></ul>',
    'id': '2'
  }
]

export default articles
