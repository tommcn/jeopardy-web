function loadBoxes()
{
    //Get the catergries and the number of rows form the page
    const catergories = document.querySelector('#categories').value;
    const rows = document.querySelector('#rows').value;

    //Make the html block that will be added
    var html = '<br />'
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

    //Add the final jeopardy
    html = html + '<br />' + '<br />' + '<input type="text" id= final_category' +' name="final_category" '+ '" placeholder="Final Category">';
    html = html + '<br />' + '<input type="text" id= final_question' +' name="final_question" '+ '" placeholder="Final Jeopardy">';

    //Close the form
    html = html + '<br />' + '<br />' + '<input type="submit" value="Save">';
    //console.log(html);

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

function loadFile(input) {
    let file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(){
        var dataURL = reader.result;
        const dataStr = atob(dataURL.replace(/^data:application\/json;base64,/, ""));
        const data = JSON.parse(dataStr);
        //console.log(dataStr);

        //console.log(typeof(dataStr));
        catergories = data.length - 1;
        rows = data[0]["questions"].length;
        console.log(String(catergories) + ":" + String(rows))

        // Generate the board the same way as in loadBoxes
        // we set the rows and collums depending on the ammount of cattegories and the number of questions in the first cattegory
        
        html = "";

        for(var x = 0; x< catergories; x++)
        {
            console.log("cat" + x);
            html = html + '<input type="text" id="' + x.toString() + '_catergory_name"' +' name="'+ x.toString() + '_catergory_name" ' + 'value="' + data[x]["name"] + '">';
        }
        html = html + '<br />' + '<br />';

        //Next make all of the points and question rows
        for(var i = 0; i< rows; i++)
        {
            //console.log("row" + i);
            for(var x = 0; x< catergories; x++)
            {
                console.log("point" + x);
                //console.log("collum" + x);
                html = html + '<input type="number" id=' + i.toString() + "_" + x.toString() + "_value" +' name="' + i.toString() + "_" + x.toString() + "_value" + '" value=' + data[x]["questions"][i]["points"]+'>';
            }
            html = html + '<br />';
            for(var x = 0; x< catergories; x++)
            {
                console.log("quest" + x);
                html = html + '<input type="text" id=' + i.toString() + "_" + x.toString() + "_question" +' name="'+ i.toString() + "_" + x.toString() + "_question" + '" value= "' + data[x]["questions"][i]["question"] + '">';
            }
            html = html + '<br />' + '<br />';
            
        }
        console.log(html);

        //Add the final jeopardy
        html = html + '<br />' + '<br />' + '<input type="text" id= final_category' +' name="final_category" '+ '" value= "' + data[catergories]["name"] + '">';
        html = html + '<br />' + '<input type="text" id= final_question' +' name="final_question" '+ '" value= "' + data[catergories]["question"] + '">';
        //Close the form
        html = html + '<br />' + '<br />' + '<input type="submit" value="Save">';
        console.log(html);

        //Write the html to the page
        document.querySelector('#board').innerHTML = html;
    };
    reader.readAsDataURL(input.files[0]);
} 