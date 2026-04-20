FROM nginx:latest

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend code
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
