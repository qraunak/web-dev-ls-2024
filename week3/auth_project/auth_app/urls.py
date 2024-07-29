from django.urls import path 
from . import views


urlpatterns = [
    path('register/',views.register_view,name='register'),
    path('login/',views.login_view,name='login'),
    path('logout/',views.logout_view,name='logout'),
    # path('dashboard/',views.dashboard_view,name='dashboard'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('api/posts/<int:post_id>/', views.delete_post, name='delete_post'),
    path('api/posts/', views.get_posts, name='get_posts'),
]