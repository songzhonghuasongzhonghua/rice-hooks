import useUpdate from './hooks/useUpdate';
function App() {
  const {updateComponent} = useUpdate()
  console.log('update');
  
  return (
    <div>
     <button onClick={() => updateComponent()}>按钮</button>
    </div>
  );
}

export default App;
