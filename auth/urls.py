from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView,ObtainTokenPairView

urlpatterns = [
    path('auth/login/', ObtainTokenPairView.as_view(), name='login'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
]