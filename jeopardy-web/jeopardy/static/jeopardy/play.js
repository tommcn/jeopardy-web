window.addEventListener('DOMContentLoaded', (event) => {
    
    const categories = JSON.parse(document.getElementById('cats').textContent);
    const table = $('#jeopardy-table');
    const questions_per_cat = categories[0].questions.length;
    const number_of_cats = categories.length;

    // Create Headers
    const thead = $('<thead></thead>');
    const row = $('<tr></tr>');
    categories.forEach((el, i) => {
        row.append($("<th></th>").text(el.name));
    });
    thead.append(row);
    table.append(thead);

    // body
    const tbody = $('<tbody></tbody>');
    for (var i = 0; i < questions_per_cat; i++ )
    {
        const questions = [];
        categories.forEach((el, idx) => {
            const button = $(`<span id="q-${i}-${idx}" onclick="showQuestion('${el.questions[i].question}', ${el.questions[i].points}); $('#q-${i}-${idx}').addClass('asked'); $('#q-${i}-${idx}').removeAttr('onclick');"></span>`).text(el.questions[i].points);
            questions.push($('<td></td>').append(button));
        });
        tbody.append($(`<tr id=row-${i}></tr>`).append(questions))
    }

    table.append(tbody);
    
});




function showQuestion(question, points) 
{
    $('#exampleModal').modal('show');
    $('.modal-body').text(question);
    $('.modal-backdrop').detach().appendTo('#fullscreen-container');
    
    // alert(question + " \n Points: " + points.toString());
}
