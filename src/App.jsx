import questions from './data'
import SingleQuestion from './assets/components/SingleQuestion'
const App = () => {
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </main>
  )
}
export default App
