import logo from './logo.svg';
import './App.css';
import Header from './sections/header';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Section7 from './sections/section7';




import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default App;
