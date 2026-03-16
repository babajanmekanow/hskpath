import en from './en'
import ru from './ru'
import tk from './tk'

export type Language = 'en' | 'ru' | 'tk'

export type TranslationKey = keyof typeof en

const translations = { en, ru, tk }

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations['en'][key] || key
}

export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en'
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('ru')) return 'ru'
  if (lang.startsWith('tk')) return 'tk'
  return 'en'
}

export { en, ru, tk }
