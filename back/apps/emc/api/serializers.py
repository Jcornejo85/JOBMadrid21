from rest_framework import serializers

class EmcSerializer(serializers.Serializer):
    Predict = serializers.FloatField()
