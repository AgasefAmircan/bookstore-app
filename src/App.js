import Header from "./components/Header";
import Home from "./pages/Home";
import '../src/assets/style.css'
function App() {
  return (
    <main>
      <Header />
      <div className="content">
        <Home/>
      </div>
    </main>
  );
}

export default App;
