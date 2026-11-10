type ShareResult = 'shared' | 'copied' | 'cancelled'

interface SharePayload {
  title: string
  text: string
  url: string
}

export async function sharePage({ title, text, url }: SharePayload): Promise<ShareResult> {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      return 'shared'
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'cancelled'
      }
    }
  }

  await navigator.clipboard.writeText(url)
  return 'copied'
}
