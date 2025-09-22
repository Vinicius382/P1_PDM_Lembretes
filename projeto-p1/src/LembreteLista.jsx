import React, { Component } from 'react'

export class LembreteLista extends Component {
    render() {
        return (
            <div className="p-3 border rounded-4 m-3 text-center">
                {this.props.lembrete.titulo}
            </div>
        )
    }
}

export default LembreteLista