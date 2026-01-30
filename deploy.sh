#!/bin/bash

# ==============================
# Deploy Jaleed Portfolio to GitHub
# ==============================

echo "🚀 Deploying Jaleed Portfolio..."

# Step 1: Add all changes
git add .

# Step 2: Commit with a timestamped message
COMMIT_MSG="Update portfolio: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# Step 3: Push to main branch
git push origin main

echo "✅ Deployment complete! Your portfolio should be live at:"
echo "https://jaleedaslam.github.io/jaleed-portfolio/"
