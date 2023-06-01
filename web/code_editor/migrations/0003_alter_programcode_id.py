# Generated by Django 4.1 on 2023-06-01 19:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("code_editor", "0002_alter_programcode_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="programcode",
            name="id",
            field=models.UUIDField(
                default=uuid.uuid4, editable=False, primary_key=True, serialize=False
            ),
        ),
    ]
