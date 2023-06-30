# Generated by Django 4.1.9 on 2023-06-30 00:06

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="OatmilkResponse",
            fields=[
                (
                    "uuid",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("date_submitted", models.DateField(auto_now_add=True)),
                ("date_purchased", models.DateField()),
                ("on_sale", models.BooleanField()),
                ("price", models.DecimalField(decimal_places=2, max_digits=5)),
                ("store_name", models.CharField(max_length=100)),
                ("ounces_per_week", models.IntegerField()),
                ("zip_code", models.IntegerField()),
            ],
        ),
    ]
