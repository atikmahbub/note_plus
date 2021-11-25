from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView,ObtainTokenPairView, UserView
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'users', UserView)


urlpatterns = [
    path('auth/login/', ObtainTokenPairView.as_view(), name='login'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    path('', include(router.urls)),
]