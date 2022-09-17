import {Greet} from './components/Greet'
import {Message} from './components/Message'
import { ClickEvent } from './components/ClickEvent';
import './App.css';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
