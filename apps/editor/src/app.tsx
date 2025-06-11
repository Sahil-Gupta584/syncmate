import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { httpBatchLink } from "@trpc/client";
import { useCallback, useEffect, useState } from "react";

// Import the generated route tree
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { backend } from "@repo/trpc/react";
import { ThemeProvider } from "next-themes";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  const [queryClient] = useState(() => new QueryClient());

  const createTrpcClientFunction = useCallback(() => {
    return backend.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_BACKEND_URL + "/trpc",
        }),
      ],
    });
  }, []);
  const [trpcClient, setTrpcClient] = useState(createTrpcClientFunction);

  useEffect(() => {
    setTrpcClient(createTrpcClientFunction);
  }, [createTrpcClientFunction]);

  return (
    <ThemeProvider attribute="class">
      <HeroUIProvider>
        <backend.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <ToastProvider placement="top-center" />

            <RouterProvider router={router} />
          </QueryClientProvider>
        </backend.Provider>
      </HeroUIProvider>
    </ThemeProvider>
  );
}
