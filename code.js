var inputValue
var inputArray
$(document).on("click", "#submitButton", function(){
    inputValue = $('#inputBox').val();
    $('#output').html('')
    $('.processed').html('Your Processed Content:')
    console.log(inputValue)
    //document.getElementById("output").innerHTML = inputValue
    $('#inputBox').val('')
    inputArray = inputValue.split(" ")
    output = inputArray
    var i;
    $("#statBoxCount").html("Word Count: " + output.length)
    if (output.includes("the") || output.includes("The")) {
        $("#statBoxLang").html("Language: English")
    }
    else {
        $("#statBoxLang").html("Language: Unknown")
    }
    for (i = 0; i < output.length; i++) {
        if (output[i] == "the" || output[i] == "The") {
            $("#output").append("<span class= 'article' id='the'>" + output[i] + "</span> ")
        }
        else if (output[i-1] == "the" || output[i-1] == "The") {
            $("#output").append("<span id='postThe'>" + output[i] + "</span> ")
        }
        else if (output[i] == "a" || output[i] == "A" || output[i] == "An" || output[i] == "an") {
            $("#output").append("<span class='article' id='a'>" + output[i] + "</span> ")
        }
        else if (output[i-1] == "a" || output[i-1] == "A" || output[i-1] == "An" || output[i-1] == "an") {
            $("#output").append("<span id='postA'>" + output[i] + "</span> ")
        }
        else if (output[i] == "He" || output[i] == "he" || output[i] == "She" || 
        output[i] == "she" || output[i] == "I" || output[i] == "We" || output[i] == "we" || 
        output[i] == "They" || output[i] == "they") {
            $("#output").append("<span id='subject'>" + output[i] + "</span> ")
        }
        else if (output[i-1] == "He" || output[i-1] == "he" || output[i-1] == "She" || 
        output[i-1] == "she" || output[i-1] == "I" || output[i-1] == "We" || output[i-1] == "we" || 
        output[i-1] == "They" || output[i-1] == "they") {
            $("#output").append("<span id='postSubject'>" + output[i] + "</span> ")
        }
        else
       $("#output").append("<span>" + output[i] + "</span> ")
      }
   // document.getElementById("output").innerHTML = output
});
