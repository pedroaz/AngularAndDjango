from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ReportSerializer
from .models import Report


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'GetAllReports': 'get-all-reports',
        'GetReport': 'get-report/<str:pk>/'
    }
    return Response(api_urls)

@api_view(['GET'])
def GetAllReports(request):
    reports = Report.objects.all()
    serialier = ReportSerializer(reports, many=True)
    data = serialier.data
    return Response(data)

@api_view(['POST'])
def AddReport(request):
    report_serializer = ReportSerializer(data = request.data)
    report_serializer.is_valid()
    report_serializer.save()
    return Response()