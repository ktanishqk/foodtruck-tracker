# Use the official Python image as the base image
FROM python:3.11 AS backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory in the container
WORKDIR /takehome_app/backend

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN apt-get update && apt-get install -y python3-dev default-libmysqlclient-dev build-essential
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend files into the container
COPY . .

# Expose the Flask port
EXPOSE 5432

# Run the Flask server
CMD ["python", "app.py"]
