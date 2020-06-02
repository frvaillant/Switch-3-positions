#A 3 position switch by

    François Vaillant

##How to use

### Include files

```
<link rel="stylesheet" href="switch3.css">
<script src="switch3.js"></script>
```

### Choose your target
- if you allready have an input to use switch
Give it an id attribute et add 

````type="hidden"````

The create an empty div with an id

````<div id="my-container">````

- if you don't have an input, just create a div, switch 3 will create an input for your

````<div id="my-container">````

the gerated input is 

```<input type="hidden" id="switch3-val" name="switch3-val">```

### Create the switch

`` constructor(labels, values, renderZoneId, initVal= 0, destinationInputId = null) ``
- labels is an array with the three labels from left to right
- values is array with the three values corresponding to the choices from left to right
- renderZondeId is the id of the div where to render the switch
- initVal is the value of the switch when it will be first rendered (optionnal, default 0)
- destinationInputId is the id of your input if you allready have one (Optionnal, default null)

### Example of use

`` const switcher = new Switch3(['non', '?', 'oui'], [2, 0, 1], 'switcher'); ``
       
``switcher.init();``
