function loadBoxes()
{
    //Get the catergries and the number of rows form the page
    const catergories = document.querySelector('#categories').value;
    const rows = document.querySelector('#rows').value;

    //Make the html block that will be added
    var html = "";
    //var html = `<form method='POST' action="/build/">`;
    //Make the cattegory name row
    for(var x = 0; x< catergories; x++)
        {
            html = html + '<input type="text" id="' + x.toString() + "_catergory_name" +'" name="'+ x.toString() + "_catergory_name" +'" placeholder="Enter your catergory name"/>';
        }
        html = html + '<br />' + '<br />';
    
    //Next make all of the points and question rows
    for(var i = 0; i< rows; i++)
    {
        //console.log("row" + i);
        for(var x = 0; x< catergories; x++)
        {
            //console.log("collum" + x);
            html = html + '<input type="number" id="' + i.toString() + "_" + x.toString() + "_value" +'" name="' + i.toString() + "_" + x.toString() + "_value" +'" value="100"/>';
        }
        html = html + '<br />';
        for(var x = 0; x< catergories; x++)
        {
            html = html + '<input type="text" id="' + i.toString() + "_" + x.toString() + "_question" +'" name="'+ i.toString() + "_" + x.toString() + "_question" +'" placeholder="Enter your question"/>';
        }
        html = html + '<br />' + '<br />';
    }

    //Close the form
    html = html + '<input type="submit" value="Save">';
    console.log(html);

    //Write the html to the page
    document.querySelector('#board').innerHTML = html;
}

function save()
{
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
      
      // Start file download.
      download("jeopardy.json",JSON.parse(document.getElementById('json').textContent));
}