import Header from "./Header";
import Entry from "./Entry";
import travelData from "../../data.js";

console.log(travelData);

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {travelData.map((data) => (
          <Entry key={data.id} {...data} />
        ))}
      </main>
    </>
  );
}

export default App;
