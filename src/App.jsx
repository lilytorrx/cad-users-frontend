import { useState, useEffect } from 'react'
import './assets/css/App.css'
import UserCard from './components/UserCard'

// Componente do React - Uma função que retorna (return) uma estrutura de UI
// Fora do return - Código JS
// useState - Hook do React pra criar estado em um componente
// Estado - super variável 
// Não fica carregado toda vez que o componente for renderizado

function App() {
  const [name, setName] = useState("") // 1) Varíavel em si | 2) função para atualizar o valor da variável
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [users, setUsers] = useState([])
  const count = users.length

  useEffect(() => {
    fetch("https://cad-users-backend-production.up.railway.app/usuarios")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Erro ao buscar usuários:", error))
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()  

    const novoUsuario = { name, email, age } 

    const response = await fetch("https://cad-users-backend-production.up.railway.app/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoUsuario)
      })

    const usuarioSalvo = await response.json()

    setUsers([...users, usuarioSalvo])

    setName("")
    setEmail("")
    setAge(0)

  }
  
  return (
    <>
      <div className="app">
        <h1>Cadastro de Usuários</h1>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            name="nome" 
            id="nome" 
            placeholder='Seu nome completo'
            value={name}
            onChange={ event => setName(event.target.value) }
          />

          <label htmlFor="email" placeholder="Seu melhor email">E-mail</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Seu melhor email'
            value={email}
            onChange={ event => setEmail(event.target.value) }
          />

          <label htmlFor="idade">Idade</label>
          <input 
            type="number" 
            name="idade" 
            id="idade" 
            placeholder='Sua idade'
            value={age}
            min={0}
            onChange={ event => setAge(Number(event.target.value)) }
          />

          <button type="submit">Cadastrar</button>
        </form>
        <div className='user-list'>
          <p className="user-count">{ count == 0 ? "Nenhum usuário cadastrado." : `Usuários cadastrados: ${count}` }</p>
          
          {users.map((user, userId) => (
            <UserCard 
            key={userId} 
            user={user}
            id={userId}
            />
          ))}
          
        </div>
      </div>  

    </>
  )
}

export default App
