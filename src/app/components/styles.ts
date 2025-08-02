'use client'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  background: #f3f4f6;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside`
  width: 300px;
  background-color: #1e293b;
  color: white;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 280px;
    padding: 1.2rem 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

export const SidebarHeader = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`

export const SideButton = styled.button`
  background-color: #334155;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #475569;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
    min-width: auto;
    flex: 1;
  }
`

export const ChatSection = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`

export const ChatMessage = styled.div<{ type: 'user' | 'bot' }>`
  align-self: ${({ type }) => (type === 'user' ? 'flex-end' : 'flex-start')};
  background-color: ${({ type }) => (type === 'user' ? '#4a90e2' : '#e2e8f0')};
  color: ${({ type }) => (type === 'user' ? '#fff' : '#1e293b')};
  padding: 0.75rem 1rem;
  border-radius: 18px;
  max-width: 80%;
  margin: 0.4rem 0;
  font-size: 0.95rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    max-width: 85%;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 0.5rem 0.7rem;
    font-size: 0.85rem;
    border-radius: 14px;
  }
`

export const ChatForm = styled.form`
  display: flex;
  padding: 1rem;
  gap: 0.75rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    padding: 0.8rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    gap: 0.4rem;
  }
`

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.7rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }
`

export const SendButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #357ab7;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }
`

export const Loading = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem auto;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`