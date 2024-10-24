import { useState } from "react";
import "./App.css";

interface GreetingProps {
  name: string;
  age: number;
  date?: any;
}
const currentTime = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString(undefined, options);
};
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello {name}, you have {age} years old!
      </p>
      <p>Today is: {currentTime()}</p>
    </div>
  );
};

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const removeButton = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Wartość jest równa 0");
    }
  };
  return (
    <div>
      <p>Current counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={removeButton}>Remove</button>
    </div>
  );
};
const LoginForm: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Username: ${user}, Password ${password}`);
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="User" age={20}></Greeting>
        <Counter></Counter>
        <LoginForm></LoginForm>
      </header>
      <div></div>
    </div>
  );
}

export default App;
