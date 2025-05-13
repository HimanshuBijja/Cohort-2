// Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        Hello  {"   "}
      <button className="border-2 w-30" onClick={() => setCount(count + 1)}>
        click me {count}
      </button>
    </div>
  );
}
