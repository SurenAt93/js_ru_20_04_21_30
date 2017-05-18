import {FILTER_ARTICLES_BY_SELECTION} from '../constants'

export default (selection = [], action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLES_BY_SELECTION:
            const { selection: selected } = payload
            return [].concat(selected)
    }

    return selection
}