import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// Criar usuário no banco
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha, age } = req.body

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        age
      }
    })

    res.status(201).json(novoUsuario)

  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar usuário" })
  }
})

// Listar usuários do banco
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany()
  res.status(200).json(usuarios)
})

app.listen(3332, () => {
  console.log("Servidor rodando na porta 3332")
})