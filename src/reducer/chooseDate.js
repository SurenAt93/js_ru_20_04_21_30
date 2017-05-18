import {FILTER_ARTICLES_BY_DATE} from '../constants'

export default (date = { from: null, to: null }, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLES_BY_DATE:
            const { date } = payload
            return date
    }

    return date
}