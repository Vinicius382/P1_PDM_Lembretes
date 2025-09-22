import React from "react"
import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    lembretes: [
      {
        titulo: 'Preparar aula de programação'
      },
      {
        titulo: 'Fazer feira'
      },
      {
        titulo: 'Preparar marmitas'
      },
    ]
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9">
            <div className="card rounded-5">
              <div className="card-body">
                {this.state.lembretes.map(lembrete => (
                  <LembreteLista lembrete={lembrete} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9 mt-4">
            <div className="card rounded-4">
              <div className="card-body">
                <LembreteEntrada />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default App