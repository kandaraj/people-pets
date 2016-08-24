/**
 * Created by skandara on 24/08/2016.
 */
var _ = require('lodash');

/**
 * Takes a list of people with minimum attribute gender and returns an array grouped by gender
 * @param {Array} list - A array of people with gender attribute required
 * @return {Array} - an array grouped by gender
 */
exports.groupByGender = function(list) {
    return _.groupBy(list, function(result){
        return result.gender.toLowerCase();
    });
}

/**
 * Takes an array of people with pets attributes (Array) and returns an array where types are {petType}
 * @param list {Array} of people with pets
 * @param {petType} - string of pet type filter by
 * @return {Array} - A Array of people filtered by pettype
 */
exports.filterAndSortByPetName = function (list, petType) {
    if(!petType) return list;
    var filteredResult = {};
    // TODO: look for another way to avoid multiple loops.
    _.forEach(list, function(result, key){
        // Filter pets by pet type and store in local variable
        _.forEach(result, function(people) {
            _.forEach(people.pets, function(pet) {
                // Create a gender key for first time and store only pet name against gender
                if(!filteredResult[key]) filteredResult[key] = [];
                if(pet.type.toLowerCase() === petType) filteredResult[key].push(pet.name);
            })
        })
        // Sort the petname for a gender
        filteredResult[key] = _.sortBy(filteredResult[key]);
    });

    return filteredResult;
}