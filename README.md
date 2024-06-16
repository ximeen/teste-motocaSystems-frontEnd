
<br />
<div align="center">
  <a href="https://github.com/ximeen/teste-motocaSystems-frontEnd">
    <img src="public/readmeImages/logoMotoca.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MotocaDevs</h3>

  <p align="center">
    Projeto de integração a equipe de devs motoca.
    <br />
  
  </p>
</div>

<details>
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#criado-com">Criado com</a></li>
        <li><a href="#responsivo">Responsivo</a></li>
        <li><a href="#validações-dos-formulários">Validações dos formulários</a></li>
        <li><a href="#página-de-erro">Página de error 404</a></li>
      </ul>
    </li>
    <li>
      <a href="#como-começar">Como começar</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#como-baixar-e-instalar">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contatos">Contatos</a></li>
  </ol>
</details>

### Criado com

* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Tailwindcss][Tailwindcss]][Tailwindcss-url]
<!-- * [![Zod][Zod]][Zod-url]
* [![ReactQuery][ReactQuery]][ReactQuery-url] -->



## Sobre o projeto
![página inicial do projeto][homepage-screenshot]

Esta é a página inicial do projeto de teste da honda, feito com base no design disponibilizado no figma, foi utilizado reaproveitamento de componentes como o Header, como é comum em todas as rotas, modifica apenas o conteúdo, não sendo necessario recarregar os componentes da aplicação.

<strong > `OBS: Foi colocado um delay na requisição de delete para ficar visível a animação de loading ao deletar um item.` </strong >

## Responsivo
![página inicial do projeto responsiva][homepageResponsive-screenshot]

Como atualmente dispositivos mobile são constantemente utilizados, tomei liberdade para adaptar o projeto para uma versão mobile, utilizando da responsividade.

<p align="right">(<a href="#criado-com">Voltar ao topo</a>)</p>


## Validações dos formulários
![página inicial do projeto responsiva][formValidations]
  Como os formulários são iguais nas duas páginas, foi componentizado, todos os inputs são validados e tipados para aceitar apenas dados corretos, e para o registro de novas motos, não é possível cadastrar uma moto com um código já existente.

## Página de erro 
![página de error404][error404Page-screenshot]

Criado uma página de error para caso o usuário tente acessar uma url que não existe.

## Loading de carregamento

![loading de error][loadingErrorPage-gif]

Para caso a aplicação não consiga carregar os dados da API, foi feito um loading e após a tentativa e ocorrer um erro disparado a aplicação aparece a mensagem de que não foi possível carregar os dados. 


<p align="right">(<a href="#criado-com">Voltar ao topo</a>)</p>


<!-- GETTING STARTED -->
## Como começar

Abaixo são algumas instruções de como baixar e configurar o projeto para rodar localmente na sua maquina.

### Pré-requisitos

Ter o node 20 instalado na maquina, abaixo como baixar nos principais sistema operacional.
* macOs
  ```sh
    brew install node@20
  ```
* Windows
  ```sh
    choco install nodejs-lts --version="20.14.0"
  ```
* Linux
  ```bash
    <!-- Baixe o nvm -->
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    <!-- Baixe o node especificando a versão -->
      nvm install 20
  ```

### Como baixar e instalar

1. Faça o clone do projeto para a pasta que deseja
   ```sh
   git clone https://github.com/ximeen/teste-motocaSystems-frontEnd.git
   ```
   ou se tiver o github CLI
   ```sh
   gh repo clone ximeen/teste-motocaSystems-frontEnd
   ```

2. Instale as dependências
   ```sh
   npm install
   ```
3. Rode o comando abaixo para rodar a API fake do `Json Server`.
   ```bash
   npm run server
   ```
3. Após o server ser executado rode o comando abaixo para inicializar a aplicação.
   ```bash
   npm run dev
   ```

<!-- CONTACT -->
## Contatos

Gabiel dos Santos Ximenes Ferreira 
-  WhatsApp: [Clique](https://wa.me/+5599991035812)
-  Linkedin: [Clique](https://www.linkedin.com/in/ximenes-gabriel/)
-  Email: gabriel.ximenes.sf@gmail.com


<p align="right">(<a href="#criado-com">Voltar ao topo</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[homepage-screenshot]: public/readmeImages/homepage.png
[homepageResponsive-screenshot]: public/readmeImages/homepageResponsive.png
[error404Page-screenshot]: public/readmeImages/error404Page.png
[loadingErrorPage-gif]: public/readmeImages/loadingErrorPage.gif
[formValidations]: public/readmeImages/formValidations.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB
[Typescript-url]: https://www.typescriptlang.org/
[Tailwindcss]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwindcss-url]: https://tailwindcss.com/
[Zod]: https://img.shields.io/badge/Zod-20232A?style=for-the-badge&logo=zod&logoColor=61DAFB
[Zod-url]: https://zod.dev/
[ReactQuery]: https://img.shields.io/badge/ReactQuery-20232A?style=for-the-badge&logo=tanstack&logoColor=61DAFB
[ReactQuery-url]: https://tanstack.com/query/latest
