import { DefaultOptions, QueryCache, QueryClient } from '@tanstack/react-query';

import { toast } from '@/components/ui/use-toast';

function errorToast(errorMessage: string) {
  toast({
    variant: 'destructive',
    title: 'ERROR',
    description: errorMessage ?? 'could not connecting to the server',
  });
}

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

const queryCache: QueryCache = new QueryCache({
  onError: (error) => {
    errorToast(error.message);
  },
});

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  queryCache: queryCache,
});
