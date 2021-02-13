var inputValue
var inputArray
$(document).on("click", "#submitButton", function(){
    inputValue = $('#inputBox').val();
    $('#output').html('')
    console.log(inputValue)
    //document.getElementById("output").innerHTML = inputValue
    $('#inputBox').val('')
    inputArray = inputValue.split(" ")
    output = inputArray
    var i;
    for (i = 0; i < output.length; i++) {
        if (output[i] == "the") {
            $("#output").append("<span id='the'>" + output[i] + "</span> ")
        }
        else if (output[i] == "The") {
            $("#output").append("<span id='the'>" + output[i] + "</span> ")
        }
        else
       $("#output").append("<span>" + output[i] + "</span> ")
      }
   // document.getElementById("output").innerHTML = output
});
