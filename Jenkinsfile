pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Premchand-96/contact-app-docker.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                dir('contact-app-docker') {
                    sh '''
                    docker-compose down -v || true
                    docker-compose up -d --build
                    '''
                }
            }
        }
    }
}
