import { useState } from 'react'
import Table from './components/Tabela/index'

import styles from './index.module.css'

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(NaN)

  function calculaImc(e) {
      e.preventDefault()
      let calculo = (peso / (altura * altura))
      setImc(calculo)
  }

  return (
    <>
        <form className={styles.form} action="" onSubmit={calculaImc}>
          <div>  
            <label htmlFor="altura">Digite sua altura:</label>
            <input type="number" step='.01' id="altura" onChange={(e) => {setAltura(e.target.value)}} />
          </div>
          
          <div>
            <label htmlFor="peso">Digite seu peso:</label>
            <input type="number" step='.01' id="peso" onChange={(e) => {setPeso(e.target.value)}} />
          </div>
          <button type='submit'>Calcular</button>
          <p>Resultado:{imc.toFixed(1)}</p>
        </form>
      <Table imc={imc}/> 
    </>
  )
}

export default App
