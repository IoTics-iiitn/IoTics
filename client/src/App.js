<<<<<<< Updated upstream
import React from 'react'

const App = () => {
    return (
        <div>
            <h1>App</h1>
        </div>
    )
}

export default App
=======
import React from 'react'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'

const App = () => {
    return (
        <div>
            {/* <h1>App</h1> */}
            <Home />
            <About/>
        </div>
    )
}

export default App
>>>>>>> Stashed changes
