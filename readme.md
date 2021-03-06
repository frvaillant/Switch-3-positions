# A 3 position switch

Author:

    François Vaillant

## Example
   [see on codepen](https://codepen.io/francoisvaillant/pen/gOPOMqa)
   
## How to use

### Use it with npm

```bash
npm install triswitch
```

* Create a JS file with (for example)

```JS
import {Switch3} from "triswitch";
const switcher = new Switch3(['non', '?', 'oui'], [2, 0, 1], 'switcher', 1);
switcher.init();
```

* Don't forget to add CSS
    * For example in symfony, add in app.scss
    ```SCSS
     @import "~triswitch";  
    ```

* In your view, create a div with switcher id and give it a least 100px width
  

### Use it simply

```
<link rel="stylesheet" href="switch3.css">
<script src="switch3.js"></script>
```

### Choose your target
- if you allready have an input in order to use switch,
give it an id attribute et add :

```html
type="hidden"
```

Then, create an empty div with an id

```html
<div id="my-container"></div>
```

- if you don't have an input, just create a div, switch 3 will create an input for your

```html
<div id="my-container"></div>
```

the generated input is 

```html
<input type="hidden" id="switch3-val" name="switch3-val">
```

### Create the switch

```JS
 constructor(labels, values, renderZoneId, initVal= 0, name = 'switch3', destinationInputId = null) 
```
- labels is an array with the three labels from left to right
- values is array with the three values corresponding to the choices from left to right
- renderZondeId is the id of the div where to render the switch
- initVal is the value of the switch when it will be first rendered (optionnal, default 0, values : 0, 1 or 2)
- name is a string you like to generate ids if you need multiple switches. In that case, the generated input has id name-switch3-val
- destinationInputId is the id of your input if you allready have one (Optionnal, default null)

### Example of use

```HTML 
<div id="switcher" style="width:100px;"></div>
<script>
 const switcher = new Switch3(['non', '?', 'oui'], [2, 0, 1], 'switcher', 1); 
 switcher.init();
</script>
```
