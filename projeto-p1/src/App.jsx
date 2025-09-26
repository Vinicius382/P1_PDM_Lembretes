import React from "react"
import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lembretes: [],
      mostrarFavoritos: false,
    }
  }


  adicionarLembrete = (novoTitulo) => {
    if (novoTitulo !== "") {
      const lembretesNovos = this.state.lembretes
      lembretesNovos.push({ titulo: novoTitulo, favorito: false })
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
        return { titulo: lembrete.titulo, favorito: !lembrete.favorito }
      }
      return lembrete
    })
    this.setState({ lembretes: lembretesAtualizados })
  }

  mudarVisibilidadeFavoritos = () => {
    this.setState({ mostrarFavoritos: !this.state.mostrarFavoritos })
  }

  mostrarLembretesFiltro = () => {
    if (this.state.mostrarFavoritos) {
      return this.state.lembretes.filter(lembrete => lembrete.favorito)
    } else {
      return this.state.lembretes
    }
  }


  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 mb-3">
            <button className="btn btn-outline-primary p-3"
              onClick={this.mudarVisibilidadeFavoritos}
            >{this.state.mostrarFavoritos ? "Mostrar todos" : "Mostrar favoritos"}
            </button>
          </div>

          <LembreteLista lembretes={this.mostrarLembretesFiltro()}
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