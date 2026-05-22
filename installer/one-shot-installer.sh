#!/bin/bash
# Br10n Portfolio One-Shot Installer
# Single command to get all 5 projects running

echo "🦝 Br10n Portfolio Installer"
echo "=========================="

# Detect OS
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
else
    echo "Unsupported OS: $OSTYPE"
    exit 1
fi

echo "Detected OS: $OS"

# Check prerequisites
echo "Checking prerequisites..."

# Check for git
if ! command -v git &> /dev/null; then
    echo "Error: git not found. Please install git first."
    exit 1
fi

# Check for node
if ! command -v node &> /dev/null; then
    echo "Error: node not found. Please install Node.js first."
    exit 1
fi

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "Error: npm not found. Please install npm first."
    exit 1
fi

echo "Prerequisites OK!"

# Clone or update repository
REPO_DIR="$HOME/portfolio-2026"
REPO_URL="https://github.com/febrits/portfolio-2026.git"

if [ -d "$REPO_DIR" ]; then
    echo "Updating existing repository..."
    cd "$REPO_DIR" && git pull
else
    echo "Cloning repository..."
    git clone "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"

# Install dependencies for all projects
echo "Installing dependencies for all projects..."
for project in reviewhub eventsync snippetvault pollforge budgetbuddy; do
    echo "Installing $project..."
    cd "$REPO_DIR/$project" && npm install > /dev/null 2>&1
    echo "✓ $project dependencies installed"
done

echo ""
echo "🦝 Installation Complete!"
echo ""
echo "To run any project:"
echo "  cd $REPO_DIR/<project-name>"
echo "  npm run dev"
echo ""
echo "Available projects:"
echo "  reviewhub    - Review platform with voting demo"
echo "  eventsync    - Event management with RSVP demo"
echo "  snippetvault - Code snippet manager"
echo "  pollforge    - Poll creation with results"
echo "  budgetbuddy  - Personal finance tracker"
echo ""
echo "To deploy to Vercel:"
echo "  1. vercel login"
echo "  2. vercel --prod (from any project directory)"
echo ""
echo "Happy coding! 🚀"