import React from 'react'

const Showing = ({data,setData}) => {

  
  return (
    <div>{data.map((item,idx)=>{


      const remove=(idx)=>{
        const newarray= data.filter((item,index)=>{
          return index !== idx;
        })
        setData(newarray);
  }

      return (
        <div key={idx} >
          {`${item} ${idx}`}
          <button onClick={()=>remove(idx)}>delet</button>
        </div>
      )
    })}<br />
    hello</div>
  )
}

export default Showing;