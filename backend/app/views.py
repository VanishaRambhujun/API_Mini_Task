""" This module contains the functions used in the API calls"""
from .serializers import SalesAgentReportSerializer, SalesAgentSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from .models import SalesAgentReport, SalesAgent
from django.db.models import Q


class SalesAgentViewSet(viewsets.ModelViewSet):
    """ Class containing the functions for creating and listing the sales agents"""
    queryset = SalesAgent.objects.all()
    serializer_class = SalesAgentSerializer

    def create(self, request, **kwargs):
        """ Overriding the create function of the SalesAgentViewSet
        Inputs:
            - agentName
            - agentHireDate
            - agentBirthday
            - agentCity
        returns:
            - A string saying if the sales agent was either succesfully created, already exists or if the form is
                incomplete
            - Note: However, the "incomplete" should not be returned under normal circumstances since validators
                are used in the frontend to avoid this issue.
        """

        agentName = self.kwargs['name']
        agentHireDate = self.kwargs['hire_date']
        agentBirthday = self.kwargs['birthday']
        agentCity = self.kwargs['city']

        if agentName and agentHireDate and agentBirthday and agentCity:
            u, created = SalesAgent.objects.filter(
                Q(name=agentName) & Q(birthday=agentBirthday),).get_or_create(
                    name=agentName, hire_date=agentHireDate, defaults={'birthday': agentBirthday, 'city': agentCity})

            if created:
                return Response("Sales Agent successfully created")

            return Response("Sales Agent already existed")

        else:
            return Response("Incomplete")

    def list(self, request, *args, **kwargs):
        """ Overriding the function list to return the list of all sales agents
         Return: the serialized data
         """
        agents = SalesAgent.objects.all()
        serializer = SalesAgentSerializer(agents, many=True)
        return Response(serializer.data)


class SalesAgentReportViewSet(viewsets.ModelViewSet):
    """ Class containing the functions for creating, listing and filtered listing of the sales reports"""
    queryset = SalesAgentReport.objects.all()
    serializer_class = SalesAgentReportSerializer

    def create(self, request, **kwargs):
        """ Overriding the create function of the SalesAgentReportViewSet
            - agentName
            - agentPeriod
            - agentSaleVolume

        returns:
            - A string saying if the report was either succesfully created, already exists, if the form is incomplete.
                It also returns a string if the sales agents is not found in the SalesAgent database.
                Only existing sales agents can add their sales reports to the database.

            - (Same as above) Note: However, the "incomplete" should not be returned under normal circumstances since
                validators are used in the frontend to avoid this issue.
        """
        agentName = self.kwargs['agent']
        agentPeriod = self.kwargs['period']
        agentSaleVolume = self.kwargs['sale_volume']

        if agentName and agentPeriod and agentSaleVolume:
            if SalesAgent.objects.filter(name=agentName).exists():
                u, created = SalesAgentReport.objects.get_or_create(agent=agentName, period=agentPeriod,
                                                                sale_volume=agentSaleVolume)

                if created:
                    return Response("Report successfully created")

                return Response("Report already exists")

            else:
                return Response("This agent does not exist")

        else:
            return Response("Incomplete")

    def list(self, request, *args, **kwargs):
        """ Overriding the function list to return the list of all sales reports
        - When provided with no query parameters, this function will simply list all the sales reports in the database.
        - If the name of a sales agent is sent to the API, this function will return all the sales reports for this
            agent only
        Return: the serialized data or a string if no reports with the sales agent's name provided is found.
        """
        agentName = request.GET.get('agent', None)
        if agentName:
            all_reports = SalesAgentReport.objects.filter(agent=agentName)

            if all_reports:
                serializer = SalesAgentReportSerializer(all_reports, many=True)
                return Response(serializer.data)
            else:
                return Response(f"No reports for user {agentName} were found")

        else:
            reports = SalesAgentReport.objects.all()
            serializer = SalesAgentReportSerializer(reports, many=True)

            return Response(serializer.data)



