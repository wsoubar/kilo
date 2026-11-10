# Plano — MesaJá · Cardápio digital com pedido direto

Aplicação 100% estática (Vite + React + Tailwind) para pequenos restaurantes venderem direto, sem marketplace.

## Visão do produto

- **Vitrine/cardápio** com link e QR code
- **Sacola e checkout** com entrega ou retirada
- **Pedido formatado enviado ao WhatsApp** do restaurante
- **Pix estático** (QR + copia e cola) com confirmação manual
- **Cupons** e **fidelidade por selos**
- **Painel do restaurante** para editar cardápio, configurações, cupons e ver pedidos
- Tudo persistido em **localStorage**, publicado no **GitHub Pages**

**Marca sugerida:** MesaJá (produto) + Tempero da Vila (restaurante demo).

---

## Premissas e limites

Como não haverá backend, três consequências são explícitas no produto:

1. **Cardápio publicado x rascunho local**
   O admin edita em `localStorage`, mas clientes em outros dispositivos não veem essas edições.
   **Solução:** o cardápio publicado fica em `src/data/store.json` versionado. O admin edita o rascunho e usa **“Exportar cardápio”** para baixar o JSON; para publicar, substitui o arquivo no repositório e o GitHub Actions faz o deploy. O README explica o passo a passo.

2. **Pedidos e fidelidade são por dispositivo**
   O histórico do cliente fica no navegador dele; o painel de pedidos do restaurante só vê pedidos feitos no mesmo navegador.
   **O canal real é o WhatsApp** — o painel é um espelho local/demonstração. Se houver necessidade de sincronização real, a Fase 6 opcional propõe Supabase.

3. **Pix sem gateway**
   Geramos o **BR Code EMV** com CRC16, QR code e copia e cola. O cliente paga no app do banco e volta; o pedido é enviado com “Pix já pago” e o restaurante confere manualmente. Não há confirmação automática.

**Outras premissas:** pt-BR, BRL, um único restaurante (single-tenant), tema claro, mobile-first, sem login de cliente (identificação por telefone).

---

## Stack

| Camada | Escolha                                                                              |
| ------ | ------------------------------------------------------------------------------------ |
| Base   | Vite + React 19 + TypeScript strict                                                  |
| Estilo | Tailwind CSS v4 (`@tailwindcss/vite`) + design tokens                                |
| Rotas  | React Router com **HashRouter** (evita 404 no GitHub Pages)                          |
| Estado | Zustand + `persist` com versionamento/migração                                       |
| UI     | Radix primitives (Dialog, Sheet, Tabs, Select, Switch, Toast) + componentes próprios |
| Ícones | lucide-react                                                                         |
| Motion | `motion` (respeitando `prefers-reduced-motion`)                                      |
| QR     | `qrcode.react`                                                                       |
| Fontes | Fraunces (display) + Manrope (texto), via `@fontsource`                              |
| Testes | Vitest para regras críticas (Pix, totais, cupons, fidelidade)                        |
| Deploy | GitHub Actions → GitHub Pages, `base: './'`                                          |

---

## Direção visual e UX

- Paleta quente: creme, terracota, carvão, manga e oliva
- Tipografia editorial (serif display + sans limpa), bastante respiro
- Cards com cantos generosos, sombras suaves, fotos grandes dos pratos
- Microtextura sutil no fundo
- **Sinalização de ações em toda a UI:** botões com ícone + seta, hover/pressed, focus ring visível, badges (“Mais pedido”, “Vegetariano”, “Picante”), barra fixa mobile “Ver sacola • R$ 42,90”, stepper de quantidade, toasts, skeletons, empty states com CTA, estados desabilitados com motivo, validação inline, contador de caracteres, progresso do checkout, timeline do pedido, celebração discreta ao ganhar recompensa
- Admin: sidebar no desktop, abas inferiores no mobile, KPIs, board de pedidos, formulários em sheet lateral
- Acessibilidade: teclado, foco preso em modais, labels, contraste, `aria-live`

---

## Arquitetura resumida

```
src/
  app/            rotas, providers, error boundary
  components/ui/  Button, Input, Badge, Sheet, Dialog, Toast, Skeleton...
  components/layout/
  features/menu/       vitrine, busca, categorias, produto
  features/cart/       sacola e drawer
  features/checkout/   formulário, Pix, WhatsApp, confirmação
  features/orders/     histórico, status, recompra
  features/loyalty/    selos e recompensa
  features/coupons/    motor de cupons
  features/admin/      dashboard, cardápio, pedidos, config, QR
  lib/                 money, pix, whatsapp, storage, validation, id
  data/store.json      cardápio publicado + seed
  store/               stores Zustand por domínio
```

**Modelo de dados:** `StoreConfig`, `Category`, `Product` (+ `AddonGroup`), `CartItem`, `Order`, `Coupon`, `Customer`, `LoyaltyConfig`.

**Regras:** valores sempre em centavos; IDs com `crypto.randomUUID`; schemas versionados com migração; botão “Resetar dados demo”; sincronização entre abas via `storage`/`BroadcastChannel`.

**Mensagem de WhatsApp** (formato organizado):

```
*NOVO PEDIDO #1042* 🍽️
*Tempero da Vila*

*Cliente:* Ana Souza
*Telefone:* (11) 99999-9999
*Entrega:* Rua das Flores, 123 — apto 45
*Pagamento:* Pix (já paguei)

*ITENS*
2x Feijoada da casa — R$ 89,80
  + Farofa extra (R$ 5,00)
  Obs: sem pimenta
1x Limonada — R$ 9,90

*Subtotal:* R$ 99,70
*Cupom BEMVINDO10:* -R$ 9,97
*Entrega:* R$ 6,00
*Total:* R$ 95,73

*Fidelidade:* 7/10 selos
```

---

## Fases (cada uma com gate de aprovação)

| Fase  | Entrega                              | Complexidade |
| ----- | ------------------------------------ | ------------ |
| **0** | Fundação, identidade visual e deploy | M            |
| **1** | Cardápio/vitrine                     | M            |
| **2** | Sacola, checkout, WhatsApp e Pix     | L            |
| **3** | Cupons, fidelidade e recompra        | M            |
| **4** | Painel do restaurante                | L            |
| **5** | Polimento, testes e publicação       | M            |
| **6** | _Opcional:_ PWA + backend real       | L            |

### Fase 0 — Fundação e identidade

- Scaffold Vite/React/TS, Tailwind v4, HashRouter, aliases, ESLint/Prettier
- Tokens de design, fontes locais, favicon, meta tags/OG
- Shell responsivo (header/footer) e primitivas de UI
- Workflow de GitHub Pages + README inicial
- **Pronto quando:** `dev`, `build` e `lint` passam; shell bonito em 360px e 1440px; pipeline de Pages configurado

### Fase 1 — Cardápio que dá água na boca

- `store.json` com restaurante, categorias, ~18 itens, adicionais e imagens
- Hero, status aberto/fechado, busca instantânea, categorias sticky, grid responsivo
- Sheet de produto com adicionais, quantidade e observação
- Badges, destaques, skeletons, empty states, lazy loading
- **Pronto quando:** navegação fluida, modal acessível (Esc/focus trap), sem overflow, busca e filtros funcionando

### Fase 2 — Sacola → WhatsApp → Pix

- Sacola persistente, drawer, barra fixa mobile, totais em centavos
- Checkout em etapas: entrega/retirada, endereço, pagamento, cupom, observações
- Validações, pedido mínimo, taxa de entrega e frete grátis acima de X
- Geração do **Pix BR Code** (CRC16 validado por testes), QR, copia e cola e “Já paguei”
- Link `wa.me` com mensagem formatada; página de confirmação e pedido salvo
- **Pronto quando:** totais corretos nos testes, sacola sobrevive ao reload, Pix decodifica corretamente, sem duplo envio

### Fase 3 — Cupons, fidelidade e recompra

- Motor de cupons: percentual, valor fixo e frete grátis; validade, mínimo e limite de uso
- Cartão de selos (1 por pedido, meta e recompensa configuráveis), identificação por telefone
- Cupom de recompensa gerado automaticamente ao completar a meta
- “Meus pedidos” com status local, repetir pedido e endereço salvo
- **Pronto quando:** casos-limite de cupom cobertos, recompensa dispara uma única vez, tudo persiste

### Fase 4 — Painel do restaurante

- Acesso por PIN (proteção de demonstração, não segurança real)
- Dashboard com KPIs e board de pedidos com avanço de status + sync entre abas
- CRUD de categorias, itens, adicionais, disponibilidade e ordenação
- Configurações: WhatsApp, Pix, taxas, horário, pedido mínimo
- Gestão de cupons e fidelidade
- Gerador de QR code do cardápio com download em PNG
- Exportar/importar cardápio JSON e “resetar demo”
- **Pronto quando:** CRUD persiste, vitrine reflete mudanças, export/import é idêntico, admin usável no celular

### Fase 5 — Polimento, testes e publicação

- Pass de motion, acessibilidade, contraste e `reduced-motion`
- QA responsivo e cross-browser, error boundary, página 404
- Testes unitários das regras críticas; Lighthouse mobile
- README com screenshots, instruções de publicação e atualização do cardápio
- Deploy final no GitHub Pages, validado por link e QR
- **Pronto quando:** build/test/lint verdes, Lighthouse ≥ 90 em performance e acessibilidade, app acessível publicamente

### Fase 6 — Opcional (futuro)

- PWA instalável/offline
- Supabase (ou similar) para cardápio, pedidos e cupons sincronizados entre dispositivos
