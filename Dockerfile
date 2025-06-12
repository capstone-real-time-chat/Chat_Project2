# Use the official Python base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock to the container
COPY . .

# Install pipenv and dependencies
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# Expose the port that the FastAPI server will listen on
EXPOSE 8859

# Start the FastAPI server using Uvicorn
CMD ["uv", "run", "uvicorn", "stock.backend.main:app" "main:app"]