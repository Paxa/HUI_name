HUI_name
===========

It generates form elements for accepts_nested_attributes_for in Rails

How to use
----------

    var Hn = new HUI_name({
      sample: $$('.example_box')[0], 
      bindTo: 'add_new'
    }); 
    Hn.buildNew();

Options should contain: 

* 'sample': element you gonna clone to make new objects forms
* 'pasteTo': place to point new part of form, default $('sample').parentNode
* 'bindTo': it binds onClick event to start generator on $('bindTo') element
