from django.shortcuts import render
from django.views.generic import TemplateView, View

# Create your views here.
class PlayView(View):
    def get(self, request):
        # Stuff to do in GET request
        context = {
            'categories': [
                {'name': 'animal 1', 'questions': [{'points': 100, 'question': 'Q1-animal 1'},{'points': 200, 'question': 'Q2-animal 1'},{'points': 300, 'question': 'Q3-animal 1'}]},
                {'name': 'animal 2', 'questions': [{'points': 100, 'question': 'Q1-animal 2'},{'points': 200, 'question': 'Q2-animal 2'},{'points': 300, 'question': 'Q3-animal 2'}]},
                {'name': 'animal 3', 'questions': [{'points': 100, 'question': 'Q1-animal 3'},{'points': 200, 'question': 'Q2-animal 3'},{'points': 300, 'question': 'Q3-animal 3'}]},
                {'name': 'animal 4', 'questions': [{'points': 100, 'question': 'Q1-animal 4'},{'points': 200, 'question': 'Q2-animal 4'},{'points': 300, 'question': 'Q3-animal 4'}]},
                {'name': 'animal 5', 'questions': [{'points': 100, 'question': 'Q1-animal 5'},{'points': 200, 'question': 'Q2-animal 5'},{'points': 300, 'question': 'Q3-animal 5'}]}            
            ]
        }
        
        return render(request, 'jeopardy/play.html', context=context)

    def post(self, request):
        # Stuff to do in POST request
        return "POST"


class BuildView(View):
    def get(self, request):
        # Stuff to do in GET request
        return render(request, 'jeopardy/build.html')

    def post(self, request):
        # Stuff to do in POST request
        return "POST"


