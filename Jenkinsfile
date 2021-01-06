#!/usr/bin/env groovy

pipeline {
    agent any
    options {
        timestamps()
        disableConcurrentBuilds()
     }

    stages {
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }

        stage('Serve') {
            steps {
                echo '+ npm run serve'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}