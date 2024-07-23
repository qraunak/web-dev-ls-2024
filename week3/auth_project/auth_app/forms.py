from django.forms import ModelForm, Form #, UserCreationForm
from django.contrib.auth.forms import UserCreationForm
from .models import Users

from django import forms

class LoginForm(UserCreationForm):
	class Meta:
		model = Users
		# fields = "__all__"
		fields = ("username","password")
		# fields = ("",)


class RegisterForm(UserCreationForm):
	class Meta:
		model = Users
		fields = ("username","password")
		# fields = "__all__"




# creating a form 
class InputForm(Form):

	user_name = forms.CharField(max_length = 200)
	password = forms.CharField(widget = forms.PasswordInput())
