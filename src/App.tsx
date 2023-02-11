import useUpdate from './hooks/useUpdate'
function App() {
  const { forceUpdate } = useUpdate()
  console.log('update')

  return (
    <div>
      <button onClick={() => forceUpdate()}>按钮</button>
    </div>
  )
}

export default App
