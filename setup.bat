@echo off
REM SmartCareer AI Setup Script for Windows

echo 🚀 SmartCareer AI - Setup Script
echo ==================================

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+
    exit /b 1
)

echo ✅ Node.js installed

REM Install backend dependencies
echo.
echo 📦 Installing backend dependencies...
cd backend
call npm install
cd ..

REM Install frontend dependencies
echo.
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

REM Create .env file
echo.
echo 📝 Creating .env file...
if not exist "backend\.env" (
    copy backend\.env.example backend\.env
    echo ✅ .env file created. Please update it with your MongoDB URI and JWT secret
) else (
    echo ⏭️  .env file already exists
)

echo.
echo ==================================
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Update backend\.env with your configuration
echo 2. Run 'npm run dev' in backend folder
echo 3. Run 'npm start' in frontend folder
echo 4. Visit http://localhost:3000
