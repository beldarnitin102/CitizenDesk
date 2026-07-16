import { useSelector } from "react-redux";

const useRole = () => {
  return useSelector(
    (state) => state.auth.role
  );
};

export default useRole;