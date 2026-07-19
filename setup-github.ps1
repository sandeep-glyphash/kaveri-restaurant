# GitHub Setup Script for Kaveri Restaurant Website
# This script will push your code to GitHub

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Kaveri Restaurant - GitHub Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Username cannot be empty!" -ForegroundColor Red
    exit 1
}

# Repository details
$repoName = "kaveri-nextjs"
$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Repository URL: $repoUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANT: Please create this repository on GitHub first!" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: $repoName" -ForegroundColor White
Write-Host "3. Make it Private or Public (your choice)" -ForegroundColor White
Write-Host "4. DO NOT initialize with README" -ForegroundColor White
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$ready = Read-Host "Have you created the repository? (Y/N)"

if ($ready -ne "Y" -and $ready -ne "y") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Green

# Add remote
try {
    git remote add origin $repoUrl 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Remote already exists, updating..." -ForegroundColor Yellow
        git remote set-url origin $repoUrl
    }
} catch {
    Write-Host "Setting remote URL..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

# Push to GitHub
Write-Host "Pushing code to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Your code is now on GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "View your repository at:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Deploy to Vercel: https://vercel.com" -ForegroundColor White
    Write-Host "2. Click 'Import Project'" -ForegroundColor White
    Write-Host "3. Select your GitHub repository" -ForegroundColor White
    Write-Host "4. Click 'Deploy'" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Error: Failed to push. Please check:" -ForegroundColor Red
    Write-Host "1. Repository exists on GitHub" -ForegroundColor White
    Write-Host "2. You have push permissions" -ForegroundColor White
    Write-Host "3. Git credentials are configured" -ForegroundColor White
    Write-Host ""
    Write-Host "You may need to authenticate with GitHub." -ForegroundColor Yellow
    Write-Host "Run: git config --global credential.helper wincred" -ForegroundColor Yellow
}
