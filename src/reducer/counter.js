export default (number = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return number + 1;
        default:
            return number;
    }
};