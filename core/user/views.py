from rest_framework.decorators import api_view
from user.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED

@api_view(["POST"])
def signup(request):
    data = request.data
    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(status=HTTP_201_CREATED)
    
