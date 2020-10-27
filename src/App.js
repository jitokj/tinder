import Header from "./Header";
import './App.css';
import TinderCard from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
   
     {/* header */}
     <Header />
      {/* TinderCards */}
      <TinderCard />
       {/* SwipeButtons */}
       <SwipeButtons />
    </div>
  );
}

export default App;
