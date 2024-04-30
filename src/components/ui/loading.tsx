import { useIsFetching, useIsMutating } from '@tanstack/react-query';

import { Spinner } from './spinner';

export const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <div
      className={`fixed z-[999] ${isFetching || isMutating ? 'flex' : 'hidden'} min-h-svh w-svw items-center justify-center bg-black/30`}
    >
      <Spinner variant="light" />
    </div>
  );
};
