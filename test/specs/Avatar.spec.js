
var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    componentPath = path.join(process.cwd(), 'src/client/js/components/');

describe('SomeComponent', function () {
    var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils'),
        Avatar = require(path.join(componentPath, 'Avatar.js'));

    beforeEach(function () {
        nock('http://localhost:9000').get('/someRoute').reply(200, { test: ['a', 'b', 'c']});
    });

    it('renders', function () {
        var avatar = ReactTestUtils.renderIntoDocument(<Avatar username="agreco1379" />);
        expect(ReactTestUtils.isCompositeComponent(avatar)).to.be.ok;
    });

    it('should build the layout from an array of objects passed as prop.', function () {
       var avatar = ReactTestUtils.renderIntoDocument(<Avatar username="agreco1379" />);
        expect(ReactTestUtils.isCompositeComponent(avatar)).to.be.ok;
    });
});
