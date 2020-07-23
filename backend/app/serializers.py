""" Serialization of data contained in the database is done here """
from .models import SalesAgentReport, SalesAgent
from rest_framework import serializers


class SalesAgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesAgent
        fields = ('name', 'hire_date', 'birthday', 'city')

    def to_representation(self, instance):
        """ Override the function to_representation to return the date in the format YYYY-MM-DD """
        ret = super().to_representation(instance)
        ret['hire_date'] = ret['hire_date'][:10]
        ret['birthday'] = ret['birthday'][:10]
        return ret


class SalesAgentReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesAgentReport
        fields = ('agent', 'period', 'sale_volume')

    def to_representation(self, instance):
        """ Override the function to_representation to return the date in the format YYYY-MM """
        ret = super().to_representation(instance)
        ret['period'] = ret['period'][:7]
        return ret
