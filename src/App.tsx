import { Header } from "./components/Header";
import { AppRouter } from "./router";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
