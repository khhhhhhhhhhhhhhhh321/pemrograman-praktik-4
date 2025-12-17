import { useState } from "react";
import Counter from "./Counter";
import UserForm from "./UserForm";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  return (
    <div className="app-container">
      <header className="header">
        <h1>State Management dengan useState</h1>
        <div className="nav-buttons">
          <button
            className={activeTab === "counter" ? "active" : ""}
            onClick={() => setActiveTab("counter")}
          >
            Counter App
          </button>
          <button
            className={activeTab === "userform" ? "active" : ""}
            onClick={() => setActiveTab("userform")}
          >
            User Form
          </button>
        </div>
      </header>

      <main className="content">
        {activeTab === "counter" ? <Counter /> : <UserForm />}
      </main>
    </div>
  );
}

export default App;
