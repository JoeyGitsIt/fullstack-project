import uuid
from django.db import models

class OatmilkResponse(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_time = models.DateField()
    drinks_oatmilk = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    zip_code = models.IntegerField()
    store = models.CharField(max_length=100)
    oat_milk_quantity = models.IntegerField()

    def __str__(self):
        return self.uuid