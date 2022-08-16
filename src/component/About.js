import React, { useState } from "react";

const About = () => {

    const[chnageTextColor,setchnageTextColor] = useState({
        color : "white",
    })
    const[chnageHeadColor,setchnageHeadColor] = useState({
        color : "white",
    })

    let redColor = () =>{
        setchnageTextColor({
            color : "red",
        })
    }

    let yellowColor = () =>{
        setchnageTextColor({
            color : "yellow",
        })
    }

    let pinkColor = () =>{
        setchnageTextColor({
            color : "pink",
        })
    }

    let grayColor = () =>{
        setchnageTextColor({
            color : "gray",
        })
    }

    let greenColor = () =>{
        setchnageTextColor({
            color : "green",
        })
    }

    let ResetTextColor = () =>{
        setchnageTextColor({
            color : "white",
        })
    }

    let HelloredColor = () =>{
        setchnageHeadColor({
            color : "red",
        })
    }

    let HelloyellowColor = () =>{
        setchnageHeadColor({
            color : "yellow",
        })
    }

    let HellopinkColor = () =>{
        setchnageHeadColor({
            color : "pink",
        })
    }

    let HellograyColor = () =>{
        setchnageHeadColor({
            color : "gray",
        })
    }

    let HellogreenColor = () =>{
        setchnageHeadColor({
            color : "green",
        })
    }

    let ResetColor = () =>{
        setchnageHeadColor({
            color : "white",
        })
    }


    let mystyle = {
        width: "68rem",
        height: "10rem",
        color : "white",
        backgroundColor : "black"
    }

    

  return (
    <>
      <div className="card" style={mystyle}>
        <div className="card-body">
          <h5 className="card-title" style={chnageHeadColor}>Hello</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text" style={chnageTextColor}>
          My name is saurabh mishra.
          I am 22 years old.
          I belongs to bhilai, chhattisgarh.
          I have done my 10th and 12th from cgbse board.
           currently I am pursuing my Btech degree in information technology from rungta college of engineering and technology.
          I belong to a middle-class family.
          My father is a railway employee. And my mother is a housemaker.
          I like to learn new things .
          That's all about me, thank you.
          </p>
        </div>
      </div>
      <div>
      <button className='btn btn-dark mx-1 my-3' onClick={HelloredColor}>Hello in red</button>
      <button className='btn btn-dark mx-1 my-3' onClick={HellogreenColor}>Hello in green</button>
      <button className='btn btn-dark mx-1 my-3' onClick={HellograyColor}>Hello in gray</button>
      <button className='btn btn-dark mx-1 my-3' onClick={HellopinkColor}>Hello in pink</button>
      <button className='btn btn-dark mx-1 my-3' onClick={HelloyellowColor}>Hello in yellow</button>
      <button className='btn btn-dark mx-1 my-3' onClick={ResetColor}>Reset</button>
      </div>
      <div>
      <button className='btn btn-dark mx-1 my-3' onClick={redColor}>Text color in red</button>
      <button className='btn btn-dark mx-1 my-3' onClick={greenColor}>Text color in green</button>
      <button className='btn btn-dark mx-1 my-3' onClick={grayColor}>Text color in gray</button>
      <button className='btn btn-dark mx-1 my-3' onClick={pinkColor}>Text color in pink</button>
      <button className='btn btn-dark mx-1 my-3' onClick={yellowColor}>Text color in yellow</button>
      <button className='btn btn-dark mx-1 my-3' onClick={ResetTextColor}>Reset</button>
      </div>
    </>
  );
};

export default About;
