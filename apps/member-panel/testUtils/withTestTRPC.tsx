import { PropsWithChildren } from "react";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SuperJSON from "superjson";
import { AppRouter } from "@mcfu/trpc-server";

const trpcReact = createTRPCReact<AppRouter>();
const url = `http://localhost:${process.env.PORT ?? 3000}/api/trpc`;
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});
const trpcClient = trpcReact.createClient({
  links: [httpBatchLink({ url })],
  transformer: SuperJSON,
});

export const withTestTRPC = ({ children }: PropsWithChildren) => (
  <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpcReact.Provider>
);
