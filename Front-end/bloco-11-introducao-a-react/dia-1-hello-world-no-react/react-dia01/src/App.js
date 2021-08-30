import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = ['Estudar no course', 'Assistir aula ao vivo', 'Fazer exercicios', 'Acompanhar monitorias']

function App() {
  return (
    <div className="App">
    { array.map((lista) => Task(lista)) }
    </div>
  );
}

export default App;
