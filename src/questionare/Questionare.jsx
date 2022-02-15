import React from "react";
import "./Questionare.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ClearIcon from "@material-ui/icons/Clear";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import TopNavbar from "../Assets/topNavbar.svg";
import BottomNavbar from "../Assets/bottomNavbar.svg";
import FormControl from "@mui/material/FormControl";
import {useNavigate} from 'react-router-dom'
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Complete from "../Assets/complete.svg";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
} from "./questionsData";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase.js";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Questionare() {
  const otherField = useRef();
  const auth = getAuth(app);
  const history = useNavigate();
  const [currentIndex, setIndex] = useState(0);
  const db = getDatabase(app);
  const [otherBoxText, setOtherText] = useState("");
  const [userInfo, setInfo] = useState({});
  const [isChecked, setChecked] = useState(true);
  console.log(currentIndex);
  const [currentSection, setSection] = useState(section1);
  console.log(currentSection);
  const [steps, setSteps] = useState(["1", "2", "3", "4", "5", "6"]);
  const [completed, setCompleted] = useState(false);
  const [activeStep, setStep] = useState(0);
  const [answeredQuestions, addQuestions] = useState([]);
  console.log(answeredQuestions);
  const [value, setValue] = useState("");
  console.log(value);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setInfo(user);
    });
  });
  return (
    <>
      <div
        id="question-parent"
        style={{ width: "350px", margin: "10px auto 10px auto" }}
      >
        <img id="top-navbar" src={TopNavbar} alt="" />
        <img id="bottom-navbar" src={BottomNavbar} alt="" />
        <Stepper
          style={{ width: "100%", margin: "40px auto 0px 0px" }}
          alternativeLabel
          activeStep={activeStep}
        >
          {steps.map((step) => {
            return (
              <Step>
                <StepLabel sx={{ fontSize: "5px" }}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {completed == false && (
          <div id="main-question-div">
            <p style={{ textAlign: "center" }}>
             {currentIndex + 1} / {currentSection.length}
            </p>
            <h3>Question {currentIndex + 1}</h3>
            <h5>{currentSection[currentIndex].question}</h5>
            {/* For type text */}
            <div id="questions-list">

            {currentSection[currentIndex].type == "text" && completed == false && (
              <TextField
                id="outlined-basic"
                label="Enter your input here"
                value={value}
                variant="outlined"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            )}
            {/* for type single choice */}
            {currentSection[currentIndex] != undefined &&
              currentSection[currentIndex].type == "Single Choice" &&
              completed == false && (
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={value}
                    onChange={(change) => {
                      setValue(change.target.value);
                    }}
                  >
                    {currentSection[currentIndex].options.map((options) => {
                      return (
                        <div
                          style={{
                            width: "300px",
                            backgroundColor: "white",
                            margin: "4px",
                            padding: "2px",
                            paddingLeft: "5px",
                            borderRadius: "8px",
                          }}
                        >
                          <FormControlLabel
                            value={options}
                            control={<Radio />}
                            label={options}
                          />
                        </div>
                      );
                    })}
                    {currentSection[currentIndex].other == true && (
                      <>
                        <div
                          style={{
                            width: "300px",
                            backgroundColor: "white",
                            margin: "4px",
                            padding: "2px",
                            paddingLeft: "5px",
                            borderRadius: "8px",
                          }}
                        >
                          <FormControlLabel
                            value={"Other"}
                            control={<Radio />}
                            label={"Other"}
                          />

                          <TextField
                            id="outlined-basic"
                            style={
                              value == "Other"
                                ? { display: "block" }
                                : { display: "none" }
                            }
                            label="Enter your input here"
                            ref={otherField}
                            onChange={(e) => {
                              setOtherText(e.target.value);
                            }}
                            variant="outlined"
                          />
                        </div>
                      </>
                    )}
                  </RadioGroup>
                </FormControl>
              )}

            {currentSection[currentIndex].type == "Multiple Choice" &&
              completed == false && (
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  {currentSection[currentIndex].options.map((options) => {
                    return (
                      <FormControlLabel
                      control={
                          <Checkbox
                            name={options}
                            onChange={(e) => {
                              console.log(e.target.checked);
                              if (e.target.checked) {
                                if (value != undefined) {
                                  setValue([...value, e.target.name]);
                                } else {
                                  setValue([options]);
                                }
                              } else {
                                value.splice(value.indexOf(e.target.name), 1);
                              }
                            }}
                          />
                        }
                        label={options}
                      />
                    );
                  })}
                </FormControl>
              )}
            {currentSection[currentIndex].type == "Scale" &&
              completed == false && (
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    row
                    name="radio-buttons-group"
                    value={value}
                    onChange={(change) => {
                      setValue(change.target.value);
                    }}
                  >
                    {currentSection[currentIndex].options.map((options) => {
                      return (
                        <>
                          <FormControlLabel
                            value={options}
                            control={<Radio />}
                            label={options}
                            labelPlacement="bottom"
                          />
                        </>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              )}

              </div>
            <br />
            <button
              id="submit-button"
              onClick={() => {
                if (value != undefined && value.length != 0) {
                  otherBoxText.length != 0 &&
                    (currentSection[currentIndex].answer = otherBoxText);
                  otherBoxText.length == 0 &&
                    (currentSection[currentIndex].answer = value);
                  setValue("");
                  console.log(currentSection[currentIndex]);
                  answeredQuestions.length != 0
                    ? addQuestions((prev) => [
                        ...prev,
                        currentSection[currentIndex],
                      ])
                    : addQuestions([currentSection[currentIndex]]);
                  set(
                    ref(
                      db,
                      userInfo.uid +
                        "/survey" +
                        "/" +
                        currentSection[currentIndex].question
                    ),{
                    answer:currentSection[currentIndex].answer}
                  ).then(() => {
                    setOtherText("");
                    console.log("in then");
                    console.log(
                      currentSection[currentIndex] ==
                        currentSection[currentSection.length - 1]
                    );
                    if (
                      currentSection[currentIndex] ==
                      currentSection[currentSection.length - 1]
                    ) {
                      console.log("was last question");
                      if (currentSection == section1) {
                        console.log("was in section1");
                        setIndex(0);
                        setSection(section2);
                        setStep(activeStep + 1);
                      } else if (currentSection == section2) {
                        if (
                          section2[section2.length - 1].answer ==
                          section2[section2.length - 1].options[0]
                        ) {
                          setIndex(0);
                          setSection(section3);
                          setStep(activeStep + 1);
                        } else {
                          setIndex(0);
                          setSection(section4);
                          setStep(activeStep + 1);
                        }
                      } else if (
                        currentSection == section3 ||
                        currentSection == section4
                      ) {
                        setIndex(0);
                        setSection(section5);
                        setStep(activeStep + 1);
                      } else if (currentSection == section5) {
                        setIndex(0);
                        setSection(section6);
                        setStep(activeStep + 1);
                      } else if (currentSection == section6) {
                        setIndex(0);
                        setSection(section7);
                        setStep(activeStep + 1);
                      } else if (currentSection == section7) {
                        console.log(answeredQuestions);
                        
                          console.log("sent");
                          setStep(activeStep + 1);
                          setCompleted(true);
                        
                      }
                    } else {
                      setIndex(currentIndex + 1);
                    }
                  });
                }
              }}
              color="success"
            >
              Next
            </button>
          </div>
        )}
        {completed == true && (
          <div style={{textAlign:'center'}}>
            <img src={Complete} alt="" />
            <h2>Congratulations!</h2>
            <button
              id="submit-button"
              onClick={() => {
                document.getElementById(
                  "question-parent"
                ).style.backgroundColor = "rgba(20, 19, 19, 0.336)";
                document.getElementById("question-parent").style.width =
                  "350px";
                document.getElementById("popup").style.backgroundColor =
                  "white";
                  document.getElementById("popup").style.transform = 'translateY(0)'
              }}
            >
              Go To HomePage
            </button>
          </div>
        )}
      </div>
      {
        completed == true &&
        <div id="popup" style={{backgroundColor:'red'}}>
          <ClearIcon style={{
            marginRight:'-280px'
          }}
          onClick={()=>{
            document.getElementById("question-parent").style.backgroundColor =
              "transparent";
            document.getElementById("question-parent").style.width = "350px";
            document.getElementById("popup").style.backgroundColor = "transparent";
            document.getElementById("popup").style.transform = 'translateY(600px)'
          }}
          />
        <p>
          Thank you for giving us your precious time,unfortunately we are not
          available in your area,as soon as we release we will notify you
        </p>
        <button id="submit-button" style={{bottom:'10px'}} onClick={()=>{
          history("/")
        }}>Go To Homepage</button>
      </div>
      }
    </>
  );
}

export default Questionare;
