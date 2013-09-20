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
    '#purpose':                 { 'background-image': 'url(img/triangle-bg.jpg)' },
    '#about_section':              { 'background-image': 'url(img/purpose.jpg)' },
    '#about_section #labsA':    { 'background-image': 'url(img/opacity-black.png)' },
    '#hiring_section':           { 'background-image': 'url(img/purpose3a.jpg)' },
    '#hiring_section-opacity':   { 'background-image': 'url(img/opacity-black.png)' },
    '#beyond-mktg-hslide-01':   { 'background-image': 'url(img/black-triangle.jpg)' },
    '#beyond-mktg-hslide-02':   { 'background-image': 'url(img/imstore.jpg)' },
    '#beyond-mktg-hslide-03':   { 'background-image': 'url(img/product.jpg)' },
    '#beyond-mktg-hslide-04':   { 'background-image': 'url(img/interactive.jpg)' },
    '#beyond-mktg-hslide-05':   { 'background-image': 'url(img/people.jpg)' },
};
