'use client'
import { useEffect, useState } from 'react'
import {
  Wrapper,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SideButton,
  ChatSection,
  ChatForm,
  ChatInput,
  ChatMessage,
  SendButton,
  Loading
} from './components/styles'
import { sendMessageToAPI } from './lib/api'

export default function HomePage() {
  const [messages, setMessages] = useState<{ text: string, type: 'user' | 'bot' }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // Carrega o histórico salvo
  useEffect(() => {
    const storedMessages = localStorage.getItem('chatHistory')
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
  }, [])

  // Salva sempre que messages mudar
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages))
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { text: input, type: 'user' as const }
    setMessages(prev => [...prev, userMsg])
    const currentInput = input
    setInput('')
    setLoading(true)

    try {
      const res = await sendMessageToAPI(currentInput)
      setMessages(prev => [...prev, { text: res, type: 'bot' }])
    } catch (error) {
      let errorMessage = 'Erro ao se comunicar com a IA.'
      if (error instanceof Error) {
        errorMessage = `Erro: ${error.message}`
      }
      setMessages(prev => [...prev, { text: errorMessage, type: 'bot' }])
    } finally {
      setLoading(false)
    }
  }

  const handleExport = () => {
    const content = messages.map(m => `${m.type === 'user' ? 'Você' : 'Bot'}: ${m.text}`).join('\n\n')
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'chat-historico.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleClear = () => {
    const confirmClear = confirm('Deseja realmente limpar o histórico de mensagens?')
    if (confirmClear) {
      setMessages([])
      localStorage.removeItem('chatHistory')
    }
  }

  const testAPI = async () => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'teste' })
      })
      const data = await response.json()
      alert(`API funcionando! Status: ${response.status}`)
    } catch (error) {
      alert(`Erro na API: ${error}`)
    }
  }

  return (
    <Wrapper>
      <Sidebar>
        <div>
          <SidebarHeader>🤖 Chat com IA</SidebarHeader>
        </div>
        <SidebarFooter>
          <SideButton onClick={handleExport}>📁 Exportar Chat</SideButton>
          <SideButton onClick={handleClear}>🗑️ Limpar Histórico</SideButton>
        </SidebarFooter>
      </Sidebar>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <ChatSection>
          {messages.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              👋 Olá! Envie uma mensagem para começar a conversar.
            </div>
          )}
          
          {messages.map((msg, i) => (
            <ChatMessage key={i} type={msg.type}>{msg.text}</ChatMessage>
          ))}
          
          {loading && <Loading>🤔 Pensando...</Loading>}
        </ChatSection>

        <ChatForm onSubmit={handleSubmit}>
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            disabled={loading}
          />
          <SendButton type="submit" disabled={loading || !input.trim()}>
            {loading ? '⏳' : '📤'} Enviar
          </SendButton>
        </ChatForm>
      </div>
    </Wrapper>
  )
}
