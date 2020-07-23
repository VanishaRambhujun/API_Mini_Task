""" Module containing the table definitions for the SalesAgentReport and SalesAgent tables """
from django.db import models


class SalesAgentReport(models.Model):
    """ Table used to store all the sales reports """
    agent = models.CharField(max_length=200)
    period = models.DateTimeField()  # input_formats=settings.DATE_INPUT_FORMATS)
    sale_volume = models.FloatField()

    def __str__(self):
        return self.agent


class SalesAgent(models.Model):
    """ Table used to store all the sales agents """
    name = models.CharField(max_length=200)
    hire_date = models.DateTimeField()  # input_formats=settings.DATE_INPUT_FORMATS)
    birthday = models.DateTimeField()  # input_formats=settings.DATE_INPUT_FORMATS)
    city = models.CharField(max_length=200)

    def __str__(self):
        return self.name
