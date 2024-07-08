import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent'

function App() {

  const name = 'Diego Quiroga'

  return (
    <>
      <div>
        <h3>Practica de Componentes</h3>
        {/*Cargar el primer componente*/}
        <MyComponent
          name={name}
          lastName="Rivera"
        />
        <hr />
        <h4>Segundo Componente</h4>
        <SecondComponent/>
      </div>
    </>
  )
}

export default App
