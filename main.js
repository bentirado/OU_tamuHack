// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

// Hot-reloading
if (process.env.NODE_ENV === 'development') {
  // Initialize electron-reloader for fast reloading
  require('electron-reloader')(module, {
    // Optional settings (default is fine for most use cases)
    ignore: /node_modules|[\/\\]\./, // Ignore files in node_modules or dotfiles
    // You can also add custom reload file extensions if necessary, like .css or .html
  });
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // Allow node integration if necessary, but ensure it's safe
      nodeIntegration: true, // This should be set carefully, only when needed
      contextIsolation: false // Disable context isolation if needed
    }
  })

  // Load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools if you want to debug during development
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

