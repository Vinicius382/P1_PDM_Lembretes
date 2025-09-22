import React, { Component } from 'react'

export class LembreteEntrada extends Component {
    render() {
        return (
            <div>
                <input type="text" id="lembreteInput" className="p-2 w-100 rounded-3" placeholder='Digite seu novo lembrete' />

                <button className="btn btn-outline-primary w-100 mt-3">
                    OK
                </button>
            </div>

        )
    }
}

export default LembreteEntrada