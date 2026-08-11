# Fullstack Lab — Command Reference

Quick reference of useful commands used while building the project.

---

## WSL

```powershell
# Check WSL version
wsl --version

# Install WSL without automatically installing a distribution
wsl --install --no-distribution

# Install Ubuntu 24.04 on D:
wsl --install Ubuntu-24.04 --location "D:\C_to_D\WSL\Ubuntu-24.04"

# List installed WSL distributions
wsl --list --verbose

# Start Ubuntu directly in Linux home
wsl -d Ubuntu-24.04 --cd ~

# Completely stop WSL
wsl --shutdown
```

---

## Linux Navigation

```bash
# Show current directory
pwd

# Go to Linux home
cd ~

# Go to project
cd ~/0/fullstack-lab

# Go up one directory
cd ..

# List files
ls

# Detailed list including hidden files
ls -la

# Display directory tree
tree

# Create a directory
mkdir folder-name

# Create nested directories if needed
mkdir -p path/to/folder
```

---

## Linux Files

```bash
# Display a file
cat filename

# Show first 20 lines
head -n 20 filename

# Check file type
file filename

# Delete a file
rm filename

# Move or rename a file
mv old-name new-name

# Copy a file
cp source destination

# Edit with Nano
nano filename

# Edit protected/system file
sudo nano filename
```

Nano save:

```text
Ctrl+O → Enter → Ctrl+X
```

---

## Linux Packages

```bash
# Update package information
sudo apt update

# Install a package
sudo apt install package-name

# Example
sudo apt install tree
```

---

## PATH / Commands

```bash
# Display PATH
echo "$PATH"

# Find command location
command -v git
command -v node
command -v npm

# Alternative
which git
```

Native Linux paths normally look like:

```text
/usr/bin/...
/usr/local/bin/...
/home/nelson/...
```

Windows drives accessed through WSL look like:

```text
/mnt/c/...
/mnt/d/...
```

---

## Git Configuration

```bash
# Check Git version
git --version

# Set Git username
git config --global user.name "Nelson"

# Set Git email
git config --global user.email "YOUR_EMAIL"

# Show global Git configuration
git config --global --list
```

---

## Git Daily Workflow

```bash
# Check changes
git status

# Stage all changes
git add .

# Commit
git commit -m "type: meaningful description"

# Push to GitHub
git push origin main
```

Common commit types:

```text
feat:     new feature
fix:      bug fix
docs:     documentation
chore:    tooling/configuration
refactor: code restructuring
test:     tests
style:    formatting/style-only changes
```

---

## NVM

```bash
# Check curl
curl --version

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash

# Reload Bash configuration
source ~/.bashrc

# Check NVM
nvm --version

# Install Node 24
nvm install 24

# Make Node 24 the default
nvm alias default 24

# Switch to Node 24
nvm use 24
```

---

## Node.js / npm

```bash
# Check versions
node --version
npm --version

# Find installations
command -v node
command -v npm
```

Current environment:

```text
Node.js: v24.19.0
npm:     11.17.0
```

---

## npm Project

```bash
# Initialize package.json
npm init -y

# Install application dependency
npm install package-name

# Install multiple dependencies
npm install package-one package-two

# Install development dependency
npm install -D package-name

# Long form of -D
npm install --save-dev package-name
```

Examples:

```bash
# React application dependencies
npm install react react-dom

# Development/build tool
npm install -D vite
```

Meaning:

```text
dependencies
└── packages needed by the application
    ├── react
    └── react-dom

devDependencies
└── development/build/checking tools
    ├── vite
    ├── eslint
    └── prettier
```

---

## npm Inspection

```bash
# Display package.json
cat package.json

# Display installed top-level packages
npm list --depth=0

# Security audit
npm audit

# Show packages requesting funding
npm fund
```

---

## VS Code + WSL

```bash
# Open current directory in VS Code
code .

# Check VS Code command
command -v code

# Check version
code --version
```

Our intentional Windows VS Code bridge:

```bash
sudo ln -s "/mnt/d/Program Files/Microsoft VS Code/bin/code" /usr/local/bin/code
```

---

## WSL PATH Isolation

File:

```text
/etc/wsl.conf
```

Configuration:

```ini
[interop]
appendWindowsPath=false
```

Purpose:

```text
Windows PATH ─X─> automatically mixed into WSL

WSL
├── Linux Git
├── Linux Node
├── Linux npm
└── Linux development tools
```

---

## Project

```bash
# Go directly to project
cd ~/0/fullstack-lab

# Open in VS Code
code .

# Check repository
git status
```

Project location:

```text
/home/nelson/0/fullstack-lab
```

Repository:

```text
github.com/nelson1869-ai/nelson-learning-react
```

---

## Command Syntax Mental Model

```text
command  subcommand  options/flags  arguments
   │         │            │             │
  npm      install        -D           vite
```

Example:

```bash
npm install -D vite
```

means:

```text
npm       → program
install   → action
-D        → option (--save-dev)
vite      → package argument
```

Another example:

```bash
git commit -m "docs: add command reference"
```

means:

```text
git       → program
commit    → action
-m        → message option
"..."     → message value
```

---

## Golden Rule

Before running an unfamiliar command, understand:

```text
1. What program am I running?
2. What action/subcommand am I requesting?
3. What do the flags mean?
4. What files/system state will it change?
5. Can I safely undo it?
```
