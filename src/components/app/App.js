import Header from '../headerLogo/HeaderLogo';
import TaskAddForm from '../tasksAddForm/TasksAddForm';
import TaskTable from '../tasksTable/TaskTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <TaskAddForm />
        <TaskTable />
      </main>
    </div>
  );
}

export default App;
