import { useEffect, useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  const countUp = () => {
    setCount(count + 1)
    // document.title = `You clicked ${count} times`
  }

  return(
    <>
      <div onClick={countUp}>
        {count}
      </div>
    </>
  )
}