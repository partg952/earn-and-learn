import React from "react";
import { useRef } from "react";
import FigmaEmbed from "react-figma-embed";
import "./Walkthrough.scss";
import SelectTest from "../Assets/1.png";
import Homepage1 from "../Assets/2.png";
import Homepage2 from "../Assets/3.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import fowardArrow from '../Assets/forwardArrow.svg';
import ContestPage1 from "../Assets/4.png";
import Arrow from "../Assets/arrow.svg";
import ContestPage2 from "../Assets/5.png";
import ContestPage3 from "../Assets/6.png";
import TestPage from "../Assets/7.png";
import WinnerResults from "../Assets/8.png";
import { useState } from "react";
function Walkthrough() {
  const nextButton = useRef();
  const [currentIndex, setIndex] = useState(0);
  const [nextButtonValue, setValue] =
    useState('Next <ArrowForwardIosIcon style={{ color: "white" }} />');
  console.log(currentIndex);
  const data = [
    {
      caption:
        "Choose the exam that you want to ace! You can choose as many tests as you wish to from available list",
      image: SelectTest,
    },
    {
      caption:
        "Switch between exams,view upcoming popular contests that you might love to appear in and view all the parts of the syllabus and how much preparation is completed for watch!",
      image: Homepage1,
    },
    {
      caption:
        "View the top leagues that are popular amongst fellow contestants and choose one and view the contests that they host.",
      image: Homepage2,
    },
    {
      caption:
        "Select any contest & view everything it has to offer! The meter below the information cards shows how compatible you are with this test according to previous performance ,giving you a choice to enter the contest or prepare and come back!",
      image: ContestPage1,
    },
    {
      caption:
        "View your fellow contestants and click on their name cards to view their performance stats to see their level of preparation and compare to yours",
      image: ContestPage2,
    },
    {
      caption:
        "View the amount of cash prize you could get if you come on the top participant list overall",
      image: ContestPage3,
    },
    {
      caption:
        "Answer each question and swipe left to go to the next question card swipe up if you want to review the question later .The little robot on the bottom right will help in between to give any necessary directions you might need!",
      image: TestPage,
    },
    {
      caption:
        "Choose the exam that you want to ace! You can choose as many tests as you wish to from the available list.",
      image: WinnerResults,
    },
  ];
  return (
    <div>
      <div id="info">
        <img id='mobile-image' src={data[currentIndex].image} alt="" />
        <div>
          <p>{data[currentIndex].caption}</p>
        </div>
      </div>
      <span id="button-span">
        <button
          id="prev-button"
          onClick={() => {
            if(currentIndex > 0){
              setIndex(currentIndex - 1);
              nextButton.current.style.backgroundColor =
                "rgb(62, 197, 250)";
              document.getElementById("next-button").innerHTML =
                `Next <img style="height:20px;" src=${fowardArrow}/>`;
          }}}>
        
          <ArrowBackIosIcon style={{ color: "rgb(62, 197, 250)" }} />
          Prev
        </button>
        <br />
        <button
        ref={nextButton}
          id="next-button"
          onClick={(e) => {
            if (currentIndex < data.length - 1) {
              if(currentIndex === data.length-2){
                console.log("on last item")
                document.getElementById("next-button").style.backgroundColor = 'green';
                document.getElementById("next-button").innerHTML = 'Complete!';
              }
              setIndex(currentIndex + 1);
            }
          }}
          
        >
          Next
          <img style={{height:'20px'}} src={fowardArrow} alt="" />
        </button>
          
      </span>
    </div>
  );
}

export default Walkthrough;
