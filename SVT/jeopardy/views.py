from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class PlayView(TemplateView):
    template_name = "jeopardy/play.html"

class BuildView(TemplateView):
    template_name = "jeopardy/build.html"

