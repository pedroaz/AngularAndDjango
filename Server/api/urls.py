
from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.apiOverview),
    path('get-all-reports', views.GetAllReports),
    path('add-report', views.AddReport),
]
