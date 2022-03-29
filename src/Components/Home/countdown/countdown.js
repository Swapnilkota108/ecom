import React, { useReducer, useState, useEffect } from "react";


// function Countdown(props) {

//     const [{ days, hours, minutes, seconds }, setTimer] = useState({});
//     const [second, setSeconds] = useState();

//     useEffect(() => {
//         let time = getTime(Number(props.days) * 3600 * 24);
//         setTimer(() => time);
//     })

//     setInterval(() => {
//         setSeconds(() => second - 1)
//     }, 1000)





//     return <div className="countdown">
//         <h3>Ends in  {formatTime(days)} : {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}</h3>
//     </div>

// }

// function getTime(totalSeconds) {

//   let days = Math.floor((totalSeconds / 3600) / 24);
//   let hours = Math.floor(totalSeconds / 3600) % 24;
//   let minutes = Math.floor(totalSeconds / 60) % 60;
//   let seconds = Math.floor(totalSeconds) % 60;

//   return { days, hours, minutes, seconds };
// }

// function Countdown() {
//   const [{ days, hours, minutes, seconds }, setTime] = useState({});
//   const [second, setSeconds] = useState(172800);
//   const [timerInterval, setTimerInterval] = useState(0);

//   function startTimer() {
//     if (timerInterval === 0 && second > 0) {
//       setTimerInterval(() => setInterval(countdown, 1000))
//     }
//   }

//   function countdown() {
//     setSeconds(() => second - 1);
//     setTime(() => getTime(second));
//   }

//   useEffect(() => {
//     setTime(()=>getTime(second));

//   })

//   return <div>
//     <button onClick={startTimer}>Start</button>
//     <h3 className="countdown">{days} : {hours} : {minutes} : {seconds}</h3>
//   </div>

// }

function format(time) {
  return time < 10 ? `0${time}` : time;
}

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 17280 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }


  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }



  render() {
    return (
      <h3 className="countdown">
        Ends in - {format(this.state.time.h)} : {format(this.state.time.m)} : {format(this.state.time.s)}
      </h3>
    );
  }
}


export { Countdown };