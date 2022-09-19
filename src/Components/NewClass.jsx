// import React, {useState} from 'react'

// export default function OutraPag(){

//   const [input,setInput] = useState()

//   console.log('oi')

//   return(
//     <>
//       <h1>{input}</h1>
//       <input onChange = {(e)=>{setInput(e.target.value)}}/>
//     </>
//   )
// }

// import React, {useRef} from 'react'

// export default function OutraPag(){

//     const referenciaInput = useRef()

//         function handleInput(e){
//             e.preventDefault()
//             console.log(referenciaInput.current.value)
//     }

//     console.log('Renderizou')

//     return(
//         <form onSubmit={handleInput}>
//             <input  ref={referenciaInput} type='text'/>
//             <input type='submit'/>
//         </form>
//     )
// }

import React, {useState, useRef} from 'react'

export default function OutraPag(){

  const [number,setNumber] = useState(0)
  const refNumber = useRef(number)

  function Add(){
    setNumber(prevState => prevState + 1)
    refNumber.current = refNumber.current + 1
  }

  function Clicks(){
    alert('Número de cliques: ' + refNumber.current)
  }

  return(
    <>
    <h1>{number}</h1>
    <button onClick={() =>{Add()}}>Clique</button>
    <button onClick={() =>{Clicks()}}>Quantidade de cliques</button>
    </>
  )
}

// import React, {useRef, useState} from 'react';

// export default function Outro(){
//   const [input1, setInput1] = useState();
//   const [msg, setMsg] = useState();
//   const refInput2 = useRef();

//   function Send() {
//     setMsg(input1);
//     refInput2.current.focus();
//   }

//   return (
//     <>
//       <input onChange={(e) => setInput1(e.target.value)}/>
//       <input ref={refInput2}/>
//       <button onClick={() => {Send()}}>Clique aqui</button>
//       <h2>{msg}</h2>
//     </>
//   )
// }
