// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
// import Option from "./components/Option";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <Header />
      <Search />
      <Cards />
      {/* <Option /> */}
    </div>
  );
}
export default App;
