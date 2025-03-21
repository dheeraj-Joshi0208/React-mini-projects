import Calculator from "./Component/Calculator";

function App() {
  const flexCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <>
      <div style={flexCenter}>
        <Calculator />
      </div>
    </>
  );
}

export default App;
