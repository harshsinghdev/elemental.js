import { sanitize } from "./sanitize.js";

export const template = (strings, ...values) => {

    const tmpl = document.createElement('template');

    tmpl.innerHTML = values.reduce(

        (html, value, index) => html + sanitize(value) + strings[index + 1], 
        
        strings[0]
    
    );

    return tmpl;

};