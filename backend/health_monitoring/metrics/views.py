from rest_framework import viewsets
from .models import HealthMetric
from .serializers import HealthMetricSerializer

class HealthMetricViewSet(viewsets.ModelViewSet):
    queryset = HealthMetric.objects.all().order_by('-timestamp')
    serializer_class = HealthMetricSerializer