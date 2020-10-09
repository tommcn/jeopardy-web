window.addEventListener('DOMContentLoaded', (event) => {
    
    const categories = JSON.parse(document.getElementById('cats').textContent);
    createData(categories)
});

function createData(categories)
{
    $('.FJ-modal-body').removeClass("enabled")
    const table = $('#jeopardy-table');
    table.html('');
    const questions_per_cat = categories[0].questions.length; // minus final cate
    // const number_of_cats = categories.length;

    // Create Headers
    const thead = $('<thead></thead>');
    const row = $('<tr></tr>');
    categories.forEach((el, i) => {
        if (!el.isFinal)
        {

            row.append($("<th></th>").text(el.name));
        } else {
            console.log(el.name, el.question)
            $('#final-question').append(el.question);
            $('.FJ-modal-body').append($('<br />'));
            $('.FJ-modal-body').append(el.name);
            $('.FJ-modal-body').append($('<br />'));
        
            $('.FJ-modal-body').append($(`<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#final-question" aria-expanded="false" aria-controls="collapseExample"></button>`).text("Hide/Show final Question"))
            $('.FJ-modal-body').append($('<br />'));
            $('.FJ-modal-body').append($(`<button class="btn btn-primary"></button>`).text("Reset").attr("onclick", "createData(JSON.parse(document.getElementById('cats').textContent))"))
        }
    });
    thead.append(row);
    table.append(thead);

    // body
    const tbody = $('<tbody></tbody>');
    for (var i = 0; i < questions_per_cat; i++ )
    {
        const questions = [];
        
        categories.forEach((el, idx) => {
            if (el.isFinal)
            {
                //console.log("asdasd")
            }  else {
                console.log(el.questions[i].question);
                const button = $(`<span class="q" id="q-${i}-${idx}" onclick="showQuestion(\`${el.questions[i].question.replaceAll(new RegExp('"', 'g'), "&quot;")}\`, ${el.questions[i].points}); $('#q-${i}-${idx}').addClass('asked');"></span>`).text(el.questions[i].points); //  remove aattr onclick
                questions.push($('<td></td>').append(button));
            }
        });
        tbody.append($(`<tr id=row-${i}></tr>`).append(questions))
    }

    table.append(tbody);

}


function showQuestion(question, points) 
{
    $('#exampleModal').modal('show');
    $('.modal-body').text(question);
    $('.modal-backdrop').detach().appendTo('#fullscreen-container');
    $('#exampleModal').on('hidden.bs.modal', function (e) {
        if ($('.asked').length === $('.q').length)
        {
            console.log("DONE!")
            $('.FJ-modal-body').addClass("enabled")
        }
    })
    
    // alert(question + " \n Points: " + points.toString());
}
