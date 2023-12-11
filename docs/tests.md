# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seus dados
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a recomendação do filme.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Inserir preferêcias para a recomedação**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, país, indicado ou não ao óscar e ator para gerar a recomendação.
**Requisitos associados** | RF-002
**Resultado esperado** | Inserção das preferências do usuário
**Dados de entrada** | Selecionar a opção desejda no formulário de preferências.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Favoritar filme**
 :--------------: | ------------
**Procedimento**  | 1) Usuário coloca um filme na lista de favoritos.
**Requisitos associados** | RF-008
**Resultado esperado** | Favoritar um filme, adicionado-o a sua lista de favoritos.
**Dados de entrada** | Selecionar se o filme é ou não favorito.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção apresenta as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 - Usuários fazem o seu cadastro.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Selecionar preferências*                                         |
|---|---|
|Requisito Associado | RF-002 - Usuários selecionam a sua preferêcia para gerar a recomedação.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*TC-03 - Favoritar um filme*                                         |
|---|---|
|Requisito Associado | RF-007 - Usuários adicionam um filme a sua lista de favoritos.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

## Avaliação dos Testes de Software

Os resultados dos testes na aplicação foram todos com sucesso. Otimizamos a aplicação afim de facilitar para o usuário na hora de gerar a recomendação do filme, com isso, removemos a funcionalidade RF-005 e mantivemos todas as outra. 


## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que gosta de filmes de terror. |
| 2             | Você é uma pessoa que deseja assistir filmes com o ator Tom Holland. |
| 3             | Você é uma pessoa que gosta de filmes de romance. |

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que gosta de filmes de terror dos anos 2000.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 02.73 segundos                  |
| 2       | SIM             | 5                    | 02.81 segundos                  |
| 3       | SIM             | 5                    | 02.65 segundos                  |
| 4       | SIM             | 5                    | 02.56 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 02.68 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 02.73 segundos |


    Comentários dos usuários: Achei o site muito bom e fácil de usar, cumpriu muito bem com a minha solicitação.


Cenário 2: Você é uma pessoa que deseja assistir filmes com o ator Tom Holland.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 01.88 segundos                          |
| 2       | SIM             | 5                    | 01.75 segundos                          |
| 3       | SIM             | 5                    | 01.80 segundos                          |
| 4       | SIM             | 5                    | 01.82 segundos                          |
| **Média**     | 100%           | 5                | 01.81 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 01.80 segundos |


    Comentários dos usuários: O site é fácil de usar, e muito rápido, otimiza tempo na hora de escolher um filme.

Cenário 3: Você é uma pessoa que gosta de filmes de romance.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 01.49 segundos                          |
| 2       | SIM             | 4                   | 01.55 segundos                          |
| 3       | SIM             | 5                    | 01.43 segundos                          |
| 4       | SIM             | 5                    | 01.25 segundos                          |
| **Média**     | 95%           | 4,75                | 01.43 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 01.43 segundos |

    Comentários dos usuários: O site cumpre com a proposta, mas senti falta de mais recomendações.
    
## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos que todos realizam a sua função com praticamente o mesmo tempo e de forma muito rápida.
