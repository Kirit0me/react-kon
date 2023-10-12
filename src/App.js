import Display from "./KOn.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App" class="pb-8">
      <Navbar />
      <h1 class="p-6 pr-6 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-500 via-yellow-200 to-fuchsia-300">
        Band Members from K-On
      </h1>
      <Display />
    </div>
  );
}


export default App;
