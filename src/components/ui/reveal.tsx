import { motion } from 'motion/react'
import type { ComponentProps } from 'react'

type RevealProps = ComponentProps<typeof motion.div> & {
  delay?: number
}

export function Reveal({ delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  )
}
