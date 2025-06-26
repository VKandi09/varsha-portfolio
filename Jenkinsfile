pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', credentialsId: 'github-creds', url: 'https://github.com/VKandi09/varsha-portfolio.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build('varsha-kandi-portfolio')
        }
      }
    }

    stage('Push Image to Registry') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          script {
            docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
              docker.image('varsha-kandi-portfolio').push('latest')
            }
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
        sh 'kubectl apply -f k8s/ingress.yaml'
      }
    }
  }
}
