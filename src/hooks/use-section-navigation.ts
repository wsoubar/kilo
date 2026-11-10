import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { scrollToId } from '@/lib/scroll'

export function useSectionNavigation() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(
    (id: string) => {
      if (pathname !== '/') {
        navigate('/')
        window.setTimeout(() => scrollToId(id), 80)
        return
      }

      scrollToId(id)
    },
    [navigate, pathname],
  )
}
