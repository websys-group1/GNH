$(document).ready(
    // example. filling up center red box

    // $.ajax({
    //     type : 'GET',
    //     dataType : 'json',
    //     url: './data.json',
    //     async:false,
    //     success : function(data) {
    //         // console.log(data); 
    //         var topics = [];
    //         $('#tutor-desc').html(data.center_text)
    //     } 
    // })

    $.get('./data.json', function(res){
        $("#tutor-desc").html(res.center_text);
        alert("Load was performed.");
    })
)
