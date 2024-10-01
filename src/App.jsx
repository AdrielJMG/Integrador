import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProfessionalDetail from './ProfessionalDetail';
import Contact from './Contact';
import Favs from './Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/professional/:id" component={ProfessionalDetail} />
        <Route path="/contacto" component={Contact} />
        <Route path="/favs" component={Favs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;