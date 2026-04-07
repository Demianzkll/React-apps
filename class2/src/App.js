import logo from './logo.svg';
import './App.css';
import WelcomeCard from './WelcomeCard.js'
import InfoCard from './InfoCard.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a>
      </header>

    <WelcomeCard
      name="Demian"
      age={17}
      isStudent={true}
      favoriteSubjects={["Python", "TypeScript", "SQL"]}
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQGHKexWoNife5mckGZdRl_GbDLwr6xgO7Q&s"/>

      <hr/>

    <InfoCard
      title="Gladiator"
      description="Cool movie"
      rating={3}
      tags={["Strong", "Will", "Power"]}
      color="#282c34"
      isPremium={true}
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQGHKexWoNife5mckGZdRl_GbDLwr6xgO7Q&s"/>

    </div>
  );
}

export default App;