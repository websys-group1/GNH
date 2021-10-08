# GNH

## data.json
  1. about_text
  2. center_text
  3. news_text
  4. events_text <br>
All these data listed above have been used with functions in populate_text.js
## Using jquery, we created a function named fill_element and made it being called and displayed as the page is opened.
Since we pass in selector and fieldname(those four listed above for "data.json") as an argument, we used multiple placeholders in "index.html" with division tags. <br>
  ex) html placeholder : div id="about-desc"></div <br>
  ex) jquery(ajax)     : fill_element('#about-desc',"about_text") <br>
  ex) json             : {    "about_text": "Gamma Nu Eta" } <br>
  
  
