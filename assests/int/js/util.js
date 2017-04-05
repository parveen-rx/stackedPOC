/**
 * Created by Parveen on 4/5/2017.
 */

//Handlebar register helpers

//checking row condition
Handlebars.registerHelper('rowCondition', function(v1, v2, options) {
    if(v1%v2===0) {
        return options.fn(this);
    }
    return options.inverse(this);
});

//checking column condition
Handlebars.registerHelper('colCondition', function(v1, v2, options) {
    if(v1%v2===2) {
        return options.fn(this);
    }
    return options.inverse(this);
});