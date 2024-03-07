
import './App.css'
import About from './assets/component/About'
import Header from './assets/component/Header'
import Home from './assets/component/Home'
import store from './assets/store/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
 

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route  path='/' element={<Home />}/>
            <Route  path='/about' element={<About />}/>
            
          </Routes>
        </BrowserRouter>
      </Provider>

  
    </>
  )
}

export default App
