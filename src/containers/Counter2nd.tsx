import { Counter2 } from "../components/Counter2"
import { useState } from "react"

export const Counter2nd = () => {
  const [count, setCount] = useState(60)

  const countUp = () => {
    setCount(count + 1)
  }

  return(
    <Counter2 count={count} couontUp={countUp}></Counter2>
  )
}