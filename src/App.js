import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Breadcrumb from './components/breadCrumb';
import Activity from './components/activityArea';

function App() {
  return (
    <div className="App">
      <Header/>
      <Breadcrumb/>
      <Activity/>
    </div>
  );
}

export default App;
