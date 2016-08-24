/**
 * Created by skandara on 24/08/2016.
 */
var assert = require('assert');
var sinon = require('sinon');
var _ = require('lodash');

var mocks = require('../test-helpers/mocks');
var filterService = require('./people.filter');

describe('People filter', function() {

    describe('filter people', function() {
        it('should return list of people by gender ', function() {
            var people = mocks.getPeopleList();
            var filtered = filterService.groupByGender(people);
            assert.equal(filtered.male.length, 3);
            assert.equal(filtered.female.length, 3);
        });

        it('should return list of gender by pet - fish (case sensitive)', function() {
            var filtered = filterService.filterAndSortByPetName(mocks.getFilteredPeopleList(), "dog");
            assert.equal(filtered.male.length, 3);
            assert.equal(filtered.female.length, 1);
            assert.equal(filtered.male[0], 'f'); // Test sorting
        });

        it('should return list of people if pet type is not defined ', function() {
            var people = mocks.getPeopleList();
            var filtered = filterService.filterAndSortByPetName(people);
            assert.equal(people.length, filtered.length);
        });

        //TODO: maximise coverage
        it.skip("should return list of people if pets are null");
    });
});