import React from "react";
import "./Steps.scss";
import CompeteAndWin from "../../Assets/compete-and-win.gif";
import WinCashPrize from "../../Assets/win-cash-prize.gif";
import SignUp from "../../Assets/login-step-animation.gif";
import EnterAContest from "../../Assets/enter-a-contest.gif";
import SingleUnit from "../../Assets/single-unit.png";
function Steps ()
{
  
  const data = [
    {
      name: "Create Your Account",
      image:SignUp
    },
    {
      name: "Join a Contest",
      image:EnterAContest
    }, {
      name: "Compete And win",
      image:CompeteAndWin
    }, {
      name: 'Redeem amazing cash prizes',
      image:WinCashPrize
    }
  ]

  return (
    <div id="steps-parent">
      <h1>It’s Just a matter of a few steps and you too can win!</h1>
      
      <div id="steps">
        <img src={SingleUnit} id="first-unit" alt="" />
        <img src={SingleUnit} id="second-unit" alt="" />
        {
          data.map( items =>
          {
            return (
              <div>
                <img src={ items.image } alt="" />
                <p>{items.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Steps;
