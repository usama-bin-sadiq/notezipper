import './App.css';
<<<<<<< Updated upstream

function App() {
  const pak = "PAKISTAN";
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello World {pak}</h2>
      </header>
=======
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main style ={{minHeight: "93vh"}}>

      </main>
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
