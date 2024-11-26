function App() {
  let name="Neesu";
  return (
    <div className='App'>
      <h2>Hello World!</h2>
      <p> {name=='Neesu'? 'Hello Neesu' : 'Hello Guest' } </p>
    </div>
  );
}

export default App;
