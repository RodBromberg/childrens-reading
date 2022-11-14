import { useState, useEffect } from 'react'
import words from './vocab-words/words.json'

// interface Data {
//   arr: 
// }
// ['preprimer','grade6']
function Test(){
  const [index,setIndex] = useState(0)
  const [correct,setCorrect] = useState(0)
  const [level,setLevel] = useState(['preprimer','grade6'])

  const correctHandler = ()=>{
    setIndex(index + 1)
    setCorrect(correct + 1)
    console.log('hit')
  }
  const inCorrectHandler = ()=>{
    setIndex(index + 1)
  }

  useEffect(()=>{
    if(correct >= 8){

    }
  },[correct])

  const current = level[index]


  console.log(words[0]['' + current], 'here')
  
  return (
    // <div className="quiz">
    //   <p>Please try to read each word</p>
    //   {words[0]}
    //   <p onClick={correctHandler}>Correct</p>
    //   <p onClick={inCorrectHandler}>InCorrect</p>
    // </div>
    
    <div>hi</div>
  )
}

// function App() {
//     return (
//       <div>
//         {/* {words.grade6.map((item) => (
//           <div>{item}</div>
//         ))} */}
//         <Quiz />
//       </div>
//     )
// }


export default Test