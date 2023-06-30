from django.contrib.auth.models import User, Group
from intsureview_be.apps.api.models import SurveyResponse
from rest_framework import viewsets
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, SurveyResponseSerializer
from django.http import JsonResponse


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
    
class SurveyResponseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Survey responses to be viewed or edited.
    """
    queryset = SurveyResponse.objects.all()
    serializer_class = SurveyResponseSerializer
    allowed_methods = ['GET', 'POST']
    
    def get(self, request, *args, **kwargs):
        # Custom GET logic
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=200)
    
    def post(self, request, *args, **kwargs):
        if serializer.is_valid():
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data)
            my_data = serializer.save()
            return Response({'message': 'Data created successfully'}, status=201)
        return Response(serializer.errors, status=400)