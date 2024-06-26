'''
This is the views.py file for the family tree app. 
This file is used to render the html file for the family tree app.
'''

# Django imports
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm

from rest_framework import viewsets

# Local imports
from .forms import FamilyForm, DeleteMemberForm
from .models import FamilyModel
from .serializers import FamilyMemberSerializer

# Login view
def login_user(request):
    '''
    This function is used to log the user in.
    It handles both the GET and POST requests for the login page.
    '''
    if request.method == "POST":
        # Extract username and password from POST data
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Authenticate the user
        user = authenticate(username=username, password=password)

        # If the user is authenticated, log them in and redirect to index
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('family_tree:index'))
        else:
            # If authentication fails, return an error message
            return HttpResponse("Invalid Login Credentials")
    else:
        # Render the login page for a GET request
        return render(request, 'family_tree/pages/login.html')

# Registration view
def register_user(request):
    '''
    This function is used to register the user.
    It handles both the GET and POST requests for the registration page.
    '''
    if request.method == "POST":
        # Create a form instance and populate it with data from the request
        form = UserCreationForm(request.POST)

        # Check if the form is valid
        if form.is_valid():
            # Save the form data as a new user
            form.save()

            # Authenticate and login the user, then redirect to login
            username = request.POST.get('username')
            password = request.POST.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            return HttpResponseRedirect(reverse('family_tree:login'))
        else:
            # If the form is invalid, return an error message
            return HttpResponse("Invalid Form")
    else:
        # Create a new form instance for a GET request and render the registration page
        form = UserCreationForm()
        ctx = {'form': form}
        return render(request, 'family_tree/pages/register.html', ctx)

# Logout view
@login_required(login_url='family_tree:login')
def logout_user(request):
    '''
    This function is used to log the user out.
    It logs out the user and then redirects to the login page.
    '''
    logout(request)
    return HttpResponseRedirect(reverse('family_tree:login'))

# Index view
@login_required(login_url='family_tree:login')
def index(request):
    '''
    This function is used to render the html file for the family tree app.
    It fetches all family members and renders them on the index page.
    '''
    family_form = FamilyForm()
    #pylint: disable=no-member
    family = FamilyModel.objects.all()
    #pylint: enable=no-member
    ctx = {'family': family, "form": family_form, "user": request.user}
    return render(request, "family_tree/pages/index.html", ctx)

# Add member view
@login_required(login_url='family_tree:login')
def add_member(request):
    ''' This function is used to add a member to the family tree.'''
    if request.method == "POST":
        form = FamilyForm(request.POST, request.FILES)
        if form.is_valid():
            member = form.save(commit=False)
            member.user = request.user
            member.save()
            return HttpResponseRedirect(reverse('family_tree:index'))
        else:
            return HttpResponse("Invalid Form")
    else:
        family_form = FamilyForm()
        ctx = {"form": family_form}
        return render(request, "family_tree/pages/add_member.html", ctx)

# Delete member view
@login_required(login_url='family_tree:login')
def delete_member(request):
    '''
    This function is used to delete a member from the family tree.
    It handles both the GET and POST requests for the delete member page.
    '''
    if request.method=="POST":
        id_to_remove = request.POST.get('id')
        #pylint: disable=no-member
        try:
            member = FamilyModel.objects.get(id=id_to_remove)
        except FamilyModel.DoesNotExist:
            return HttpResponse('Invalid ID', status=400)
        #pylint: enable=no-member
        member.delete()
        return HttpResponseRedirect(reverse('family_tree:index'))
    else:
        family_form = DeleteMemberForm()
        ctx = {"form": family_form}
        return render(request, "family_tree/pages/delete_member.html", ctx)

# View family member detail information
@login_required(login_url='family_tree:login')
def view_member(request, member_id):
    '''
    This function is used to view a family member's detail information.
    It handles both the GET and POST requests for the view member page.
    '''

    #pylint: disable=no-member
    try:
        member = FamilyModel.objects.get(id=member_id)
    except FamilyModel.DoesNotExist:
        return HttpResponse('Invalid ID', status=400)
    #pylint: enable=no-member
    ctx = {"member": member}
    return render(request, "family_tree/pages/view_member.html", ctx)

# Edit family member detail information
@login_required(login_url='family_tree:login')
def edit_member(request, member_id):
    '''
    This function is used to edit a family member's detail information.
    It handles both the GET and POST requests for the edit member page.
    '''
    try:
        #pylint: disable=no-member
        member = FamilyModel.objects.get(id=member_id)
        #pylint: enable=no-member
        if request.method == "POST":
            family_form = FamilyForm(request.POST, request.FILES)
            if family_form.is_valid():
                member.name = request.POST.get('name')
                member.relationship = request.POST.get('relationship')
                member.gang = request.POST.get('gang')
                member.appearance = request.POST.get('appearance')
                member.image = 'family_members/'+request.POST.get('image')
                member.save()
                return HttpResponseRedirect(reverse('family_tree:index'))
            else:
                return HttpResponse("Invalid Form")
        else:
            family_form = FamilyForm(instance=member)
            ctx = {"member": member, "form": family_form}
            return render(request, "family_tree/pages/edit_member.html", ctx)
    #pylint: disable=no-member
    except FamilyModel.DoesNotExist:
    #pylint: enable=no-member
        return HttpResponse('Invalid ID', status=400)

@login_required(login_url='family_tree:login')
def view_gang_tree(request):
    '''
    This function is used to render the html file for the family tree app.
    It fetches all family members and renders them on the index page.
    '''
    ctx = {"user": request.user}
    return render(request, "family_tree/pages/view_gang_tree.html", ctx)

class FamilyMemberViewSet(viewsets.ModelViewSet):
    queryset = FamilyModel.objects.all()
    serializer_class = FamilyMemberSerializer