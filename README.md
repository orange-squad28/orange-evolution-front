# Orange Evolution FRONT-END

Front desenvolvido durante o Hackathon - Programa de Formação <Season4 -2022> com o objetivo de apresentar ao usuário uma um plataforma de estudos intuitiva, que mede a sua performace, contudo fazendo a conectividade da Api com o banco de dados  

# Para rodar no seu computador basta seguir esse passo a passo.

## Tutorial

### Primeiro de tudo clone o reporitorio para a sua maquina
#### Listar Todos os Administradores

```http
  git clone https://github.com/orange-squad28/orange-evolution-front.git
```
#### Após isso abra a pasta do projeto e abra o github, feito isso confira se você esta mesmo na pasta do projeto

![image](https://user-images.githubusercontent.com/102185386/201819607-d61132ec-eed9-4352-bc68-3a137e27aaab.png)

#### Após isso abra a pasta do projeto e abra o github, feito isso confira se você esta mesmo na pasta do projeto
#### Se você estiver de o comando a baixo no terminal para baixar as dependências do projeto
```http
yarn
```
#### Após concluir a instalação das dependências é só abrir o projeto com o comando 👇abaixo👇 e aproveitar a experiência
```http
yarn dev
```
# Orange Evolution Front-end

Front desenvolvido durante o Hackathon - Programa de Formação <Season4 -2022> com o objetivo de apresentar aos usuários uma um plataforma de estudos intuitiva, que mede a sua performace, Após o cadastro o mesmo podendo logar (em futuras features) com isso o mesmo poderá navegar pela plataforma em seguida escolher a/as trilha/as de sua prêferencia e assim podendo aprender vendo sua performance oque de fato irá insentivar muito o a sua vontade de aprender

### Hospedado no Heroku em:

https://orange-node-api.herokuapp.com/


## Front Reference

### Funcionalidades já adicionadas

#Paginas/Clicks funcionais

-Home: o mesmo irá te levar para a página de apresentação da Orange Juice que irá falar brevemente sobre a mesma e irá apresentar as principais trilhas, com api já preparada para eventuais atualizações e mostrara as midias sociais da Orange um pouco mais a baixo

-Trilhas: as trilhas abrirá um menu com três trilhas as principais do oraneg, dependendo do usuário logado, se o mesmo for um admin irá entrar em uma página para administrar as trilhas, já se for um usuário irá aparecer as trilhas de sua preferência(Este sistema de validação foi feito pelo local storage, sabemos que não nem perto do mais correto a ser feito, mas pela falta de tempo e entregarmos o MVP decidimos fazer desse jeito. Em features futuras será adicionado essa válidação pelo back-end e a parte usuários do banco de dados trabalhará junto mas com uma váriavel booleana para identificar se o mesmo é um adm ou um aluno)

-Sobre a Orange: Levará você diretamente até o sobre que está na home

-Cadastro seguindo o botão de cadastro, como o nome já diz lá o usuário irá se cadastrar como aluno(aprender) ou admin(ensinar)
--O aluno conseguirá escolher a trilha de sua prêferencia para estudar e tambem conseguirá ver sua performace
--O admin conseguirá colocar e excluir cursos e trilhas e também conseguirá ver estátisticas dos alunos, que concluiram o curso...(em futuras features) 


### Futuras Features

-Por falta de planejamento antecipado não conseguimos adicionar todas as features desejadas então deixaremos aqui umas ideias adicionais para colocarem no projeto e finaliza-lo😁😁

--Login com validaçãp no back
--CRUD das trilhas e cursos, no back já está implementado, falta a implementação do front

## Autores

- [Charles Eduardo](https://www.github.com/EduardoMG12);
- [Jade Figueredo](https://github.com/jadefigueredo)
- [Maria Amanda Freitas](https://www.github.com/amandaafreitas)
- [Rodrigo Alexandre](https://www.github.com/narradorww);
