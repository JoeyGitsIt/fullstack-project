from django.contrib.auth.models import User, Group
from rest_framework import serializers
from intsureview_be.apps.api.models import OatmilkResponse

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class OatmilkResponseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OatmilkResponse
        fields = ["uuid", "date_time", "drinks_oatmilk", "price", "zip_code", "store", "oat_milk_quantity"]