# Hardu Pro - CRM Desktop Profissional

## O que é

Uma plataforma **type HB Insider** para gerenciar leads capturados via Google Maps. Ideal para sua própria conta pessoal com dashboard, tabelas, gráficos e relatórios.

---

## Arquivos

```
📁 seu-repo-github/
├── desktop.html          ← Interface desktop (abrir no navegador)
├── netlify.toml          ← Config de deploy
└── 📁 netlify/
    └── 📁 functions/
        ├── textsearch.js    ← Proxy Google Maps (text search)
        └── details.js       ← Proxy Google Maps (place details)
```

---

## Como Configurar (GitHub + Netlify)

### 1. No GitHub

1. Crie um novo repositório chamado `hardu-pro`
2. Suba os 4 arquivos na **raiz** do repositório:
   - `desktop.html`
   - `netlify.toml`
   - `netlify/functions/textsearch.js`
   - `netlify/functions/details.js`

### 2. No Netlify

1. Acesse **netlify.com**
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **GitHub** e conecte seu repositório `hardu-pro`
4. Build settings:
   - **Build command:** (deixar vazio)
   - **Publish directory:** (deixar vazio)
5. Clique em **Deploy**

O Netlify automaticamente:
- Detecta o `netlify.toml`
- Cria as functions `/api/textsearch` e `/api/details`
- Gera uma URL pública (ex: `hardu-pro.netlify.app`)

---

## Como Usar

### Abrir a Plataforma

**URL:** `https://seu-site.netlify.app/desktop.html`

Exemplos de localização:
- Desktop: `https://your-site.netlify.app/desktop.html` (mouse/teclado)
- Mobile: Abra em qualquer smartphone

### Login

- **Usuário:** `hardu`
- **Senha:** `hardu2026`

### Fluxo Principal

1. **Dashboard** → Visualizar KPIs e gráficos
2. **Leads** → Ver todas as empresas capturadas
3. **Campanhas** → Criar novas campanhas de busca
4. **Relatórios** → Métricas e ROI por campanha
5. **Configurações** → Salvar API Key

---

## Funcionalidades

### ✅ Implementado

- [x] Dashboard com cards de KPIs
- [x] Gráficos (Funil de Conversão, Leads por Nicho)
- [x] Tabela de Leads com busca/filtros
- [x] Gestão de Campanhas (cards)
- [x] Relatórios com taxa de conversão
- [x] Export de Leads (CSV)
- [x] Autenticação simples
- [x] Sincronização local (localStorage)
- [x] Design responsivo (desktop + tablet)

### 🔜 Para Implementar

- [ ] Busca real via Google Maps (quando clica "+ Nova Campanha")
- [ ] Modal com step-by-step de campanha
- [ ] Log em tempo real
- [ ] Integração com Zapier/Make
- [ ] Backend com PostgreSQL (opcional)
- [ ] Multi-usuário (opcional)

---

## Dados & Armazenamento

Todos os dados são salvos **localmente no navegador** usando `localStorage`:

- **Campanhas:** `hd_campaigns` (máx 30)
- **API Key:** `hd_api_key`
- **Sessão:** `hd_session`

### Sincronizar Entre Dispositivos

Se quiser compartilhar dados entre desktop e móvel:

```
1. No desktop, exporte um backup
2. No outro dispositivo, importe
```

(Recurso "Backup/Restore" pode ser adicionado)

---

## API do Google

A plataforma usa **Google Places API** para buscar empresas:

1. Vá em [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um projeto novo
3. Ative **Places API** e **Maps API**
4. Crie uma chave API (type: Browser/Public)
5. Cole a chave em **Configurações** do Hardu Pro

**Chave de teste:**
```
AIzaSyC7-M0qHjj_WGel9lAyL2J2AxXxn9tvqHI
```
(Funciona para testes, mas tem limite de requisições)

---

## Troubleshooting

### "Erro ao conectar API"

- Verifique se a API Key está correta em **Configurações**
- Certifique-se de que **Places API** está ativada no Google Cloud
- Aguarde alguns minutos (permissões podem levar tempo)

### "Dados não sincronizam entre aba/dispositivo"

- LocalStorage é por domínio (mesmo site, mesma conta browser)
- Use o recurso de Backup/Export para compartilhar

### "Netlify Functions não funcionam"

- Certifique-se de que o `netlify.toml` está na raiz do repo
- Deixe em branco os campos de "Build command" e "Publish directory"
- Refaça o deploy manualmente pelo Netlify

---

## Próximos Passos

1. **Subir no GitHub** (passo acima)
2. **Conectar ao Netlify** com a conta pessoal
3. **Abrir em desktop.html** e testar o dashboard
4. **Configurar API Key** (suas credenciais do Google)
5. **Criar primeira campanha** (quando a busca for implementada)

---

## Suporte

Para dúvidas:
- Abra **DevTools** (F12) → **Console** → procure por erros
- Verifique se a API Key está configurada em **Configurações**
- Teste em modo incógnito (sem cache)

---

**Versão:** 1.0.0 MVP  
**Última atualização:** Maio 2026  
**Desenvolvido por:** Hardu Digital
