import "./assets/scss/global.scss"
import { AppFooter } from './cmps/AppFooter/AppFooter'
import { Home } from './pages/Home'

export function App() {
  return (
    <div className="App">
      <Home />
      <AppFooter />
    </div>
  )
}
