var _ = require("underscore")._;
var moment = require("moment");

var MembershipApplication = function(args){

    _.extend(this,args);

    this.validUntil = args.validUntil ? moment(args.validUntil) : moment().add(10, "days");

    this.emailIsValid = function(){
        return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
    };

    this.expired = function(){
        return this.validUntil.isBefore(moment());
    };

    this.heightIsValid = function(){
        return this.height && this.height > 60 && this.height < 75;
    };

    this.ageIsValid = function(){
        return this.age && this.age > 15 && this.age < 100
    };

    this.weightIsValid = function(){
        return this.weight && this.weight > 100 && this.weight < 300;
    };

    this.nameIsValid = function(){
        return this.first && this.last;
    };

    this.validationMessage = function(){
        if(this.isValid()){
            return "application is valid";
        }else if(!this.heightIsValid()){
            return "Your email is invalid";
        }else if(!this.ageIsValid()){
            return "Your email is invalid";
        }else if(!this.weightIsValid()){
            return "Your email is invalid";
        }else if(!this.nameIsValid()){
            return "Your email is invalid";
        }
        else{
            return "application is invalid";
        }
    }

    this.isValid = function(){
        return this.emailIsValid() &&
            this.heightIsValid() &&
            this.ageIsValid() &&
            this.weightIsValid() &&
            !this.expired();
    };
};

module.exports = MembershipApplication;