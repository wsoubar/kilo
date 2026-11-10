# MesaJá · Tempero da Vila

Cardápio digital com pedido direto para pequenos restaurantes. A proposta é simples: o cliente
monta o pedido, envia organizado no WhatsApp da casa, paga com Pix e ganha selos de fidelidade —
sem taxa de marketplace.

O projeto é 100% estático, feito para rodar no GitHub Pages, com persistência local no navegador.

## Status do projeto

- [x] **Fase 0** — fundação, identidade visual, shell responsivo, componentes base e deploy
- [ ] **Fase 1** — cardápio/vitrine com busca, categorias e detalhes do produto
- [ ] **Fase 2** — sacola, checkout, WhatsApp e Pix
- [ ] **Fase 3** — cupons, fidelidade e recompra
- [ ] **Fase 4** — painel do restaurante
- [ ] **Fase 5** — polimento, testes, acessibilidade e publicação final

O plano completo está em [`plano.md`](./plano.md).

## Stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4 (tokens em `src/styles/globals.css`)
- React Router com `HashRouter` (rotas compatíveis com GitHub Pages)
- Radix UI para diálogos, sheets, toasts e tooltips
- Motion para microinterações (respeitando `prefers-reduced-motion`)
- Zustand + `persist` (a partir da Fase 2)
- Fontes locais: Fraunces (display) e Manrope (texto)
- Oxlint + Prettier
- Deploy via GitHub Actions

## Rodando localmente

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build        # typecheck + build de produção
npm run preview      # serve o build local
npm run lint         # oxlint
npm run format       # prettier
npm run format:check # valida formatação
```

## Rotas

| Rota       | Descrição                                     |
| ---------- | --------------------------------------------- |
| `/#/`      | Vitrine pública do restaurante                |
| `/#/admin` | Painel do restaurante (placeholder na Fase 0) |
| `/#/*`     | Página 404                                    |

## Identidade visual

A direção é quente e editorial: creme, terracota, manga e oliva; Fraunces para títulos e Manrope
para texto. Os componentes base ficam em `src/components/ui` e os tokens de cor, tipografia,
sombras e animações em `src/styles/globals.css`.

## Deploy no GitHub Pages

1. Crie um repositório no GitHub e envie o projeto para a branch `main`.
2. No repositório, abra **Settings → Pages** e escolha **Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` roda lint, build e publica o `dist` automaticamente.
4. A URL fica no formato `https://<usuario>.github.io/<repositorio>/`.

O `base: './'` no `vite.config.ts` e o `HashRouter` evitam problemas de caminho e de 404 em rotas
profundas. O QR code gerado na aplicação aponta para a URL pública atual.

## Limites do armazenamento local

Como não há backend, alguns comportamentos são intencionais:

- O cardápio publicado é versionado em `src/data/store.json` (a partir da Fase 1). Edições no
  painel ficam como rascunho local e podem ser exportadas em JSON para publicação.
- Pedidos, cupons e fidelidade ficam no navegador de cada dispositivo. O canal real de pedido é o
  WhatsApp; o painel de pedidos funciona como espelho local/demonstração.
- O Pix é estático (BR Code EMV): o cliente paga no app do banco e o restaurante confere
  manualmente. Não há confirmação automática de pagamento.

Para sincronização real entre dispositivos, a Fase 6 opcional propõe um backend (Supabase ou
similar).

## Estrutura

```
src/
  app/                 providers, rotas e scroll
  components/brand/    logo e marca
  components/layout/   header, footer, container
  components/ui/       button, badge, input, sheet, toast, skeleton...
  data/                dados de demonstração
  features/            home, admin, cart, misc
  hooks/               navegação por seções
  lib/                 utilitários (cn, moeda, WhatsApp, share, scroll)
  styles/              Tailwind e design tokens
```
