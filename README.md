# PlayStation 2 — Home Page 

Um website feito baseado no **PlayStation 2**, desenvolvida com HTML, CSS e JavaScript puro. O projeto consome a **RAWG Video Games Database API** para exibir informações reais sobre os jogos do catálogo do PS2.

## 📸 Preview




## Tecnologias

- **HTML5** — Estrutura e marcação semântica
- **CSS3** — Estilização, animações e layout responsivo
- **JavaScript** — Interatividade e consumo de API
- **[RAWG API](https://rawg.io/apidocs)** — Base de dados de jogos (mais de 500 mil títulos)



## Estrutura do Projeto

```
Playstation2HomePage/
├── media #Diretório com conteúdo visual da pagina
├── preview #Diretório com screenShots do site 
├── index.html    # Estrutura principal da página
├── style.css     # Estilos e animações
└── script.js     # Lógica, interatividade e integração com a RAWG API
```


## API — RAWG Video Games Database

O projeto utiliza a [RAWG API](https://rawg.io/apidocs), uma das maiores bases de dados de jogos do mundo, para buscar títulos do catálogo do PlayStation 2 dinamicamente.

### Obtendo uma chave de API

1. Acesse [rawg.io](https://rawg.io/apidocs) e crie uma conta gratuita
2. Gere sua **API Key** no painel do desenvolvedor
3. Adicione a chave no arquivo `script.js`

### Exemplo de requisição

```javascript
const API_KEY = 'sua_chave_aqui';
const response = await fetch(
  `https://api.rawg.io/api/games?key=${API_KEY}&platforms=15` // platform 15 = PS2
);
const data = await response.json();
```

> **Plataforma PS2 na RAWG:** ID `15`



## Como executar

1. **Clone o repositório:**

```bash
git clone https://github.com/TarsoMv/Playstation2HomePage.git
```

2. **Acesse a pasta do projeto:**

```bash
cd Playstation2HomePage
```

3. **Configure sua API Key:**

Abra o arquivo `script.js` e substitua o valor da variável de API Key pela sua chave gerada na RAWG.

4. **Abra o arquivo `index.html` no navegador:**

Basta dar um duplo clique no arquivo ou abrir com um servidor local como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.



## Funcionalidades

- Layout moderno utlizando HTML5 e CSS
- Navegação interativa entre os elementos da tela
- Listagem de jogos do PS2 consumida dinamicamente via RAWG API



## Objetivo

Este projeto foi desenvolvido com fins de **estudo e prática** de HTML, CSS e JavaScript, combinando a recriação da interface icônica do PlayStation 2 com o consumo de uma API REST externa.


## Licença

Este projeto é de uso educacional e não possui afiliação com a Sony Interactive Entertainment. PlayStation 2 é uma marca registrada da Sony.



## Autor

Desenvolvido por [Tarso Maia](https://github.com/TarsoMv)