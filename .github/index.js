import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QRCode from "react-qr-code"

const clientsMock = [
  {
    id: 1,
    nome: "João Silva",
    telefone: "5511987654321",
    mensagem: "Gostaria de falar sobre guarda compartilhada.",
    data: "2025-04-23 10:32",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    telefone: "5511976543210",
    mensagem: "Tenho um problema com pensão alimentícia.",
    data: "2025-04-22 16:45",
  },
]

export default function PainelAdmin() {
  const [clientes, setClientes] = useState(clientsMock)
  const [busca, setBusca] = useState("")
  const linkWhatsapp = "https://wa.me/5511987570666?text=Olá%2C+quero+atendimento+jurídico."

  const clientesFiltrados = clientes.filter((c) =>
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.mensagem.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-500">Painel Administrativo Jurídico</h1>

      <div className="mb-6 max-w-xl mx-auto">
        <Input
          placeholder="Buscar cliente ou mensagem..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="bg-gray-800 text-white border-gray-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {clientesFiltrados.map((cliente) => (
          <Card key={cliente.id} className="bg-gray-900 border border-gray-700">
            <CardContent className="space-y-2">
              <p><strong>Nome:</strong> {cliente.nome}</p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              <p><strong>Mensagem:</strong> {cliente.mensagem}</p>
              <p className="text-sm text-gray-400">{cliente.data}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-2">QR Code para Atendimento Automático</h2>
        <p className="mb-4 text-gray-400">Escaneie e inicie o fluxo automatizado via WhatsApp</p>
        <div className="inline-block p-4 bg-white rounded">
          <QRCode value={linkWhatsapp} bgColor="#1E1E1E" fgColor="#C9B037" />
        </div>
        <p className="mt-4 text-sm text-gray-500">Link: <a href={linkWhatsapp} className="underline text-yellow-500">{linkWhatsapp}</a></p>
      </div>
    </div>
  )
}
