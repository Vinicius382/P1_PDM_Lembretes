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

  mudarStatusFavorito = (tituloMudarFavorito) => {
    const lembretesAtualizados = this.state.lembretes.map(lembrete => {
      if (lembrete.titulo === tituloMudarFavorito) {
        return {titulo: lembrete.titulo, favorito: !lembrete.favorito}
      }
      return lembrete
    })
    this.setState({lembretes: lembretesAtualizados})
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <LembreteLista lembretes={this.state.lembretes}
            removerLembrete={this.removerLembrete}
            mudarStatusFavorito={this.mudarStatusFavorito}
          />

          <LembreteEntrada adicionarLembrete={this.adicionarLembrete}
          />
        </div>
      </div>
    )
  }
}
export default App