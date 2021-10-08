# GNH

## data.json
  1. about_text
  2. center_text
  3. news_text
  4. events_text <br>
All these data listed above have been used with functions in populate_text.js
these were the first pieces of text that we put into the populat_text file to use json to read it in, so we would not have to write it out in our html file.
in the index and activities page, there is no text, because it is being written in by json. 
## Using jquery, we created a function named fill_element and made it being called and displayed as the page is opened.
Since we pass in selector and fieldname(those four listed above for "data.json") as an argument, we used multiple placeholders in "index.html" with division tags. <br>
  ex) html placeholder : div id="about-desc"></div <br>
  ex) jquery(ajax)     : fill_element('#about-desc',"about_text") <br>
  ex) json             : {    "about_text": "Gamma Nu Eta" } <br>
  
## html and css
for the html and CSS, Lubna and I (chloe) worked a lot on the formatting of the pages using columns and rows. we thouht it would give the page a much neater look if we could section the pae off into parts by information, so we used divs, and rows and column ids in css to create sections for our web app. in the activities page we used css to add in a news section for GNH, and pulled them off of the ITWS website. I (chloe) also created a form that is centered in the page, so anyone that visits it can submit their information to be paired with a tutor. On th home page, I kept it simple with a brief statement of who GNH is, their information for contact, and a link to the activities page which goes in depth about them. I used CSS to create the moving text from a website: https://codepen.io/equinusocio/pen/rbJwmM. Once I fixed up all of the html and css for the pages, I went on to add all of the text into an existing json file that paul had created and began writin for us. He looked into usin jquery(ajax) and formatted most of the activities page with json. I (chloe) went back and made additional inserts into the json file for the activities page anything else that was in the index page.
