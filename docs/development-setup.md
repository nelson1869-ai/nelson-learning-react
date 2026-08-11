WINDOWS POWERSHELL (Administrator)
────────────────────────────────────────────────────────────

# 1. Install WSL engine only
wsl --install --no-distribution

# 2. Create D: storage
New-Item -ItemType Directory -Path "D:\C_to_D\WSL" -Force
New-Item -ItemType Directory -Path "D:\C_to_D\Docker" -Force

# 3. Install Ubuntu directly on D:
wsl --install Ubuntu-24.04 --location "D:\C_to_D\WSL\Ubuntu-24.04"

# 4. Verify Ubuntu virtual disk
Get-ChildItem "D:\C_to_D\WSL\Ubuntu-24.04" -Force
# Expected: ext4.vhdx

# 5. Start Ubuntu in Linux home
wsl -d Ubuntu-24.04 --cd ~


UBUNTU / WSL
────────────────────────────────────────────────────────────

# 6. Create project workspace
mkdir -p ~/0/fullstack-lab
cd ~/0/fullstack-lab
pwd
# /home/nelson/0/fullstack-lab

# 7. Optional useful utility
sudo apt update
sudo apt install tree

# 8. Check Git
git --version
which git
# Expected: /usr/bin/git

# 9. Configure Git
git config --global user.name "Nelson"
git config --global user.email "YOUR_EMAIL"
git config --global --list


CLEAN LINUX PATH
────────────────────────────────────────────────────────────

# 10. Edit WSL configuration
sudo nano /etc/wsl.conf

# Add:
[interop]
appendWindowsPath=false

# Nano save:
# Ctrl+O → Enter → Ctrl+X

exit


WINDOWS POWERSHELL
────────────────────────────────────────────────────────────

# 11. Restart WSL
wsl --shutdown
wsl -d Ubuntu-24.04 --cd ~


UBUNTU / WSL
────────────────────────────────────────────────────────────

# 12. Verify clean Linux environment
echo "$PATH"
command -v node
command -v npm
command -v git

# Before Node installation:
# node → nothing
# npm  → nothing
# git  → /usr/bin/git


NVM + NODE.JS
────────────────────────────────────────────────────────────

# 13. Check curl
curl --version
command -v curl
# Expected: /usr/bin/curl

# 14. Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash

# Reload Bash
source ~/.bashrc

# Verify NVM
nvm --version
command -v nvm

# 15. Install Node.js 24 LTS
nvm install 24
nvm alias default 24
nvm use 24

# Verify Node + npm
node --version
npm --version
command -v node
command -v npm

# Current:
# Node v24.19.0
# npm  11.17.0
# Paths → /home/nelson/.nvm/...


VS CODE
────────────────────────────────────────────────────────────

# 16. Expose ONLY Windows VS Code to WSL
sudo ln -s "/mnt/d/Program Files/Microsoft VS Code/bin/code" /usr/local/bin/code

# Verify
command -v code
code --version

# Open project
cd ~/0/fullstack-lab
code .


DAILY WORKFLOW
────────────────────────────────────────────────────────────

# PowerShell:
wsl -d Ubuntu-24.04 --cd ~

# Ubuntu:
cd ~/0/fullstack-lab
git status
code .


ARCHITECTURE
────────────────────────────────────────────────────────────

D:\C_to_D\
├── WSL\
│   └── Ubuntu-24.04\
│       └── ext4.vhdx
│             │
│             └── /home/nelson/
│                 ├── .nvm/
│                 │   └── Node 24 + npm
│                 │
│                 └── 0/
│                     └── fullstack-lab/
│
└── Docker\                 ← later


RULE TO REMEMBER
────────────────────────────────────────────────────────────

/mnt/c/...   = Windows C: accessed from Linux
/mnt/d/...   = Windows D: accessed from Linux

/home/...    = native Linux filesystem
/usr/...     = native Linux tools
~/.nvm/...   = native Linux Node/npm

Development tools → Linux/WSL
Project code       → ~/0/fullstack-lab
Large WSL storage  → D:
Windows VS Code    → selected integration only