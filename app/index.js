/**
 * Created by skandara on 24/08/2016.
 */
var _ = require('lodash');
var peopleService = require('./services/people-service');
var peopleFilter = require('./filters/people.filter');

/**
 * Print the list of grouped people
 * @param list of gender with pet names
 */
function printPeople(list){
    _.forEach(list, function(pets, gender){
        console.log(gender);
        _.forEach(pets, function(petName){
            console.log('\t' + petName);
        });
    });
}

/**
 * Initiate the program
 * Get the list of people from API and print the pet names for gender
 */
peopleService.getList(function(err, people){
    if(err) {
        console.log(err);
    }
    else {
        // partition the array by gender to easily work with
        var groupByGenderList = peopleFilter.groupByGender(people);
        // Filter and sort the pet name
        var filteredList = peopleFilter.filterAndSortByPetName(groupByGenderList, 'cat');
        // send to printer
        printPeople(filteredList);
    }
});

