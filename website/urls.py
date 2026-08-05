from django.urls import path
from . import views

urlpatterns = [

    path('', views.HomeView.as_view(), name='home'),

    path('about/', views.AboutView.as_view(), name='about'),

    path('yoga-ttc/', views.YogaTTCView.as_view(), name='yoga_ttc'),

    path('retreats/', views.RetreatsView.as_view(), name='retreats'),

    path('contact/', views.ContactView.as_view(), name='contact'),
]