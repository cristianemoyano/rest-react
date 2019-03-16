from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class LeadDestroyView(generics.DestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class LeadUpdateView(generics.UpdateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class LeadDetailsView(generics.RetrieveAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
