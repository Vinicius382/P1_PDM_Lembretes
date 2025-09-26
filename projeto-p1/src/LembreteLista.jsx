import React, { Component } from 'react'

export class LembreteLista extends Component {
    render() {
        return (
            <div className="col-12 col-md-9">
                <div className="card rounded-5">
                    <div className="card-body">
                        {this.props.lembretes.map(lembrete => (
                            <div className="d-flex align-items-center justify-content-center p-3 border rounded-4 m-3">
                                <span className="fs-2 text-center flex-grow-1">
                                    {lembrete.titulo}
                                </span>
                                <i className="fa-solid fa-trash fa-2x m-3"
                                    onClick={() => this.props.removerLembrete(lembrete.titulo)}>
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default LembreteLista