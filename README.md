# Data Lovers
Junto ao aumento do uso de veículos surge a necessidade de melhores sistemas de segurança automotiva. Novas tecnologias são criadas para esse fim, e dados estatísticos das vítimas de acidentes são impreteríveis para o desenvolvimento desses novos produtos. Nossas personas perceberam que encontrar os dados estatísticos necessários para trabalhar em seus projetos era um grande desafio pois estavam espalhados em diversos meios de comunicação e apresentados de forma confusa. 

---
## Resumo do projeto
Nossa empresa entrega dados estatísticos de pessoas feridas por meio de transporte nos USA. O cliente recebe acesso a uma página web de interface simples que contém todos os dados necessários para o seu projeto. Eles podem ser filtrados por tipo de veículo e intervalo de ano, e ordenados por ano e quantidade de vítimas.

Para desenvolver a interface trabalhamos na criação de dois protótipos e baseado nos resultados da fase de teste unimos o que melhor funcionou para criar o protótipo final. Como característica principal definimos trabalhar todas as informações em apenas uma página para que o usuário tenha uma resposta mais rápida das informações que procura e usamos filtros de fácil acesso.

A implementação da interface se deu usando HTML semântico, e CSS para o design. Incorporamos ao Javascript um API .json para executar os dados de pesquisa e possibilitar a filtragem, ordenação, e cálculo de estatística. 


---
## Usuário | Persona
Como usuário do nosso produto definimos *Startups* de tecnologia focadas em desenvolvimento de produtos de segurança para o transporte, como sensores, *airbags* e outros. Elas buscam a quantidade de acidentes causados por meio de transportes terrestres nos EUA e usam nossa plataforma para coleta de estatísticas através de listas e gráficos.
Assim, foram criadas 2 personas que usariam nossa plataforma para essas empresas:

![Personas-Robert-Ellen](persona-data-lovers.jpg)

---
## Protótipo | Teste de usabilidade
Para ter uma melhor resposta do retorno da usabilidade, fizemos 2 protótipos, que foram testados por 5 usuários cada, e recebemos alguns *feedbacks* sobre as opções.

### Protótipo 1
![Protótipo-1](prototipo1-data-lovers.jpg)

>*Feedbacks* - o passo a passo facilita entender como pesquisar, mas ao mesmo tempo torna muito infantil. A mudança de tela fica estranha pois o gráfico muda de posição e a busca fica muito estreita. As informações ficam muito coladas na segunda tela.

### Protótipo 2
![Protótipo-2](prototipo2-data-lovers.jpg)

>*Feedbacks* - a tela única deixa mais simples de entender, mas as informações laterias estão um pouco confusas. A busca está muito complicada de entender, não deixando muito claro onde clicar.

###Protótipo Final
[link para teste](https://marvelapp.com/b2e0160/)
![Protótipo-final](prototipofinal-data-lovers.jpg)

>Juntamos os pontos positivos dos dois protótipos e resultamos em uma página só, com a busca facilitada na parte debaixo.

---
## Hacker Edition
* Carregar arquivo .json com o uso de fetch()
* Visualizações gráficas usando bibliotecas [Chart.js](https://www.chartjs.org/) ou [Google Charts](https://developers.google.com/chart/)