'''This is the forms.py file for the family tree app. This file is used to create the forms for the family tree app.'''
from django import forms

class FamilyForm(forms.Form):
    '''This class is used to create the form for the family tree app.'''
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Add family members name...'}),
        label=''
    )
    
    gang = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Add who they are related too in the Scooby gang...'}),
        label=''
    )

    relationship = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Add how they are related...'}),
        label=''
    )

    appearance = forms.CharField(
        max_length=200,
        required=False,
        widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Add when they appeared in the show/movie...', 'rows': 3}),
        label=''
    )

    def __init__(self, *args, **kwargs):
        '''This method is used to initialize the form for the family tree app.'''
        super().__init__(*args, **kwargs)
        self.fields['name'].label = ""
        self.fields['gang'].label = ""
        self.fields['relationship'].label = ""
        self.fields['appearance'].label = ""
