import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from "./Routes/Detail"
import { useContextGlobal } from './Components/utils/global.context'


function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className={themeState.theme ? 'App' : 'dark'}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.dentist} element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
