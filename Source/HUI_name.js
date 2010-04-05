/*
---
description: HUI_name class.
license: MIT-style
authors: Pavel Evstigneev
requires: core:1.2.4:*
provides: HUI_name

*/
var HUI_name = new Class({
    Implements: Options,

    options: {
        word: 'HUI'
    },

    lastNum: 0,

    /* 
     * options should contain: 
     * - 'sample': element you gonna clone to make new objects forms
     * - 'pasteTo': place to point new part of form, default $('sample').parentNode
     * - 'bindTo': it binds onClick event to start generator on $('bindTo') element
    */
    initialize: function (options) {
        this.setOptions(options);
        if (!$chk(options.pasteTo)) this.options.pasteTo = $(options.sample).parentNode;

        this.boundBuildNew = this.buildNew.bindWithEvent(this);
        /* binding to bindTo if passed */
        if ($chk(options.bindTo)) {
            $(options.bindTo).addEvent('click', this.boundBuildNew);
        }
    },

    buildNew: function () {
        var sample = $(this.options.sample);
        var new_el = sample.clone(true, true);
        var ln = this.lastNum.toString();
        new_el.getElements('input, select').each (function (el) {
            el.name = el.name.replace(this.options.word, ln);
            el.id = el.id.replace(this.options.word, ln);
        }.bind(this));
        
        new_el.getElements('label').each (function (el) {
            el.set('for', el.get('for').replace(this.options.word, ln));
        }.bind(this));

        new_el.inject(this.options.pasteTo);
        
        new_el.setStyle('display', 'block');

        this.lastNum += 1;
        return new_el;
    }
});
