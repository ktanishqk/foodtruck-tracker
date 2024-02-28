FROM python:3.11 AS backend


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


WORKDIR /takehome_app/backend


COPY requirements.txt .
RUN apt-get update && apt-get install -y python3-dev default-libmysqlclient-dev build-essential
RUN pip install --no-cache-dir -r requirements.txt


COPY . .


EXPOSE 5432


CMD ["python", "app.py"]
