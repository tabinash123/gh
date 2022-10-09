import React, {useState } from 'react'


const Getting = ({data,setData}) => {
    const [input, setinput] = useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      setData([...data,input]);
      setinput('');
      return;
    
    }  
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={(e)=>{setinput(e.target.value)}} />
            <button>fgasdf</button>
        </form>
    </div>
  )
}

export default Getting;