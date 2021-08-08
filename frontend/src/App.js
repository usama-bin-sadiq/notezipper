import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


//function App() {
 // const pak = "PAKISTAN";
 // return (
  //  <div className="App">
    //  <header className="App-header">
      //  <h2>Hello World {pak}</h2>
      //</header>
//</div>
 // );
//}
function App() {
  return (
    <div className="App">
      <Header />
      <main style ={{minHeight: "93vh"}}>

      </main>
      <Footer />

    </div>
  );
}

export default App;
