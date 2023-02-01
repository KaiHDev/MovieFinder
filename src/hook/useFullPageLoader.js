import React from "react";
import FullPageLoader from "../components/FullPageLoader";
import { useState } from "react";

const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullPageLoader /> : null,
    () => setLoading(true), // Show loading
    () => setLoading(false), // Hide loading.
  ];
};

export default useFullPageLoader;
