import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
  const expenses = [
    { title: "Car insurance", amount: 300, date: new Date(2021, 2, 28) },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
