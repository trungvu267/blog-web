import { useState } from "react";
import { Button } from "react-daisyui";

function App() {
  const [count, setCount] = useState(0);

  return <Button color="primary">Click me</Button>;
}

export default App;
