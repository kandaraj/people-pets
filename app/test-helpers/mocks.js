/**
 * Created by skandara on 24/08/2016.
 *
 * A mock helper for storing the data and helper funcations
 */
var PassThrough = require('stream').PassThrough;

var PEOPLE_LIST = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"AFido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"AASam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}];
var FILTERED_LIST = {
    male: [
        {pets:[{type:'dog', name:'z'}]},
        {pets:[{type:'dog', name:'f'}, {type:'cat', name:'f'}, {type:'dog', name:'k'}]}
    ],
    female: [
        {pets:[{type:'cat', name:'z'}]},
        {pets:[{type:'dog', name:'a'}]}
    ]
};

exports.getSuccessResponse = function () {
    var response = new PassThrough();
    response.end();
    return response;
}

exports.getEmptyStream = function () {
    return new PassThrough();
}

exports.getPeopleList = function () {
    return PEOPLE_LIST;
}

exports.getFilteredPeopleList = function () {
    return FILTERED_LIST;
}