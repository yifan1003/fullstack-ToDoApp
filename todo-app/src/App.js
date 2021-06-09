// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstComponent, {SecondComponent} from './component/learning-examples/FirstComponent'
import FifthComponent from './component/learning-examples/FifthComponent';
import Counter from './component/counter/Counter'
import TodoApp from './component/todo/TodoApp'
import "./bootstrap.css";

class App extends Component {
    render() {
        return (
            < div
        className = "App" >
            {/* <Counter></Counter> */}
            < TodoApp > < /TodoApp>
            < /div>
    )
        ;
    }
}

class LearningComponent extends Component {
    render() {
        return (
            < div
        className = "LearningComponent" >
            My
        Hello
        World
        {/* for user customized component, the component name must start with a Capital letter */
        }
    <
        FirstComponent > < /FirstComponent>
        < SecondComponent > < /SecondComponent>
        < ThirdComponent > < /ThirdComponent>
        < FourthComponent > < /FourthComponent>
        < FifthComponent > < /FifthComponent>

        < /div>
    )

    }
}


// Function Component
function ThirdComponent() {
    return (
        < div
    className = "thirdcomponent" >
        ThirdComponent
        < /div>
)
    ;
}

function FourthComponent() {
    return (
        < div
    className = "fourthcomponent" >
        ForthComponent
    !!!
    < /div>
)
    ;
}

export default App;

