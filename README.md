# 🤖 Chatbot com IA (Next.js + Gemini)

Este projeto é um chatbot de inteligência artificial construído com **Next.js 13+**, **React**, **TypeScript**, **API Gemini (Google)** e **Styled Components**, com componentes selecionados substituídos por **shadcn/ui**.

## 🚀 Deploy

🔗 [chatbot-totvs.vercel.app/](chatbot-totvs.vercel.app)

## 🧠 Tecnologias

- Next.js 13 (App Router)
- React
- TypeScript
- API Google Gemini
- Styled Components
- LocalStorage (histórico)

## 💬 Funcionalidades

- Interface de chat responsiva e moderna
- Integração com a IA (Gemini)
- Carregamento com feedback visual
- Tratamento de erros da API
- Histórico de mensagens salvo no navegador
- Exportação do chat para `.txt`

## 📦 Como rodar localmente

1. Clone o projeto:

```bash
git clone https://github.com/seu-usuario/chatbot-ia
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env.local` na raiz e adicione sua chave da API Gemini:

```env
GEMINI_API_KEY=sua_chave_aqui
```

4. Rode o projeto:

```bash
npm run dev
```

## 🔐 Como obter a chave da API Gemini

1. Acesse [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Gere uma chave gratuita
3. Copie e cole no arquivo `.env.local`

## 🛠️ Decisões Técnicas

- **Gemini API**: Escolhida por ser gratuita, moderna e robusta.
- **Next.js 13 com App Router**: Aproveitamento das features mais recentes da framework.
- **Styled Components**: Flexibilidade para personalização visual.
- **LocalStorage**: Evita dependência de backend para armazenar histórico.

---

Feito por [Natan Marinho](https://www.linkedin.com/in/natan-marinho-728238335/)

📧 [natan.marinho.profissional@gmail.com](mailto\:natan.marinho.profissional@gmail.com)