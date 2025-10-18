import { useAppSelector } from "@/lib/hooks";

const getToken = () => {
  const token = useAppSelector((state) => state.auth.token);
  return token;
};

export default getToken;
