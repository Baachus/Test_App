'''
This is the forms.py file for the family tree app. 
This file is used to create the forms for the family tree app.
'''

# Django imports
from django import forms
from .models import FamilyModel

class FamilyForm(forms.ModelForm):
    '''This class contains information for the family form.'''
    class Meta:
        '''Meta class for the family form.'''
        model = FamilyModel
        fields = ['name', 'gang', 'relationship', 'appearance', 'image']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({'data-testid': 'name'})
        self.fields['gang'].widget.attrs.update({'data-testid': 'gang'})
        self.fields['relationship'].widget.attrs.update({'data-testid': 'relationship'})
        self.fields['appearance'].widget.attrs.update({'data-testid': 'appearance'})
        self.fields['image'].widget.attrs.update({'data-testid': 'image'})

# DeleteMemberForm class
class DeleteMemberForm(forms.Form):
    '''
    This class is used to delete the members from the family tree app.
    It includes a field for the ID of the member to be deleted.
    '''
    id = forms.IntegerField()

    def __init__(self, *args, **kwargs):
        super(DeleteMemberForm, self).__init__(*args, **kwargs)
        self.fields['id'].widget.attrs.update({'data-testid': 'id_to_remove'})
