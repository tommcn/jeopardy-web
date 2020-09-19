from django.shortcuts import render
from django.views.generic import TemplateView, View

# Create your views here.
class PlayView(TemplateView):
    template_name = "jeopardy/play.html"

class BuildView(View):
    def get(self, request):
        # Stuff to do in GET request
        return render(request, 'jeopardy/build.html')

    def post(self, request):
        # Stuff to do in POST request
        return "POST"

    template_name = "jeopardy/build.html"

