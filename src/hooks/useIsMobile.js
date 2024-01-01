import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  return useMediaQuery({ query: "(max-width: 1300px)" });
};

export default useIsMobile;
