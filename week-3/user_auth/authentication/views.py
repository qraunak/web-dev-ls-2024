from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import UserRegistrationForm

from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import UserRegistrationForm

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Automatically log in the user after registration
            return redirect('home')  # Redirect to home page or any other page
    else:
        form = UserRegistrationForm()

    # If the form is not valid or if the request method is GET, render the registration page again
    return render(request, 'registration/register.html', {'form': form})



# Create your views here.
def home(request):
    
    return render(request, 'authentication\home.html', context={})


def login_user(request):
    pass


def logout_user(request):
    pass


def register_user(request):
    pass

