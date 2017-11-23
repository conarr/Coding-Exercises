var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

setInterval(function() {
  var k = parseInt(document.getElementById("numberShift").value);
  var input = document.getElementById("originalText").value.toUpperCase();
  var output = "";
  for(var i = 0; i < input.length; i++)
  {
    if(letters.indexOf(input.charAt(i)) == -1)
    {
      output = output + input.charAt(i);
    }
    else
    {
      if(document.getElementsByName("mode")[0].checked)
      {
        output = output + letters[(letters.indexOf(input.charAt(i))+k)%26];
      }
      else
      {
        output = output + letters[((letters.indexOf(input.charAt(i))-k)+26)%26];
      }
    }
  }
  document.getElementById("outputText").value = output;
}, 100);