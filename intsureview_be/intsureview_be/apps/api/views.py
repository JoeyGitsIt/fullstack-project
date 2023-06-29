from django.contrib.auth.models import User, Group
from intsureview_be.apps.api.models import OatmilkResponse
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, OatmilkResponseSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class OatmilkResponseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows oatmilk responses to be viewed or edited.
    """

    queryset = OatmilkResponse.objects.all()
    serializer_class = OatmilkResponseSerializer