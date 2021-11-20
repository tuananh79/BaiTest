import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Test from './Components/Test';
import BestProd from './Components/BestProd';
import Prod from './Components/Prod';
import BrandS from './Components/BrandS';
import HaIssue from './Components/HaIssue';
import Happened from './Components/Happened';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Banner />
        <BestProd />
        <Prod />
        <BrandS />
        <HaIssue />
        <Happened />
        <Footer />
      </header>
    </div>
  );
}

export default App;
