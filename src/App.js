import logo from './logo.svg';
import './App.css';
import Login from './Component/SignIn.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Koushik Web Hosting in Netlify free Hosting Service
        </p>
       <Login></Login>
      </header>
    </div>
  );
}

export default App;
