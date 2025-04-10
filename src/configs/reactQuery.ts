const defaultOptions = {
    queries: {
      refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 0, // چون می‌خوای همیشه stale باشه که هربار refetch بشه
    refetchInterval: 30 * 1000, // هر 30 ثانیه یه بار refetch
    }
  };

  export default defaultOptions