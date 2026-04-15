pipeline {
    agent any;

    stages {
        stage("Code") {
            steps {
                git url: "https://github.com/jaypawar90171/2-tier-app.git", branch: "main"
            }
        }
        stage("Build") {
            steps {
                sh "docker compose build"
            }
        }
        stage("Test") {
            steps {
                echo "Code Tested Successfully...!!!!"
            }
        }
        stage("Docker Hub") {
            steps {
                withCredentials([usernamePassword(
                    credentialsId:"dockerHubCreds", 
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                )]){
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"

                    sh "docker push ${env.dockerHubUser}/todo-app-backend"
                    sh "docker push ${env.dockerHubUser}/todo-app-frontend"
                }
            }
        }
        stage("Deploy") {
            steps {
                sh "docker compose up -d"
            }
        }
    }
}