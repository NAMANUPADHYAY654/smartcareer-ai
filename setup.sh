#!/bin/bash

# SmartCareer AI Setup Script

echo "🚀 SmartCareer AI - Setup Script"
echo "=================================="

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create .env file
echo ""
echo "📝 Creating .env file..."
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ .env file created. Please update it with your MongoDB URI and JWT secret"
else
    echo "⏭️  .env file already exists"
fi

echo ""
echo "=================================="
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update backend/.env with your configuration"
echo "2. Run 'npm run dev' in backend folder"
echo "3. Run 'npm start' in frontend folder"
echo "4. Visit http://localhost:3000"
