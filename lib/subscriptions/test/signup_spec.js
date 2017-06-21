var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe("Membership Information", function(){
    var validApp;
    before(function(){
        validApp = new MembershipApplication({
            first: "test",
            last: "User",
            email: "t@a.com",
            age:30,
            height: 66,
            weight: 180
        });
    });
    describe("Validation work if...", function(){
        it("parameters return true", function() {
            assert(validApp.isValid(), "not valid")
        });
        it("email is more than 3 characters and has an @ symbol", function() {
            assert(validApp.emailIsValid());
        });
        it("Is within 60 and 75 centimeters", function() {
            assert(validApp.heightIsValid());
        });
        it("age is between 15 and 100", function() {
            assert(validApp.ageIsValid());
        });
        it("Weight is within 100 and 300", function() {
            assert(validApp.weightIsValid());
        });
        it("makes sure they have a name", function() {
            assert(validApp.nameIsValid());
        });
    });

    
    describe("Application invalid if...", function(){

        it("is expired", function(){
            var app = new MembershipApplication({validUntil : Date.parse("01/01/2010")});
            assert(app.expired);
        })
        it("email is 4 characters or less", function(){
            var app = new MembershipApplication({email : "d@d"});
            assert(!app.emailIsValid());
        });
        it("email does not contain an @", function(){
            var app = new MembershipApplication({email: "restinpeace.com"});
            assert(!app.emailIsValid());
        });
    })
});