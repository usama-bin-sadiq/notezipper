import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LandingPage } from "./components/screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";

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
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
