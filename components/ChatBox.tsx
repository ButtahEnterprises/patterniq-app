import { useState } from 'react'

export default function ChatBox() {
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSubmit = () => {
    if (!query) return
    setMessages(prev => [...prev, `You: ${query}`, `AI: (response will appear here)`])
    setQuery('')
  }

  return (
    <div className="mt-6">
      <div className="space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded">{msg}</div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Ask a retail question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  )
}