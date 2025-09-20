import React, { Component } from 'react'

export class LembreteEntrada extends Component {
    render() {
        return (
            <div>
                <input type="text" id="lembreteInput" className="w-100" placeholder='Digite seu novo lembrete'/>

                <button className="btn btn-primary w-100 mt-2">
                    OK
                </button>
            </div>

        )
    }
}

export default LembreteEntrada