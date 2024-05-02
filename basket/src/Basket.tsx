import { useEffect, useState } from "react";
import { pubsub } from "pubsub/store";

const Basket = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return pubsub.subscribe((payload) => {
      console.log("subscribe", {
        payload,
      });

      if (payload.type === "increment") {
        setCount(payload.message.count);
      }
    });
  }, []);

  return <div>Count in basket: {count}</div>;
};

export default Basket;
