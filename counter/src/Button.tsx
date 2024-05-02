import { useState } from "react";
import { pubsub } from "pubsub/store";

const Button = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("notify", {
      count: count + 1,
    });
    pubsub.notify("increment", {
      count: count + 1,
    });
  };

  return <button onClick={increment}>Counter in button: {count}</button>;
};

export default Button;
