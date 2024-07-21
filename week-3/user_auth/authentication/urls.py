from .views import home, login_user, logout_user, register_user
from django.urls import path

urlpatterns = [
    path('', home),
    path('login', login_user),
    path('register', register_user),
    path('logout', logout_user)
]
