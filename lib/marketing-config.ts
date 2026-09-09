// 最新构建产物直接托管在官网服务器,走 nginx 静态分发
const windowsAppDownloadUrl = "/downloads/Vesti-0.3.1-Setup.exe"
const linuxAppDownloadUrl =
  "https://box.nju.edu.cn/seafhttp/f/31fb1e4032fc4814a783/?op=view"
const extensionDownloadUrl = "/downloads/vesti-extension-1.2.0-rc.8.zip"

export const marketingLinks = {
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb",
  extensionRepoUrl: "https://github.com/221250144/VESTI",
  extensionDownloadUrl,
  appRepoUrl: "https://github.com/221250144/VESTI-APP",
  appVersion: "0.3.0",
  extensionVersion: "1.2.0-rc.8",
  appDownloads: {
    windows: windowsAppDownloadUrl,
    macos: null,
    linux: linuxAppDownloadUrl,
  },
  demoVideoUrl:
    "https://vesti-landing-page0211.vercel.app/demo-vesti-0319.mp4",
  libraryScreenshotUrl: "/library.png",
} as const

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function assetPath(path: string): string {
  return path.startsWith("/") ? `${siteBasePath}${path}` : path
}

export function getPrimaryInstallHref(fallback = "#download"): string {
  const chromeStoreUrl: string = marketingLinks.chromeStoreUrl
  return chromeStoreUrl === "#" ? fallback : chromeStoreUrl
}

export function isExternalPrimaryInstall(): boolean {
  const chromeStoreUrl: string = marketingLinks.chromeStoreUrl
  return chromeStoreUrl !== "#"
}
