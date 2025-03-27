import Header from "./common/Header/Header";
import { Outlet } from "react-router-dom";
import Header from "./common/Header/Header"


const client = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
