pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Install all dependecies"){
        steps {
            script {
                bat 'npm install'
            }
        }
    }
    stage("Running UI Tests"){
        steps {
            script {
                bat 'npm run ui_tests'
            }
        }
    }
    
    }
    post {
        always {
            junit (allowEmptyResults: true, testResults: 'cypress/results/results.xml')
        }
    }
}