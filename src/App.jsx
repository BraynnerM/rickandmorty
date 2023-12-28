import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import AppRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
      <>
      <Header />
      <AppRoutes />
      <Footer />
      </>
      </BrowserRouter>
  )  
}

export default App
