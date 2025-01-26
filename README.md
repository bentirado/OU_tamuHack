---

# OU_tamuHack

This repository contains the project created by **Benjamin Tirado**, **Parker Hix**, and **Javid Peña** during the **tamuHack Hackathon**. The project was developed with the goal of solving a problem for American Airlines.

---

## Project Overview

### Purpose

This project was designed and built to address the issue of **aviophobia** (the fear of flying). It provides resources and statistics to help a potential flyer/customer feel more secure with their decision to fly.

---

### Features

- **Statistics and Information:**  
  There are several pages full of information to help someone learn about how safe flying is. There are also meditation exercises to help those with anxiety or stress about flying.
  
- **Friendly UI:**  
  Designed with a friendly and inviting UI to make users feel comfortable using the application.
  
- **Custom Survey:**  
  A custom survey feature to better match the user with the resource that best suits them.

---

## Build Instructions

To get started with building the project, follow the steps below. You can build for **Linux**, **Windows**, and **macOS**. 

### Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Tools**: Electron, Git

### Installing Dependencies

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/OU_tamuHack.git
   cd OU_tamuHack
   ```

2. Install the required npm dependencies:

   ```bash
   npm install
   ```

### Building for Different Platforms

You can build the Electron application for **Linux**, **Windows**, and **macOS**. Below are the commands for each platform. If you're on Linux, **Wine** may be necessary to build for **Windows**.

#### **1. Build for Linux (AppImage, deb, etc.)**

To build the app for **Linux**, run the following command:

```bash
npm run build -- --linux
```

This will generate the distributables (e.g., `.AppImage`, `.deb`) in the `dist/` directory.

#### **2. Build for Windows (NSIS Installer)**

To build the app for **Windows** from a **Linux** machine, you need **Wine** installed. Wine is used to emulate Windows and build the Windows installer.

To build for **Windows**, use the following command:

```bash
npm run build -- --win
```

This will generate the Windows installer (`.exe`) in the `dist/` directory.

#### **3. Build for macOS (DMG File)**

To build the app for **macOS**, use the following command:

```bash
npm run build -- --mac
```

This will generate the macOS disk image (`.dmg`) in the `dist/` directory.

Note: Building for macOS on Linux is **not officially supported** by Electron Builder. If you're unable to build macOS apps on Linux, you might need to use a **macOS machine** or a **CI/CD pipeline** with macOS support.

### Output Location

After building for each platform, the distributables will be placed in the `dist/` directory.

Example structure:

```plaintext
dist/
├── win-unpacked/
│   └── Zenith Setup 1.0.0.exe
├── mac/
│   └── Zenith-1.0.0.dmg
├── linux/
│   ├── Zenith-1.0.0.AppImage
│   └── Zenith-1.0.0.deb
└── ...
```

- **Windows**: `.exe` installer (found in the `win-unpacked/` folder).
- **macOS**: `.dmg` file (found in the `mac/` folder).
- **Linux**: `.AppImage` and `.deb` files (found in the `linux/` folder).

---

## Contributors

- **Benjamin Tirado**  
  *Role:* Frontend Developer

- **Parker Hix**  
  *Role:* Survey Analyst

- **Javid Peña**  
  *Role:* Data Coordinator

---

Let me know if you need further adjustments or additional information!
