import data from './data';
import React,{useState} from 'react';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays Today.</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}
export default App;
