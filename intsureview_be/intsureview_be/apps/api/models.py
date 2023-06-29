import uuid
from django.db import models

class OatmilkResponse(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_submitted = models.DateField(auto_now_add=True)
    date_purchased = models.DateField()
    on_sale = models.BooleanField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    store_name = models.CharField(max_length=100)
    ounces_per_week = models.IntegerField()
    zip_code = models.IntegerField()

    def __str__(self):
        return self.uuid