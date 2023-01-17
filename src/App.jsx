
import { SiteRoutes } from './Pages/Routes/SiteRoutes';
import { Navbar } from './Components/Navbar'
import './Style/main/App.css'


function App() {

return (
    <div className="App">
      <Navbar/>
      <SiteRoutes/>
    </div>
  )
}

export default App