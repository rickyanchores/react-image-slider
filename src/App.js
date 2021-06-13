import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <h1>React Image Slider</h1>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
