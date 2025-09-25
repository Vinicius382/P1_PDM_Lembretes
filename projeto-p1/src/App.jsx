import React from "react"
import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lembretes: [],
    }
  }


  adicionarLembrete = (novoTitulo) => {
    if (novoTitulo !== "") {
      const lembretesNovos = this.state.lembretes
      lembretesNovos.push({ titulo: novoTitulo })
      this.setState({ lembretes: lembretesNovos })
    }
  }


  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <LembreteLista lembretes={this.state.lembretes} />

          <LembreteEntrada adicionarLembrete={this.adicionarLembrete}
          />
        </div>
      </div>
    )
  }
}
export default App