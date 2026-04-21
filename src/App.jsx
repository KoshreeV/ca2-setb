import AppRouter from "./router/Approuter.jsx";
import { ActivityProvider } from "./context/ActivityContext.jsx";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", width: "100%", backgroundColor: "white" }}>
      <ActivityProvider>
        <AppRouter />
      </ActivityProvider>
    </div>
  );
}

export default App;
