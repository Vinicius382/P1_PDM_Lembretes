import React, { Component } from 'react'

export class LembreteEntrada extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titulo: "",
        }
    }

    atualizarTitulo = (evento) => {
        this.setState({ titulo: evento.target.value })
    }

    clicarBotao = () => {
        this.props.adicionarLembrete(this.state.titulo);
        this.setState({ titulo: "" })
    }

    render() {
        return (
            <div className="col-12 col-md-9 mt-4">
                <div className="card rounded-4">
                    <div className="card-body">
                        <div>
                            <input type="text"
                                className="p-2 w-100 rounded-3"
                                placeholder='Digite seu novo lembrete'
                                value={this.state.titulo}
                                onChange={this.atualizarTitulo}
                            />

                            <button className="btn btn-outline-primary w-100 mt-3"
                                onClick={this.clicarBotao}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LembreteEntrada