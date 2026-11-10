export const brand = {
  name: 'Tempero da Vila',
  tagline: 'Comida brasileira afetiva, feita no fogão de casa.',
  description:
    'Feijoada, moqueca, frango com quiabo e sobremesas de vó. Comida de verdade, sem atalhos — e sem taxa de marketplace.',
  whatsapp: '5511999999999',
  whatsappMessage: 'Olá! Vim pelo cardápio digital do Tempero da Vila e quero fazer um pedido. 🍽️',
  address: {
    street: 'Rua das Palmeiras, 128',
    district: 'Vila Mariana',
    city: 'São Paulo — SP',
  },
  hours: 'Terça a domingo · 11h30 às 23h',
  instagram: '@temperodavila',
  delivery: {
    feeCents: 600,
    freeAboveCents: 12000,
    minOrderCents: 3000,
    estimate: '35–50 min',
  },
  loyalty: {
    goal: 10,
    reward: '15% de desconto no próximo pedido',
    demoFilled: 7,
  },
  pix: {
    key: 'contato@temperodavila.com.br',
    holder: 'Tempero da Vila',
    city: 'SAO PAULO',
  },
  foundedYear: 2018,
} as const
