import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalFeedback = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad)
  const positive = ((good) / (good + neutral + bad)) * 100 + '%'

  const texts = ['good', 'netural', 'bad', 'all', 'average', 'positive']
  const values = [good, neutral, bad, totalFeedback, average, positive]

  const incrementGood = ()  => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <Label text='give feedback' />
      <Button label='good' onClick={incrementGood} />
      <Button label='neutral' onClick={incrementNeutral} />
      <Button label='bad' onClick={incrementBad} />
      <Label text='statistics' />
      <Statistics texts={texts} values={values} />
    </div>
  )
}

const Label = (props) => {
  const { text } = props
  return (
    <h1>{text}</h1>
  )
}

const Statistics = (props) => {
  const { texts, values } = props
  if (values[3] === 0) return (
    <div>
      <p>No feedback given</p>
    </div>
  )
  return (
    <table>
        <StatisticLine text={texts[0]} value={values[0]} />
        <StatisticLine text={texts[1]} value={values[1]} />
        <StatisticLine text={texts[2]} value={values[2]} />
        <StatisticLine text={texts[3]} value={values[3]} />
        <StatisticLine text={texts[4]} value={values[4]} />
        <StatisticLine text={texts[5]} value={values[5]} />
    </table>
  )
}

const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <tr>{text} {value}</tr>
  )
}

const Button = (props) => {
  const { label, onClick } = props
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default App