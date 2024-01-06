import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar />
      {/* my-3
    m means margin 
    y means direction 
    3 means distance*/}
      <div className="container my-3">
        <TextForm heading="Enter your Text Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
