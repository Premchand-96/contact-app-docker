pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Premchand-96/contact-app-docker.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                sh'''
                docker-compose up -d --build
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh'''
                 docker ps -a
                '''
            }
        }
    }
}
