pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Premchand-96/contact-app-docker.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
