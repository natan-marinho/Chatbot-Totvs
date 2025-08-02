import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    console.log('=== GEMINI API CHAMADA ===')
    
    const { message } = await req.json()
    console.log('Mensagem recebida:', message)

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Mensagem é obrigatória' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Chama a API real do Google Gemini
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: message
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    })

    console.log('Status Gemini:', response.status)

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Erro do Gemini:', errorData)
      return new Response(
        JSON.stringify({ error: 'Erro ao se comunicar com a IA' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()
    console.log('Resposta Gemini:', data)

    // Extrai a resposta do Gemini
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Desculpe, não consegui processar sua mensagem.'

    return new Response(
      JSON.stringify({ response: botResponse.trim() }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('=== ERRO GEMINI API ===')
    console.error('Erro:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}