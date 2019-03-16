from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^api/leads', views.LeadListCreate.as_view()),
    url(r'^api/lead/(?P<pk>\d+)/delete$', views.LeadDestroyView.as_view()),
    url(r'^api/lead/(?P<pk>\d+)/update$', views.LeadUpdateView.as_view()),
    url(r'^api/lead/(?P<pk>\d+)$', views.LeadDetailsView.as_view()),
]
