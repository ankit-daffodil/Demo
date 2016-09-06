var config = require("./../config/settings.js");
var sendgrid = require('sendgrid');
var ejs = require('ejs');
var sendGridHelper = sendgrid.mail;
var crypto = require('crypto');
var mailService = require('./mailService');

module.exports = {

    modifyResult: function(options, result, statusCode) {

        var obj = {};
        obj.data = result;
        obj.status = statusCode;

        if (options.skip) {
            obj.cursor = options.skip + result.length;
        } else {
            obj.cursor = result.length;
        }

        if (options.limit && options.limit.length >= result.length) {
            delete obj.cursor;
        }
        
        return obj;
    },
    sendMail: function(obj, callback) {

        var templateContentObj = JSON.parse(JSON.stringify(obj));
        var fromEmailId = config.sendGrid.fromId;
        var toEmailId = templateContentObj.email;
        var from_email = new sendGridHelper.Email(fromEmailId);

        var verification_code = Math.floor(1000 + Math.random() * 9000);
        var deactivateToken = Date.now() + Math.floor(10000 + Math.random() * 1000) + "";
        templateContentObj.verification_code = verification_code;
        obj.verificationCode = verification_code;
        obj.deactivateToken = deactivateToken;
        templateContentObj.deactivateUrl = config.sendGrid.baseUrl + obj["route"] + "/deactivateAccount/" + this.encrypt(toEmailId) + "/" + this.encrypt(deactivateToken);
        templateContentObj.supportId = config.sendGrid.supportId;
        var to_email = new sendGridHelper.Email(templateContentObj.email);
        var subject = "Verification code"

        var mailHtml = ejs.render(config.sendGrid.mailTemplate, {
            "obj": templateContentObj
        });
        var options = {};
        options["html"] = mailHtml;
        options["to"] = toEmailId;
        options["subject"] = subject;

        mailService.sendMail(options, function(error, result) {
            if (!error) {
                return callback(null, result);
            }
            return callback(error);
            console.log("Send Mail Result : ", result);
        })

    },
    forgotPassowrdMailSend : function(params,callback) {
        var mailHtml = ejs.render(config.sendGrid.forgotPasswordMailTemplate, {
            "obj": params
        });

        var subject = "Reset password";

        var options = {};
        options["html"] = mailHtml;
        options["to"] = params.email;
        options["subject"] = subject;

        mailService.sendMail(options, function(error, result) {
            if (!error) {
                return callback(null, result);
            }
            return callback(error);
            console.log("Send Mail Result : ", result);
        })

    },
    encrypt: function(text) {

        var cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;

    },

    decrypt: function(text) {

        var decipher = crypto.createDecipher('aes-256-cbc', 'd6F3Efeq')
        var dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;

    }
}