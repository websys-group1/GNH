/*DATA_FILE = 'https://raw.githubusercontent.com/websys-group1/GNH/paul/data.json'

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
    fill_element('#tutor-desc',"center_text")
)
*/

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
    fill_element('#events-desc',"events_text"),
    fill_element('#tutoring', "tutoring_text"),
    fill_element('#tutor-desc2', "tutoring_text2"),
    fill_element('#career-button', "career-btntxt"),
    fill_element('#newsheader', "news_header"),
    fill_element('#title', "_title"),
    fill_element('#smallTitle', "small_title"),
    fill_element('#currentNews', "current_news"),
    fill_element('#eco', "_eco"),
    fill_element('#eco2', "_eco2"),
    fill_element('#james', "_james"),
    fill_element('#james2', "_james2"),
    fill_element('#comp', "_comp"),
    fill_element('#comp2', "_comp2"),
    fill_element('#lookHelp', "_lookHelp"),
    fill_element('#lookHelp2', "_lookHelp2"),
    fill_element('#events', "_events"),
    fill_element('#atGNU', "_atGNU"),
    fill_element('#welcome', "_welcome"),
    fill_element('#contact', "_contact"),
    fill_element('#twitter', "_twitter"),
    fill_element('#ig', "_ig"),
    fill_element('#fb', "_fb"),
    fill_element('#lm', "_lm")

)