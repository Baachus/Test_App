'''This is the views.py file for the family tree app. This file is used to render the html file for the family tree app.'''''
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import View
from .forms import FamilyForm
from .models import FamilyModel
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
import json

# Create your views here.

def login_user(request):
    '''This function is used to log the user in.'''
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('family_tree:index'))
        else:
            return HttpResponse("Invalid Login Credentials")
    else:
        return render(request, 'family_tree/pages/login.html')

@login_required(login_url='family_tree:login')
def logout_user(request):
    '''This function is used to log the user out.'''
    logout(request)
    return HttpResponseRedirect(reverse('family_tree:login'))

@login_required(login_url='family_tree:login')
def index(request):
    ''''This function is used to render the html file for the family tree app.'''
    family_form = FamilyForm()
    tasks = FamilyModel.objects.filter(user=request.user)
    ctx = {'tasks': tasks, "form": family_form, "user": request.user}
    return render(request, "family_tree/pages/index.html", ctx)

def register_user(request):
    '''This function is used to register the user.'''
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = request.POST.get('username')
            password = request.POST.get('password1')
            email = request.POST.get('email')
            user = authenticate(username=username, password=password)
            login(request, user)
            return HttpResponseRedirect(reverse('family_tree:login'))
        else:
            return HttpResponse("Invalid Form")
    else:
        form = UserCreationForm()
        ctx = {'form': form}
        return render(request, 'family_tree/pages/register.html', ctx)