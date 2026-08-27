
import { bindActionCreators } from "redux"
import { allCreators } from "../store/reducers/action-creators"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store"

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(allCreators, dispatch)
}