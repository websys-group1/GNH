DATA_FILE = 'data.json'

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

$(document).ready(
    // example. filling up center red box
    fill_element('#about-desc',"about_text"),
    fill_element('#tutor-desc',"center_text"),
    fill_element('#news-desc',"news_text"),
    fill_element('#events-desc',"events_text")
)
