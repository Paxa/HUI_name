describe("HUI_name.initialize", {

    before_all: function() {
        a = new HUI_name({sample: $$('.example_box')[0], bindTo: 'add_new'});
    },

    'should set options.pasteTo on parentNode if was not passed': function () {
        value_of(a.options.pasteTo).should_be($('all_conteiner'));
    },

    'should add Event to bindTo option': function () {
        $('add_new').fireEvent('click');
        (function () {
            var current = $$('#all_conteiner > div').length;
            value_of($$('#all_conteiner > div').length).should_be(current + 1);
        }).delay(50, this);
    }
});

describe("HUI_name.buildNew", {
     before_all: function() {
        a = new HUI_name({sample: $$('.example_box')[0], bindTo: 'add_new'});
    },

    'should return created element': function () {
        var el = a.buildNew();
        value_of($type(el)).should_be('element');
    },

    'should replace HUI in input element name on next value': function () {
        var name_index = a.lastNum;
        var new_val = a.options.sample.getElement('input').name.replace('HUI', name_index);
        var el = a.buildNew();
        value_of(el.getElement('input').name).should_be(new_val);
    },

    'should replace HUI in select element name on next value': function () {
        var name_index = a.lastNum;
        var new_val = a.options.sample.getElement('select').name.replace('HUI', name_index);
        var el = a.buildNew();
        value_of(el.getElement('select').name).should_be(new_val);
    },

    'should increase obj.lastNum then builds new': function () {
        var before_val = a.lastNum;
        var el = a.buildNew();
        value_of(a.lastNum).should_be(before_val + 1);
    },

    'should set display style of new box on "block"': function () {
        var el = a.buildNew();
        value_of(el.getStyle('display')).should_be('block');
    },

    'should replace secrect word in ID of new form elements': function () {
        var name_index = a.lastNum;
        var el = a.buildNew();
        var new_val = a.options.sample.getElement('input').id.replace('HUI', name_index);
        value_of(el.getElement('input').id).should_be(new_val);
    },

    'should replace secret word in FOR of labels': function () {
        var name_index = a.lastNum;
        var el = a.buildNew();
        var new_val = a.options.sample.getElement('label').get('for').replace('HUI', name_index);
        value_of(el.getElement('label').get('for')).should_be(new_val);
    }
});
