const removeFromArray = function(originalArray, ...toRemove) {
    const newArray = [];

    originalArray.forEach((item) => {
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
