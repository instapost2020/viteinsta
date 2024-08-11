import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </>
  ),
});
