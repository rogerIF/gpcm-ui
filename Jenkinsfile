pipeline {
    agent any
    
    environment {
      repo = "aliyun.docker.registry:5000"
      imageName = "gwssi/gpcm-ui:v0.0.4.${BUILD_NUMBER}"
    }
    tools {
        nodejs 'node-v8.11.2'
    }
    stages {
       /* stage('CheckOut') {
            steps {
               git branch: 'release-0.4', credentialsId: 'd3e953c3-60e2-43c7-928e-a787a4600c3a', url: 'https://github.com/gwssi-projects/gpcm-ui.git'
            }
        }*/
        stage('真') {
            steps {
              sh 'npm install'
              sh 'npm run build'
            }
        }
        stage('真真') {
            steps {
                script {
                    docker.withRegistry("http://${repo}") {
                       docker.build("${imageName}",'.').push()
                    }
                }
            }
        }
        stage('真真') {
            steps {
                sh 'cp -r /jenkins/tools/.kube ~/.kube'
                sh "kubectl set image deployment/gpcm-ui gpcm-ui=${repo}/${imageName}"
            }
        }
    }
}
