# Generated by Django 4.2.1 on 2023-06-01 17:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("code_editor", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="programcode",
            name="user",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]