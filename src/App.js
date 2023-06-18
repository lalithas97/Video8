import './Appa.css';
import Navbar from './components/Navbar';
//If you don't import components you shall get the following error. "'TextForm' is not defined  react/jsx-no-undef"
import TextForm from './components/TextForm';

//let name = "Sumiran";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below." />
      </div>
    </>
  );
}


export default App;
