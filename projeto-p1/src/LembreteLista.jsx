import React, { Component } from 'react'

export class LembreteLista extends Component {
    render() {
        return (
            <div className="col-12 col-md-9">
                <div className="card rounded-5">
                    <div className="card-body">
                        {this.props.lembretes.map(lembrete => (
                            <div className="p-3 border rounded-4 m-3 text-center">
                                {lembrete.titulo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default LembreteLista