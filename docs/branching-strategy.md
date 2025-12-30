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
