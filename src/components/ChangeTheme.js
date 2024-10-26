import { useState } from "react";

export default function ChangeTheme() {
    const [theme, setTheme] = useState('autumn');

    return (
      <div>
        <button onClick={() => setTheme("spring")}>Spring</button>
        <button onClick={() => setTheme("summer")}>Summer</button>
        <button onClick={() => setTheme("autumn")}>Autumn</button>
        <button onClick={() => setTheme("winter")}>Winter</button>
      </div>
    );
} 