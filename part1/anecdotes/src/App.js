import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const randomIndex = (arr) => {
    return Math.floor(Math.random()*arr.length)
  }
  const randomAnecdote = () => {
    let x = selected
    while (x === selected) {
      x = randomIndex(anecdotes)
    }
    setSelected(x)
    console.log(selected)
  }
  const incrementVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const anecdoteWithMostVotes = () => {
    let result = 0
    let resultVotes = votes[0]
    for (let i = 1; i < anecdotes.length; i++) {
      if (votes[i] > resultVotes) {
        result = i
        resultVotes = votes[i]
      }
    }
    return result
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <Button text='vote' onClick={incrementVotes} />
        <Button text='next anecodte' onClick={randomAnecdote} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[anecdoteWithMostVotes()]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
    </div>
  )
}

const Button = (props) => {
  const { text, onClick } = props
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App