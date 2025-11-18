import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataProvider'
import { CartProvider } from './context/CartProvider'
import { Header } from './components/layout/header/header-content/Header'
import { Main } from './components/layout/main/Main'
import { Footer } from './components/layout/footer/Footer'
import './App.css'

function App() {

  return (
    <div className='layout'>
      <BrowserRouter>
        <DataProvider>
          <CartProvider>
            <Header />
            <Main />
            <Footer />
          </CartProvider>
        </DataProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
