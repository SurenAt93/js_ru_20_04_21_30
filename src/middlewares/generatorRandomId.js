import { ADD_COMMENT } from '../constants';

export default store => next => action => {

    if (action.type == ADD_COMMENT) {

        const randomId = Date.now() + Math.floor(Math.random() * 10000);

        let newAction = {
            ...action
        }

        newAction.payload = {
            ...action.payload,
            id: randomId
        }

        next(newAction);

        return;
    }

    next(action);
}