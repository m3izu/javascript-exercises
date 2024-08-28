const getAge = function(bird, dird) {
    if (!dird) {
        dird = new Date().getFullYear();
   
    }
    return dird - bird;};

    const findTheOldest = function (people) {
        return people.reduce((tiguwang, currentFerzon) => {
            const oldestPerson = getAge(tiguwang.yearOfBirth, tiguwang.yearOfDeath);
            const currentAge = getAge(
                currentFerzon.yearOfBirth,
                currentFerzon.yearOfDeath
            );
    return oldestPerson < currentAge ? currentFerzon : tiguwang;
        });

    };


// Do not edit below this line
module.exports = findTheOldest;
