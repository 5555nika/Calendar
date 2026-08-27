import { authActionCreator } from "./auth/action-creators";
import { eventActionCreator } from "./event/action-creators";

export const allCreators = {
    ...authActionCreator,
    ...eventActionCreator
}