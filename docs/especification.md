# Especificações do Projeto

A aplicação planejada tem o objetivo de simplificar e melhorar a seleção de filmes para os usuários, considerando a vasta oferta de serviços de streaming disponíveis. Para alcançar esse objetivo, a aplicação coletará informações dos usuários, permitindo assim a geração de recomendações de filmes personalizadas, alinhadas com as preferências individuais de cada usuário. Essa abordagem visa enriquecer a experiência de seleção de filmes, tornando-a mais gratificante e adaptada às necessidades de cada indivíduo.

Quanto às ferramentas de desenvolvimento e tecnologias utilizadas:

Ferramentas de Desenvolvimento:

IDE: Visual Studio Code (Vscode).
Versionamento de Código: Git.
Repositório: GitHub Classroom.
Linguagens e Tecnologias:

Front-End:

HTML e CSS.
Framework Bootstrap.
jQuery (para interatividade no front-end).
Back-End:

JavaScript.
Local Storage.
Json Server.

## Personas

1 - Nossa persona é o "Nicolas", um menino de 17 anos que é apaixonado por filmes de suspense e terror. Fascinado pelo mundo obscuro do cinema, ele busca constantemente encontrar filmes tão aterrorizantes que chegam a gelar o sangue, busca também filmes que tenha ligação uns com os outros, assim, ele se perde nos próprios pensamentos, tentando decifrar os códigos deixados de um filme pra outro. Com uma paixão pelos filmes dos anos 2000 e um gosto refinado para enredos sangrentos, Nicolas encontra no CineSpark uma solução perfeita para explorar recomendações personalizadas que atendam exatamente às suas preferências. Seja revivendo clássicos do suspense ou descobrindo enigmas dos filmes atuais de terror.

2 - Conheça Pedro, um homem de 47 anos que é um apaixonado por filmes de comédia. Ele tem uma coleção de clássicos do humor e adora descobrir novas comédias que o façam rir intensamente. Pedro é especialista em identificar o humor sutil e valoriza roteiros inteligentes por trás das risadas. Com a ajuda do CineSpark, ele encontra recomendações personalizadas que se encaixam perfeitamente em suas preferências, explorando desde os clássicos até pérolas escondidas das comédias atuais. Sua risada contagiante torna as noites de filmes entre amigos ainda mais divertidas.

3- Isadora, uma mulher de 29 anos de idade que estagia e cursa química na UFMG, e regulamente vai a igreja professar sua fé. Isadora é apaixonada por filmes de suspense de variados tipos, policial, psicológico sobretudo algo que contém muito mistério. Ama também filmes de romance, principalmente com grandes alusões históricas, porém não suporta romance adolescente. Isadora encontrará no CineSpark uma forma de se manter em dia com os filmes dos gêneros que mais ama.

4- Maria, é uma mulher de 52 anos de idade, que trabalhou a vida inteira como professora de inglês no ensino fundamental, porém está fazendo 3 meses que aposentou, e quer aproveitar o seu tempo livre passando tempo com seu marido e seus 4 filhos. Em sua casa ninguém nunca foi muito por dentro do mundo do cinema, apenas assistiam filmes que passavam na sessão da tarde, mas resolveram assinar um serviço de streaming de filmes, e não sabe qual assistir em meio de várias opções. Maria usará o CineSpark para poder ter ótimas recomendações de filmes e series baseados em seus gostos

5- Fernando um homem de 32 que curte series de suspense e animação de curta duração. Ele adora analisar quais técnicas foram utilizadas na animação pra estudos, encantado pelos roteiros de suspenses que o prende pelas pistas que instiga a pensar o motivo, quem e por que de tudo aquilo estar acontecendo no enredo. No Cine Spark Fernando encontra recomendações que atendem as suas preferências e podendo também explorar outros gêneros de series como também de filmes que podem trazer outras perspectivas de roteiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:


## Histórias de Usuários

Meu nome é Nicolas, um aficionado por filmes de terror dos anos 2000. Quando conheci o CineSpark, encontrei meu parceiro perfeito. O aplicativo me ofereceu recomendações personalizadas que me permitiram redescobrir clássicos esquecidos e novos sustos. Agora, minha busca por filmes assustadores ficou mais emocionante do que nunca! 

Eu sou o Pedro e adoro rir com filmes de comédia, mas já estava ficando sem opções. O CineSpark veio ao meu resgate! Com suas recomendações personalizadas, encontrei uma lista interminável de comédias que nunca tinha visto. Agora, minhas noites são repletas de risadas graças a este aplicativo incrível! 

Meu nome é Isadora e sou uma cinéfila apaixonada por diversos gêneros. O CineSpark é como um tesouro para mim. Ele me fornece recomendações personalizadas de filmes, permitindo que eu explore meus gêneros favoritos enquanto filtro aqueles que não se encaixam no meu gosto. Agora, minhas noites de cinema são sempre emocionantes e sem decepções graças a este aplicativo incrível! 

Meu nome é Maria, e adoro assistir filmes em família com meu marido e filhos. O CineSpark se tornou nosso melhor amigo quando se trata de escolher o filme perfeito para todos nós. Suas recomendações personalizadas levam em consideração nossos gostos variados, e agora nossas noites de cinema são cheias de diversão e harmonia. Este aplicativo nos ajudou a criar memórias especiais juntos! 

Meu nome é Fernando, e sempre fui um fã de filmes de ação e ficção científica. No entanto, senti que estava preso em uma bolha de gêneros similares. O CineSpark expandiu meus horizontes ao me oferecer recomendações personalizadas de gêneros que não costumo assistir. Agora, descubro filmes que me proporcionam novas perspectivas de roteiros e enriquecem minha experiência cinematográfica. Este aplicativo me ajudou a diversificar meu gosto e apreciar o cinema de uma maneira totalmente nova! 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O usuário poderá criar uma  conta inserindo seus dados. | ALTA | |
|RF-002| O usuário poderá selecionar a década e o gênero de preferência, deixando que o aplicativo selecione aleatoriamente o filme, ou poderá preencher um formulário antes, deixando o aplicativo gerar um filme de acordo com as preferências do usuário. | ALTA | |
|RF-003| O aplicativo vai usar as preferências do usuário para recomendar um filme. | MÉDIA | |
|RF-004| Ao exibir o filme recomendado, o aplicativo deverá também exibir foto de capa do filme, além de uma sinopse e classificação. | MÉDIA | |
|RF-005| O aplicativo deverá mostrar onde o filme está disponível para transmissão, exemplo: Star+, Amazon, etc. | MÉDIA | |
|RF-006| Os usuários poderão visualizar detalhes do filme, exemplo: diretor, elenco, etc. | BAIXA | |
|RF-007| Os usuários poderão deixar uma classificação e comentários sobre o filme assistido, auxiliando outros usuários na hora de escolher. | MÉDIA | |
|RF-008| Os usuários poderão favoritar os filmes e acessar o histórico dos filmes já vistos ou pesquisados. | BAIXA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança: Os dados pessoais cadastrados pelos usuários serão protegidos por medidas de segurança adequadas. | ALTA |
|RNF-002| Desempenho: O aplicativo será rápido na hora de fornecer as recomendações, mesmo para grande volume de dados. | ALTA |
|RNF-003| Disponibilidade: O aplicativo estará sempre disponível, com tempo mínimo de inatividade, seja para manutenção. | ALTA |
|RNF-004| Usabilidade: O aplicativo será fácil de usar e acessível, para evitar problemas no momento das recomendações. | MÉDIA |
|RNF-005| Escalabilidade: O aplicativo poderá funcionar sem perda de desempenho em caso de aumento de filmes ou usuários. | ALTA |
|RNF-006| Compatibilidade com Dispositivos: O aplicativo será compatível com vários tipos de dispositivos. | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

