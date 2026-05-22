#!/bin/bash
# Br10n AI Agent Installer
# One-click setup for Br10n development environment

echo "🦝 Installing Br10n AI Agent..."

# Check if we're in a supported environment
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "Detected Linux environment"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Detected macOS environment"
else
    echo "Warning: Untested OS, proceeding anyway..."
fi

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install node
    fi
else
    echo "Node.js already installed: $(node --version)"
fi

# Install OpenClaw if not present
if ! command -v openclaw &> /dev/null; then
    echo "Installing OpenClaw..."
    npm install -g openclaw
else
    echo "OpenClaw already installed: $(openclaw --version)"
fi

# Create workspace directory
WORKSPACE_DIR="$HOME/.openclaw/workspace"
mkdir -p "$WORKSPACE_DIR"
echo "Workspace created at: $WORKSPACE_DIR"

# Clone the portfolio repository if not present
PORTFOLIO_REPO="$WORKSPACE_DIR/portfolio-2026"
if [ ! -d "$PORTFOLIO_REPO" ]; then
    echo "Cloning portfolio repository..."
    git clone https://github.com/febrits/portfolio-2026.git "$PORTFOLIO_REPO"
else
    echo "Portfolio repository already exists, updating..."
    cd "$PORTFOLIO_REPO" && git pull
fi

# Install dependencies for all projects
echo "Installing dependencies for all projects..."
for project in reviewhub eventsync snippetvault pollforge budgetbuddy; do
    if [ -d "$PORTFOLIO_REPO/$project" ]; then
        echo "Installing dependencies for $project..."
        cd "$PORTFOLIO_REPO/$project" && npm install
    fi
done

echo "🦝 Installation complete!"
echo ""
echo "To get started:"
echo "1. cd $WORKSPACE_DIR/portfolio-2026"
echo "2. Choose a project: cd reviewhub|eventsync|snippetvault|pollforge|budgetbuddy"
echo "3. Run development: npm run dev"
echo ""
echo "Or deploy to Vercel:"
echo "1. vercel login"
echo "2. vercel --prod"
echo ""
echo "Happy coding! 🚀"