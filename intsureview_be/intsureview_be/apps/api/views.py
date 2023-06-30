from django.contrib.auth.models import User, Group
from intsureview_be.apps.api.models import OatmilkResponse
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, OatmilkResponseSerializer
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

class OatmilkResponseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows oatmilk responses to be viewed or edited.
    """

    queryset = OatmilkResponse.objects.all()
    serializer_class = OatmilkResponseSerializer

    
# class OatmilkResponseView(APIView):
#     """
#     API endpoint that allows oatmilk responses to be viewed or edited.
#     """
#     def post(self, request, format=None):
#         serializer = MyDataSerializer(data=request.data)
#         if serializer.is_valid():
#             # Process the valid data here
#             # For example, you can save it to the database
#             my_data = serializer.save()
#             return Response({'message': 'Data created successfully'}, status=201)
#         return Response(serializer.errors, status=400)