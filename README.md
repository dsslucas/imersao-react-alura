# Projeto AluraCord

Elaborado pela imersão React, proporcionado pela [Alura](https://www.alura.com.br/).

## Professores 👨🏽‍🏫
- [Mario Souto](https://www.linkedin.com/in/omariosouto/)
- [Paulo Silveira](https://www.linkedin.com/in/paulosilveira/)

## Projeto 🖱️
Clique [aqui](https://imersao-react-alura-phi.vercel.app/)
![Pagina inicial](/img/paginaInicial.png)
![Chat](/img/paginaChat.png)

## Tecnologias utilizadas 💻
- Next.js
- React.js
- HTML5, CSS3

### Extensões e outros packages utilizados 🔧
- Styled-jsx (para não dar conflito no CSS)
- MaterialUI
- Coolors (para gerar paleta de cores)
- SkynexUI (PARA gerar icones e responsividade)
- Publicação via Vercel (criadora do Next.js)
- Font Awesome (icone da lixeira)
- Supabase (banco de dados)

## Configuração inicial
- Clone o projeto com ```git clone```
- Acesse o terminal e digite ```npm i``` para baixar todas as dependências de acordo com o package.json
- Após ter instalado as dependências, digite no terminal ```npm run dev``` para executar a aplicação

## Funcionalidades ⚙️
- Exibe o nickname e foto com base nos dados do GitHub ✔️
- Envia e deleta mensagens ✔️
- Apenas entra no chat quem tiver usuário válido no GitHub ✔️

### Aviso ⚠️
A configuração para o banco de dados está oculta por questões de segurança. Através do Supabase, configure as variáveis de ambiente ```SUPABASE_URL``` e ```SUPABASE_ANON_KEY``` com as chaves e a URL informada pelo banco.