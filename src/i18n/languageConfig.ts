export type RTL_LanguageCode = 'ar' | 'ur'

const rtlLanguages: RTL_LanguageCode[] = ['ar', 'ur']

export const getDirectionByLang = (lang: string): 'ltr' | 'rtl' =>
    rtlLanguages.includes(lang as RTL_LanguageCode) ? 'rtl' : 'ltr'
