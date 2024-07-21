from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    
    return render(request, 'authentication\home.html', context={})


def login_user(request):
    pass


def logout_user(request):
    pass


def register_user(request):
    pass

