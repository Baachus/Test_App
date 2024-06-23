from rest_framework import serializers
from .models import FamilyModel

class FamilyMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = FamilyModel
        fields = '__all__'  # or list the fields you want to include e.g. ['name', 'relation']