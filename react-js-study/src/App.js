import {Greet} from './components/Greet'
import {Message} from './components/Message'
import { ClickEvent } from './components/ClickEvent';
import './App.css';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
    </div>
  );
}

export default App;
