from .views import home, login_user, logout_user, register_user
from django.urls import path
from .views import register
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', home),
    path('register/', register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='authentication/login.html'), name='login'),
    path('register', register_user),
    path('logout', logout_user)
]
