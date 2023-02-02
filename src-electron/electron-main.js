import { app, nativeTheme, ipcMain } from "electron";
import path from "path";
import os from "os";
const { menubar } = require("menubar");

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

try {
  if (platform === "win32" && nativeTheme.shouldUseDarkColors === true) {
    require("fs").unlinkSync(
      path.join(app.getPath("userData"), "DevTools Extensions")
    );
  }
} catch (_) {}

const mb = menubar({
  index: process.env.APP_URL,
  icon: path.resolve(__dirname, "icons/MenubarIconTemplate.png"),
  browserWindow: {
    width: 270,
    height: 170,
    minWidth: 270,
    minHeight: 170,
    maxWidth: 270,
    maxHeight: 170,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  },
});

mb.on("ready", () => {
  console.log("app is ready");
  // your app code here
});

ipcMain.handle("quit-app", () => {
  app.quit();
});

/*let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, "icons/icon.png"), // tray icon
    width: 270,
    height: 170,
    minWidth: 270,
    minHeight: 170,
    maxWidth: 270,
    maxHeight: 170,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  mainWindow.loadURL(process.env.APP_URL);

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});*/
