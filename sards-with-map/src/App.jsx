import CardList from "./Component/Card";
import "./Component/card.css";

function App() {
  const container = {
    maxWidth: "1220px",
    margin: "0 auto",
    display: "flex",
  };

  return (
    <>
      <div style={container}>
        <CardList />
      </div>
    </>
  );
}

export default App;
