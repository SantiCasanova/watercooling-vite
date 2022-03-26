import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
)
