import TopNav from "./Components/TopNav";
import "./App.css";
import Title from "./Components/Title";
import OurService from "./Components/OurService";
import { thingsContent } from "./Content/ThingsContent";
import Contact from "./Components/Contact";
import About from "./Components/About";
import GuestReview from './Components/GuestReview'

const App = () => {
  return (
    <div>
      <TopNav />
      <div className="container main-container">
        <Title />
        <About />
        <OurService
          title="THINGS TO DO"
          content={thingsContent}
          isSvg={false}
        />
        <GuestReview />
        <Contact />
      </div>
    </div>
  );
};

export default App;
