/**
 * Created by skandara on 24/08/2016.
 */
var assert = require('assert');
var sinon = require('sinon');
var http = require('http');

var mocks = require('../test-helpers/mocks');
var peopleService = require('./people-service');

describe('People service', function() {

    beforeEach(function() {
        this.request = sinon.stub(http, 'request');
    });

    afterEach(function() {
        http.request.restore();
    });

    describe('list people', function() {
        it('should return list of people in an array', function() {
            this.request.callsArgWith(1, mocks.getSuccessResponse()).returns(mocks.getEmptyStream());
            peopleService.getList(function(err, people){
                assert.equal(people.length, mocks.getPeopleList().length);
            });
        });
        it('should return error', function() {
            var expected = 'error message';
            var request = mocks.getEmptyStream();
            this.request.returns(request);
            peopleService.getList(function(err){
                assert.equal(expected, err);
            });
            request.emit('error', expected);
        });

        //TODO: maximise coverage
        it.skip("should return error if endpoint is not accessible");
    });
});