import { useDispatch } from "react-redux";

import { AppDispatch } from "src/redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
