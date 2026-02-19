#!/bin/sh

echo "🔄 Waiting for the database..."

python manage.py makemigrations
python manage.py migrate


echo "🔧 Applying database all migrations..."

echo "🧼 Collecting static files..."
python manage.py collectstatic --noinput

echo "🚀 Starting server..."
exec "$@"


