const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 0, // چون می‌خوای همیشه stale باشه که هربار refetch بشه
  }
};

export default defaultOptions