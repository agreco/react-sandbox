
var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    componentPath = path.join(process.cwd(), 'src/client/js/components/');

describe('SomeComponent', function () {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        Somecomponent = require(path.join(componentPath, 'Somecomponent.jsx'));

    beforeEach(function () {
        nock('http://localhost:9000').get('/someRoute').reply(200, { test: ['a', 'b', 'c']});
    });

    it('renders', function () {
        var somecomponent = TestUtils.renderIntoDocument(<Somecomponent url='http://localhost:9000/someroute' />);
        expect(TestUtils.isCompositeComponent(somecomponent)).to.be.ok;
    });

    it.only('should build the layout from an array of objects passed as prop.', function () {
       var somecomponent = TestUtils.renderIntoDocument(<Somecomponent url='http://localhost:9000/someroute' />);
        expect(TestUtils.isCompositeComponent(somecomponent)).to.be.ok;
    });
});
