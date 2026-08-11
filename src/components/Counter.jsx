import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>{title}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </section>
  );
}

export default Counter;
