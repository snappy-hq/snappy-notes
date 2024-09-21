# CI/CD Pipeline Design

## Problem Statement
Design an advanced CI/CD pipeline for the project with the following steps:

1. **Triggering the Pipeline**
   - The pipeline is triggered whenever code is pushed or a pull request is merged directly into the master branch.

2. **Pipeline Steps**
   - The pipeline consists of multiple steps and environments (development, staging, and production):

### Steps

1. **Pull the Code**
   - Fetch the latest code from the repository.

2. **Install Dependencies**
   - Install all necessary dependencies for the project.

3. **Lint the Code Base**
   - Run linting tools to ensure code quality.

4. **Test the Code Base**
   - Execute tests, including SonarQube analysis for code quality and security.

5. **Build Docker Image**
   - If previous steps pass, build the project as a Docker image.
   - Scan the Docker image with `trivy`.
   - Push the Docker image to a private registry.
   - Serve test coverage files located at `./coverage/*.html` as a static site using Nginx on the development machine.
   - Host the development environment using Terraform.

6. **Output IP for Coverage Files**
   - Provide the IP address to access the coverage files served on the instance.
   - Temporarily run the built project on the development machine, reverse proxying with Nginx (port 80 -> 3000).

7. **Approval for Staging Deployment**
   - Prompt for approval to ship the built image to the staging environment.
   - If approved, proceed to the next steps; otherwise, fail the CI build.

8. **Deploy to Staging Environment**
   - Spin up a new instance for the staging environment and delete the old development instance using Terraform.
   - Pull the Docker image and run it.
   - Output the link to access the running container and verify the site.

9. **Approval for Production Deployment**
   - Prompt for approval to proceed to the production environment.
   - If approved, proceed to the next steps.

10. **Deploy to Production Environment**
    - Destroy the staging environment and spin up a new production environment using Terraform.
    - Pull the Docker images and run three instances on different ports.
    - Set up Jenkins for load balancing and rate limiting between the instances.
    - Output the publicly accessible IP for the production environment.

## Summary
This CI/CD pipeline ensures a robust and automated process for deploying code across development, staging, and production environments, with necessary checks and approvals at each stage.
