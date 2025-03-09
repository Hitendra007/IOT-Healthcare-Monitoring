from django.db import models

class HealthMetric(models.Model):
    heart_rate = models.IntegerField()
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    temperature = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.timestamp} - HR: {self.heart_rate}"