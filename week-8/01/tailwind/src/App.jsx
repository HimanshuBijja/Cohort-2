import "./App.css";
import { RevenueCard } from "./components/Revenue";

function App() {
  return (
    <div className="grid grid-cols-3 p-10">
      <RevenueCard title = {"Amount pending"} amount = {"9,08,43"} orderCount={12}/>
    </div>
  );
}

export default App;
