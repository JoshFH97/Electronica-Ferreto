# Generated by Django 5.1.1 on 2024-11-03 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0007_alter_orden_fecha_orden'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orden',
            name='fecha_orden',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
