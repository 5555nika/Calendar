import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store";

export const useTypeSelector : TypedUseSelectorHook<RootState> = useSelector