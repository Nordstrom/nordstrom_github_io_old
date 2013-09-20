(function( $ ) {
    var privateMethods = {
        'getKeys': function getKeys(obj) {
            var k = [];
            if ('keys' in Object) {
                k = Object.keys(obj);
            }
            else {
                for (key_value in obj) {
                    k.push(key_value);
                }
            }
            return k;
        }            
    };
    
    $.lazyLoadCss = function lazyLoadCss(css_rules_obj) {
        var k = privateMethods.getKeys(css_rules_obj),
            l = k.length,
            selector = '';
            
        while (l) {
            selector = k[l-1];
            if (css_rules_obj.hasOwnProperty(selector)) {
                $(selector).css(css_rules_obj[selector]);
            }
            l -= 1;
        }
    };         
})(jQuery);

var onDocReadyCss = {
    '#home':                 { 'background-image': 'url(img/navy_blue.png)' },
    '#purpose':                 { 'background-image': 'url(img/triangle-bg.jpg)' },
    '#about_section':              { 'background-image': 'url(img/purpose.jpg)' },
    '#about_section #labsA':    { 'background-image': 'url(img/opacity-black.png)' },
    '#hiring_section':           { 'background-image': 'url(img/purpose3a.jpg)' },
    '#hiring_section-opacity':   { 'background-image': 'url(img/opacity-black.png)' },
};
