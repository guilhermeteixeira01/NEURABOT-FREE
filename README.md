# 🤖 NeuraBot

NeuraBot é um bot para **Discord** com sistema de **tickets, configuração de painel, personalização de perfil do bot e exportação de transcrição de tickets**.

## 📦 Tecnologias utilizadas

* Node.js
* discord.js
* canvas
* node-fetch
* discord-html-transcripts
* dotenv
* octokit

---

# 🚀 Instalação

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/guilhermeteixeira01/NEURABOT-FREE
```

Entrar na pasta:

```bash
cd NEURABOT-FREE
```

---

## 2️⃣ Instalar dependências

```bash
npm install
```

---

## 3️⃣ Criar arquivo .env

Dentro da pasta `configs` crie o arquivo:

```
configs/.env
```

Exemplo de conteúdo:

```
BOTTOKEN= "aki vai o token do seu bot"
GITHUBTOKEN=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
```

---

## 4️⃣ Configurar bot-config.json

Dentro da pasta `configs` existe o arquivo:

```
bot-config.json
```

Esse arquivo armazena as configurações do bot como:

* Canais de tickets
* Cargos

---

# ▶️ Iniciar o bot

Execute:

```bash
node bot.js
```

Se tudo estiver correto aparecerá no terminal:

```
🤖 Bot online como NomeDoBot
```

---

# 🛠 Comandos

### `/painel-config`

Abre o **painel de configuração do bot**, permitindo configurar:

* Sistema de tickets
* Perfil do bot
* Banner
* Cor predominante

---

### `/anuncio`

Abre o **painel de configuração de Embed**, permitindo configurar:

* Embeds personalizados

---

# 📁 Estrutura do projeto

```
📦 projeto
 ┣ 📂 configs
 ┃ ┣ .env
 ┃ ┗ bot-config.json
 ┣ config.js
 ┣ index.js
 ┣ package.json
 ┗ README.md
```

---

# 📜 Funcionalidades

✅ Sistema de **tickets automático**
✅ **Exportação de transcript HTML**
✅ **Painel de configuração via Discord**
✅ **Personalização do perfil do bot (PREMIUM)**
✅ Sistema de **botões e modais**
✅ Salvamento de configurações em JSON

---

# ⚠️ Requisitos

* Node.js 18 ou superior
* Permissões necessárias no servidor Discord
* Token do bot configurado corretamente

---

# 📄 Licença

Este projeto é para uso educacional ou comercial conforme definido pelo autor.
