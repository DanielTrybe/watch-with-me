# Projeto Vamos assistir juntos

Clique e veja a prévia da aplicação.
[![explorer_W000nMs3SS](https://user-images.githubusercontent.com/78499630/196059996-43aac62f-219f-4184-a780-000e75f9dd21.png)](https://www.youtube.com/watch?v=ni3g_sesykc)

<code><img height="50" src="https://blog.4linux.com.br/wp-content/uploads/2018/01/Heroku.png"></code><a href="https://vamos-ver-juntos.herokuapp.com/">Clique aqui para visualizar no HEROKU</a>

## Vamos assistir juntos

1. Aqui você pode assistir com as pessoas que entrarem na sala e comentar sobre o video em tempo real!
2. É possível pausar o vídeo para todas pessoas e também avançar ou retroceder, todos vão assistir juntos!
3. escolha novos vídeos para continuar assistindo juntos!

## Principais tecnologias utilizadas

<code><img height="30" src="https://bognarjunior.files.wordpress.com/2018/09/typescript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="30" src="https://v4.mui.com/static/logo.png"></code>

# Iniciando

1. VS code instalado, caso não tenha <a href="https://code.visualstudio.com/download">clique aqui para instalar</a> .
2. Tenha o git instalado em sua máquina, caso não tenha <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">clique aqui para instalar</a> .
3. Em seu Github crie um repositório vazio, caso não saiba <a href="https://docs.github.com/pt/get-started/quickstart/create-a-repo">clique aqui para criar</a> .

## Exemplo de como usar

Caso não deseje ter um repositório no seu GitHub, apenas faça o clone.
Criando uma nova pasta do projeto:

Windows:

1. Crie uma nova pasta em algum local que deseja.
2. Abra o terminal do GitBash dentro da pasta criada, depois de entrar nela clique com botão direito, a opção vai aparecer.
3. Copie esta linha: <code>git clone https://github.com/DanielTrybe/watch-with-me.git</code> e tecle enter.
4. Entre na pasta com <code>cd nome-da-pasta</code>
5. Execute <code>git remote remove origin</code>
6. Pegue o link do seu respositório criado no inicio!
7. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
8. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
9. Execute <code>code .</code>

Linux:

1. Abra o terminal do linux e navegue até a pasta que deseja.
2. Copie esta linha: <code>git clone https://github.com/DanielTrybe/watch-with-me.git</code> e tecle enter.
3. Entre na pasta com <code>cd nome-da-pasta</code>
4. Execute <code>git remote remove origin</code>
5. Pegue o link do seu respositório criado no inicio!
6. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
7. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
8. Execute <code>code .</code>

Com isto inicializamos um novo repositório, associamos o remoto com o link do repositório e atualizamos a pasta.

## Segunda parte

1. Abra o VS code, vá em arquivos e procure a pasta do projeto.
2. Clique no menu terminal e depois em novo terminal, execude o comando: <code>npm install</code>
3. Não interrompa a instalação, ou terá que executar o comando acima novamente.

## Terceira parte

1. Após instalar tudo com npm install, vá na pasta context e altere as constantes do socket para <code>const socket = io("http://localhost:5000")</code>, pois o socket vai rodar localmente agora
2. na pasta <code>src/server/server.js</code> comente a linha 16 (app.use(express.static(\_\_dirname + "/../../build")))
3. no packedjson altere o script: start para <code>"start": "react-scripts start"</code>
4. Após tudo feito, execute no terminal: <code>node src/server/server.js</code>
5. Depois <code>npm start</code> e aguarde um pouco, dependendo da sua máquina pode levar algum tempo.
6. Quando terminar, será aberto em seu navegador o website.
7. Pronto! A aplicação está pronta para uso!

# Conteúdo otimizado para Desktop e Smartphone

## Página inicial

1. Faça o login e escolha um avatar, lembrando que devem ser link válidos de imagens, por exemplo:
   <code>https://img.ibxk.com.br/2017/07/13/13160112901226.jpg</code>

### Estrutura

O código contém a seguinte estrutura:

```
  src
  |  |-__tests__
  |  |-components
  |  |-hooks
  |  |-images
  |  |-server
  |  |-pages
  |  |-routes
  |  |-context
  |  |-templates
```
