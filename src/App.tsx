import { Header } from "./components/Header";
import { MobileBar } from "./components/MobileBar";
import { AppRouter } from "./router";

function App() {
  return (
    <>
      <Header />
      <MobileBar />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
