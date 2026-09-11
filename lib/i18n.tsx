"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Lang = "en" | "zh"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const STORAGE_KEY = "vesti-lang"

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "zh") {
      setLangState(stored)
    } else if (navigator.language.toLowerCase().startsWith("zh")) {
      setLangState("zh")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
