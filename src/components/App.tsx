import { useState } from 'react'

const App: React.FC = () => {
  const [name, setName] = useState('')
  return <div>
    <h1 style={{ color: 'red' }}>DH Frontend Case</h1>
    <br />
    <input value={name} onChange={e => setName(e.target.value)} />
  </div>
}

export default App
