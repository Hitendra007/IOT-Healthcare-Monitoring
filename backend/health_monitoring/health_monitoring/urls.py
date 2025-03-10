from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from metrics import views

router = routers.DefaultRouter()
router.register(r'metrics', views.HealthMetricViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]