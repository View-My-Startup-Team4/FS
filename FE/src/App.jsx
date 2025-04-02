import Header from "./common/Header/Header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./common/Layout/Layout";
import { BoardListProvider } from "./context/BoardListContext";

const client = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={client}>
        <BoardListProvider>
          <Layout>
            <Outlet />
          </Layout>
        </BoardListProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
