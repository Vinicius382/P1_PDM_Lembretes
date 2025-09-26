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

  removerLembrete = (tituloRemover) => {
    const lembretesFiltrados = this.state.lembretes.filter(lembrete => {
      return lembrete.titulo !== tituloRemover
    })
    this.setState({ lembretes: lembretesFiltrados })
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <LembreteLista lembretes={this.state.lembretes}
            removerLembrete={this.removerLembrete}
          />

          <LembreteEntrada adicionarLembrete={this.adicionarLembrete}
          />
        </div>
      </div>
    )
  }
}
export default App