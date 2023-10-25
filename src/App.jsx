import questions from './data'
import SingleQuestion from './assets/components/SingleQuestion'
import { useState } from 'react'
const App = () => {
  const [isActiveId, setIsActiveId] = useState(null)

  const toggleAwsner = (id) => {
    console.log(id)
    const newActiveId = isActiveId === id ? null : id
    setIsActiveId(newActiveId)
  }
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              toggleAwsner={toggleAwsner}
              isActiveId={isActiveId}
            />
          )
        })}
      </section>
    </main>
  )
}
export default App
