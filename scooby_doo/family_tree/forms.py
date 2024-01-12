'''
This is the forms.py file for the family tree app. 
This file is used to create the forms for the family tree app.
'''

# Django imports
from django import forms

# FamilyForm class
class FamilyForm(forms.Form):
    '''
    This class is used to create the form for the family tree app.
    It includes fields for name, gang, relationship, and appearance.
    '''

    # Define the form fields
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'placeholder': 'Add family members name...'}
            ),
        label=''
    )
    
    gang = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'placeholder': 'Add who they are related too in the Scooby gang...'}
            ),
        label=''
    )

    relationship = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'placeholder': 'Add how they are related...'}
            ),
        label=''
    )

    appearance = forms.CharField(
        max_length=200,
        required=False,
        widget=forms.Textarea(
            attrs={'class': 'form-control', 'placeholder': 'Add when they appeared in the show/movie...', 'rows': 3}
            ),
        label=''
    )

    def __init__(self, *args, **kwargs):
        '''
        This method is used to initialize the form for the family tree app.
        It sets the labels for the form fields to empty strings.
        '''
        super().__init__(*args, **kwargs)
        self.fields['name'].label = ""
        self.fields['gang'].label = ""
        self.fields['relationship'].label = ""
        self.fields['appearance'].label = ""

# DeleteMemberForm class
class DeleteMemberForm(forms.Form):
    '''
    This class is used to delete the members from the family tree app.
    It includes a field for the ID of the member to be deleted.
    '''
    
    def __init__(self, *args, **kwargs):
        super(DeleteMemberForm, self).__init__(*args, **kwargs)
        self.fields['id'].widget.attrs.update({'id': 'id_to_remove'})

    # Define the form field
    id = forms.IntegerField(
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'placeholder': 'ID of the member you want to remove...'}
            ),
        label='',
    )