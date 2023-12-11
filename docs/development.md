# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.
## Exemplos 
![Tela de login](img/telaLoginapp.png)
![Tela do questionário](img/telaQuestionarioapp.png)
![Tela recomendação](img/telaRecomendaçãoapp.png)
![Tela detalhes](img/telaDetalhesapp.png)
![Tela Perfil do usuário](img/telaperfilapp.png)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Artefato Criado |
|------|-----------------------------------------|----| ----|
|RF-001| O usuário poderá criar uma  conta inserindo seus dados. | ALTA | login.js |
|RF-002| O usuário poderá selecionar a década e o gênero de preferência, deixando que o aplicativo selecione aleatoriamente o filme, ou poderá preencher um formulário antes, deixando o aplicativo gerar um filme de acordo com as preferências do usuário. | ALTA | Telaquestionario.html |
|RF-003| O aplicativo vai usar as preferências do usuário para recomendar um filme. | MÉDIA | script.js |
|RF-004| Ao exibir o filme recomendado, o aplicativo deverá também exibir foto de capa do filme, além de uma sinopse e classificação. | MÉDIA | telaFilme.html |
|RF-006| Os usuários poderão visualizar detalhes do filme, exemplo: diretor, elenco, etc. | BAIXA | telaFilme.html |
|RF-007| Os usuários poderão deixar uma classificação e comentários sobre o filme assistido, auxiliando outros usuários na hora de escolher. | MÉDIA | telaFilme.html |
|RF-008| Os usuários poderão favoritar os filmes e acessar o histórico dos filmes já vistos ou pesquisados. | BAIXA | telaPerfil.html |

## Descrição das estruturas:

## Tela login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Email          | Texto             | Email do usuário                          | magynifico.kkskj@gmail.com                     |
| Senha          | Texto             | Senha do usuário                          | ana1212                                        |
| Entrar         | Botão             | Entrar na conta                           | "Entrar"                                       |
| Cadastrar      | Botão             | Criar uma conta                           | "Regsitrar"                                    |

## Tela questionário
|  **Nome**          | **Tipo**          | **Descrição**                                     | **Exemplo**                                    |
|:------------------:|-------------------|---------------------------------------------------|------------------------------------------------|
| Gênero             | Botão             | Gêneroes escolhido pelo usuário                   | Terror                                         |
| País               | Botão             | País escolhido pelo usuário                       | Brasil                                         |
| Indicado ao óscar  | Botão             | Indicado ao não ao óscar  escolhido pelo usuário  | Sim                                            |
| Ator               | Botão             | Ator escolhido eplo usuário                       | Tom Holland                                    |

## Tela recomendação
|  **Nome**          | **Tipo**          | **Descrição**                                     | **Exemplo**                                    |
|:------------------:|-------------------|---------------------------------------------------|------------------------------------------------|
| Nome do filme      | Texto             | Nome do filme recomendado                         | A culpa é das estrelas                         |
| Capa do filme      | Imagem            | Capa do filme recomendado                         | Imagem X                                       |

## Tela detalhes
|  **Nome**          | **Tipo**          | **Descrição**                                     | **Exemplo**                                    |
|:------------------:|-------------------|---------------------------------------------------|------------------------------------------------|
| Título             | Texto             | Título do filme                                   | Terror                                         |
| Capa do filme      | Imagem            | Capa do filme                                     | Brasil                                         |
| Favoritar          | Botão             | Colocar o filme na lista de favoritos             | "Favoritar"                                    |

## Tela perfil do usuário
|  **Nome**          | **Tipo**          | **Descrição**                                     | **Exemplo**                                    |
|:------------------:|-------------------|---------------------------------------------------|------------------------------------------------|
| Nome               | Texto             | Nome do usuário                                   | Ana                                            |
| Email              | Texto             | Email do usuário                                  | magynifico.kkskj@gmail.com                     |
| Favoritos          | Imagem            | Lista de filmes favoritos do usuário              | "Lista do usuário"                             |



