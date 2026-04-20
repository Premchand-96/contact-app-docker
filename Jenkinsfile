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
                docker-compose down -v || true
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker-compose up -d --build
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                docker ps -a
                '''
            }
        }
    }
}
