import ChatBox from '../components/ChatBox'
import SummaryPanel from '../components/SummaryPanel'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-2xl font-bold mb-4">PatternIQ Retail Intelligence</h1>
      <SummaryPanel />
      <ChatBox />
    </div>
  )
}