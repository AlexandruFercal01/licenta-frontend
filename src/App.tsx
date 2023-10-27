import React from 'react'
import './styles.css'

import { SidePanel } from './components/common/SidePanel'
import { Board } from './components/common/Board'
import { Header } from './components/common/Header'

//pages

function App() {
    return (
        <div>
            <Header />
            <div className="body">
                <SidePanel />
                <Board />
            </div>
        </div>
    )
}

export default App
