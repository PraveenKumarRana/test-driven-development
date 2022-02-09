const expect = require("chai").expect;

describe("test_suite1", function () {
    before("Root Setup Code", function () {
        console.log("Root setup code");
    })

    beforeEach("Setup for each test", function () {
        console.log("Setup code for each test");
    })

    it("test1", function () {
        console.log("test1");
        expect(true).to.equal(true);
    })

    it("test2", function () {
        console.log("test2");
        expect(false).to.equal(false);
    })

    after("Root Teardown Code", function () {
        console.log("Root teardown code");
    })

    afterEach("Teardown code for each test", function () {
        console.log("Teardown code for each test");
    })
})