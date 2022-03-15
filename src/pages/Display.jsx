import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Gallery } from "../components/gallery";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "../layout/Context";
import { Card } from "../components/display/StoryCard";
import { StepsManager } from "../components/display/StepsManager";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export const DisplayPage = (props) => {
  const { data } = useContext(MyContext);
  const [currentCard, setCurrentCard] = useState(false);

  useEffect(() => {
    if (props.match.params.id) {
      if (data.length > 0) {
        let filtered = data.find(item => {
          return item.fields.encoreID.toString() === props.match.params.id
        })
        setCurrentCard(filtered)
      }
    }
  }, [data])

  return (
    <div>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>

        {currentCard && <StepsManager record={currentCard}></StepsManager>}
      </div>
    </div>
  );
};

