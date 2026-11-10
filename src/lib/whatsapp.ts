import { onlyDigits } from './format'

export function whatsappLink(phone: string, message: string) {
  const digits = onlyDigits(phone)
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
