# Branching Strategy

## Overview

This repository follows a Git Flow branching model to organize development and releases.

## Branches

### Main Branch (`main`)

- Contains production-ready code
- Protected branch with required pull request reviews
- Only accepts merges from `release` and `hotfix` branches
- All commits should be tagged with version numbers

### Develop Branch (`develop`)

- Integration branch for features
- Source branch for feature development
- Protected branch with required pull request reviews
- Serves as the basis for release branches

### Feature Branches (`feature/*`)

- Created from: `develop`
- Naming convention: `feature/description-of-feature`
- Merged back into: `develop` via pull request
- Deleted after merge

### Release Branches (`release/*`)

- Created from: `develop`
- Naming convention: `release/version-number`
- Merged into: `main` and back to `develop`
- Used for release preparation and bug fixes

### Hotfix Branches (`hotfix/*`)

- Created from: `main`
- Naming convention: `hotfix/description-of-fix`
- Merged into: `main` and `develop`
- For critical production fixes only

## Pull Request Rules

- **Code Review**: Minimum 1 approval required
- **Status Checks**: All CI/CD pipelines must pass
- **Branch Protection**: Up-to-date with base branch required
- **Naming**: Use descriptive titles and reference issue numbers
- **Description**: Include context and testing details

## CI/CD Pipeline

### Overview

The CI pipeline automatically validates all pull requests and commits to ensure code quality, security, and compliance with branch protection rules.

### Pipeline Stages

#### 1. Automated Tests

- Unit tests must pass on all branches
- Integration tests run for feature branches
- Code coverage threshold: minimum 80%
- Failed tests block merge to protected branches

#### 2. Security Scanning

- Dependency vulnerability scanning with npm audit
- Static application security testing (SAST)
- Secret detection to prevent credential leaks
- Security issues must be resolved before merge

#### 3. Code Quality Checks

- Linting with ESLint/Prettier
- Code formatting validation
- Duplicate code detection
- Quality gates enforce minimum standards

### Branch Enforcement

- **All Branches**: Tests and linting must pass
- **Protected Branches** (`main`, `develop`):
  - All status checks required
  - Security scans must complete successfully
  - Branch must be up-to-date with base branch
  - Code review approval mandatory before merge

### Pipeline Failure Resolution

If any pipeline check fails:

1. Review the failure details in the pull request
2. Fix the issues locally
3. Push changes to trigger pipeline re-run
4. Do not force merge on protected branches
