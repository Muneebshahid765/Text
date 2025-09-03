import React from 'react'

function Alert(props) {
    const firstcapital=(Word)=>{
      const lower=Word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className='alertcontainer' id='alert'>
    { props.alert &&  <div className= {`alert-${props.alert.type}`}  role="alert">
   <strong>{firstcapital (props.alert.type)}</strong> : {props.alert.msg}
  </div>}

  </div>
  )
}

export default Alert
