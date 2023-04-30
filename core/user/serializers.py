from rest_framework import serializers
from user.models import CustomUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ["first_name", "last_name", "password",  "email"]
        model = CustomUser
    

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)
