'use client'
import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
  }
`

export const ChatMessage = styled.div<{ className: 'user' | 'bot' }>`
  background: ${({ className }) => (className === 'user' ? '#007bff' : '#e0e0e0')};
  color: ${({ className }) => (className === 'user' ? '#fff' : '#000')};
  align-self: ${({ className }) => (className === 'user' ? 'flex-end' : 'flex-start')};
  padding: 0.8rem;
  border-radius: 12px;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 85%;
    padding: 0.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 0.6rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }
`

export const ChatForm = styled.form`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.85rem;
    border-radius: 6px;
  }
`

export const Loading = styled.div`
  font-size: 0.9rem;
  color: #888;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`