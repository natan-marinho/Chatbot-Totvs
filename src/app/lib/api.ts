export async function sendMessageToAPI(message: string) {
  try {
    console.log('Enviando mensagem:', message)
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ message })
    })

    console.log('Status da resposta:', res.status)
    console.log('Headers da resposta:', res.headers)

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Erro da API:', errorText)
      throw new Error(`Erro ${res.status}: ${errorText}`)
    }

    const data = await res.json()
    console.log('Resposta da API:', data)
    
    return data.response

  } catch (error) {
    console.error('Erro na função sendMessageToAPI:', error)
    throw error
  }
}