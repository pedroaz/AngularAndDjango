from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'GetAllReports': 'get-all-reports',
        'GetReport': 'get-report/<str:pk>/'
    }
    return Response(api_urls)