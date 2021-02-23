type Props = {
  count: number,
  couontUp: () => void
}

export const Counter2 = (props: Props) => {
  return (
    <>
      <p>下をクリックする！</p>
      <p onClick={props.couontUp}>{props.count}</p>
    </>
  )
}