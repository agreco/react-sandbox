
var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    componentPath = path.join(process.cwd(), 'src/client/js/components/');

describe('SomeComponent', function () {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        Avatar = require(path.join(componentPath, 'Avatar.jsx'));

    beforeEach(function () {
        nock('http://localhost:9000').get('/someRoute').reply(200, { test: ['a', 'b', 'c']});
    });

    it('renders', function () {
        var avatar = TestUtils.renderIntoDocument(<Avatar username="agreco1379" />);
        expect(TestUtils.isCompositeComponent(avatar)).to.be.ok;
    });

    it('should build the layout from an array of objects passed as prop.', function () {
       var avatar = TestUtils.renderIntoDocument(<Avatar username="agreco1379" />);
        expect(TestUtils.isCompositeComponent(avatar)).to.be.ok;
    });
});
