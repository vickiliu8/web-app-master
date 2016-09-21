// This module stores the parse keys
// It is in .gitignore in order to keep them secret
// You will need to sign up for parse and use your own keys
// Accounts are free at www.parse.com
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        //App Key
        key1:"pk1WdL579Rz1V4d1ywlipUBJPcVdrcVied9galw9",
        //JavaScript Key
        key2:"Elo9yqQrE82ipJVOYNZ2Ldhsg0WVHAOEOCJf8roO",
        //REST API Key
        key3:"0AyFBLlIQpYIxzZHjdb9E50nzTqpAqJOfmU7ARcY"
    };
});
