Update conversas.js para forçar deploy

let conversas = []

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, telefone, mensagem, data } = req.body

    if (!nome || !telefone || !mensagem || !data) {
      return res.status(400).json({ erro: 'Dados incompletos' })
    }

    const novaConversa = { nome, telefone, mensagem, data, id: Date.now() }
    conversas.push(novaConversa)

    console.log('Nova conversa recebida:', novaConversa)
    return res.status(200).json({ sucesso: true })
  }

  if (req.method === 'GET') {
    return res.status(200).json(conversas)
  }

  return res.status(405).end() // Method Not Allowed
}
