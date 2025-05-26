import { useEffect, useState } from "react";
import Homepage from "../components/template/homepage/HomeTemp";
import Loader from "../components/element/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader/>
  ):(
    <div>
    <Homepage />
    </div>
  );
};

export default Home;
