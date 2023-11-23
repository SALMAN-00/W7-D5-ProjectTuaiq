import React from 'react'

function Card(props) {
  return (
    
    <div className={props.name=='معسكر'?'purple':'green'}>
      <h2>{props.name}</h2>
      <h1>{props.title}</h1>
    <div className='sec1'>
      <img src={props.locImg}></img>
        <p>{props.loc}</p>
        <img src={props.calImg}></img>
        <p>{props.cal}</p>
    </div>
      <div className='sec2'>
        <div className='sec2-1'>
        <img src={props.startImg}></img>
        <p>{props.start}</p>
        </div>
        <button>التفاصيل{props.btn}</button>
      </div> 
    </div>
  )
}

export default Card