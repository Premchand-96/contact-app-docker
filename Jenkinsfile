pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Premchand-96/contact-app-docker.git'
            }
        }

        stage('Clean Old Containers') {
            steps {
                sh '''
                echo "Stopping and removing old containers..."
                docker compose down -v || true
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                echo 'Building and deploying project...'
                sh '''
                docker compose up -d --build
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Checking running containers...'
                sh '''
                docker ps -a
                '''
            }
        }
    }
}
