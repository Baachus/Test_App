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

def index(request):
    ''''This function is used to render the html file for the todo app.'''
    family_form = FamilyForm()
    tasks = TaskModel.objects.filter(user=request.user)
    ctx = {'tasks': tasks, "form": family_form, "user": request.user}
    return render(request, "todo/pages/index.html", ctx)