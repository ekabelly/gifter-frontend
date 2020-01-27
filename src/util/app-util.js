export default {
    pick
};

function pick(obj, fieldsArr, shouldReturnEmptyFields){
    const newObj = {}
    for (const field of fieldsArr) {
        if(shouldReturnEmptyFields || obj[field]){
            newObj[field] = obj[field];
        }
    }
    return newObj;
}