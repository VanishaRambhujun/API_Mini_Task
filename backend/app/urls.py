""" Module containing the endpoint paths """
from django.urls import path
from .views import SalesAgentViewSet, SalesAgentReportViewSet


urlpatterns = [
    path('create_agent/<str:name>/<hire_date>/<birthday>/<str:city>', SalesAgentViewSet.as_view({'post': 'create'}),
         name='create_agent'),
    path('get_all_agents/', SalesAgentViewSet.as_view({'get': 'list'}), name='get_all_reports'),
    path('create_report/<str:agent>/<period>/<sale_volume>', SalesAgentReportViewSet.as_view({'post': 'create'}),
         name='create_report'),
    path('get_all_reports/', SalesAgentReportViewSet.as_view({'get': 'list'}), name='get_all_reports')
]
