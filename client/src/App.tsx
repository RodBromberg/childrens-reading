import { useState, useEffect } from 'react'
import words from './vocab-words/words.json'


function Quiz(){
  const [levels,setLevels] = useState(['preprimer','grade5','grade6'])
  const [index,setIndex] = useState(0)
  const [levelIndex,setLevelIndex] = useState(0)


  const correctHandler=()=>{
    setIndex(index+1)
    if(index === 10){
      setLevelIndex(levelIndex + 1)
    }
  }
  const inCorrectHandler=()=>{
    setIndex(index + 1)
    if(index === 10){
      setLevelIndex(levelIndex + 1)
    }
  }

  useEffect(()=>{
    if(index === 10) {
      setLevelIndex(levelIndex + 1)
      setIndex(0)
    }
  },[index])

  interface Word {
    preprimer: string[],
    grade5: string[],
    grade6: string[],
  }

  interface Quiz {
    test: keyof typeof word
  }

  type key = keyof Word
  

  const currentLevel: string = levels[levelIndex]
  // * fixf
  const word : any = words

  
  const curr: object = word[0]
  // 

  return (
    <div className="quiz">
      <>
      <p>{`Please try to read each word ${currentLevel}`}</p>
      <p>{word[0][currentLevel][index]}</p>
      <p onClick={correctHandler}>Correct</p>
      <p onClick={inCorrectHandler}>InCorrect</p>
      </>
    </div>
  )
}



function App() {
    return (
      <div>
        {/* {words.grade6.map((item) => (
          <div>{item}</div>
        ))} */}
        {/* <Quiz /> */}
        <Quiz />
      </div>
    )
}


export default App