DATA_FILE = 'https://raw.githubusercontent.com/websys-group1/GNH/paul/data.json'

$(document).ready(
    // example. filling up center red box
    fill_element('#tutor-desc',"center_text")
)

const fill_element = (selector,fieldname) => {
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url: DATA_FILE,
        success : function(data) {
            $(selector).html(data[fieldname])
        } 
    })
}