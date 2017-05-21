import {normalizedComments as defaultComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

import {} from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc, [comment.id]: comment
}), {})

export default (comments = commentsMap, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            const { id, comment: text, user } = payload;
            return { ...comments, [id]: {id, text, user} };
    }

    return comments
}