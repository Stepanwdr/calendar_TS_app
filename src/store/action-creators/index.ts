import { AuthActionCreators } from './auth';
import { EventActionCreators } from './event';
export const AllActionCreators={
    ...AuthActionCreators,
    ...EventActionCreators
}