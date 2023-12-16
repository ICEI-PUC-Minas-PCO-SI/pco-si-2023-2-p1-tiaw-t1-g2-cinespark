# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.
## Exemplos 

![Tela de login](img/telaLoginapp.png)
![Tela questionário](img/telaQusetionarioapp.png)
![Tela recomendação](img/telaRecomendaçaoapp.png)
![Tela detalhes](img/telaDetalhesapp.png)
![Tela Perfil do usuário](img/telaperfilapp.png)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Artefato Criado |
|------|-----------------------------------------|----| ----|

|RF-001| O usuário poderá criar uma conta inserindo seus dados. | ALTA | login.js |
|RF-002| O usuário poderá visualizar seu próprio perfil com seus dados. | ALTA | telaPerfil.html |
|RF-003| O usuário poderá selecionar o gênero, país, indicado ou não ao óscar e ator/diretor de sua preferência, deixando que o aplicativo selecione aleatoriamente o filme. | ALTA | script.js |
|RF-004| O aplicativo vai usar as preferências do usuário para recomendar um filme. | MÉDIA | script.js |
|RF-005| O aplicativo exibira o filme com capa, afim de facilitar a busca pelo filme em outras plataformas. | MÉDIA | telaFilme.html |
|RF-006| Os usuários poderão favoritar os filmes. | MÉDIA | telaFilme.html |
|RF-007| O usuário poderá acessar a lista de filmes favoritos. | BAIXA | telaLogin.html |


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
| Capa do filme      | Imagem            | Capa do filme                                     | Imagem X                                       |
| Favoritar          | Botão             | Colocar o filme na lista de favoritos             | "Favoritar"                                    |

## Tela perfil do usuário
|  **Nome**          | **Tipo**          | **Descrição**                                     | **Exemplo**                                    |
|:------------------:|-------------------|---------------------------------------------------|------------------------------------------------|
| Nome               | Texto             | Nome do usuário                                   | Ana                                            |
| Email              | Texto             | Email do usuário                                  | magynifico.kkskj@gmail.com                     |
| Favoritos          | Imagem            | Lista de filmes favoritos do usuário              | "Lista do usuário"                             |

