import { Locale } from './config';

export const messages = {
  en: {
    brand: 'XAMALI',
    nav: {
      home: 'Home',
      about: 'About',
      jobs: 'Jobs',
      workers: 'Workers',
      contact: 'Contact',
      login: 'Log in',
      signup: 'Sign up'
    },
    hero: {
      title: 'Djibouti\'s trusted construction hiring marketplace',
      subtitle: 'Connect qualified construction workers with employers quickly, safely, and professionally.',
      workerCta: 'Find Jobs',
      employerCta: 'Hire Workers'
    },
    common: { search: 'Search', apply: 'Apply now', contact: 'Contact us', language: 'Language' }
  },
  fr: {
    brand: 'XAMALI',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      jobs: 'Emplois',
      workers: 'Travailleurs',
      contact: 'Contact',
      login: 'Connexion',
      signup: 'Inscription'
    },
    hero: {
      title: 'La plateforme de recrutement BTP de confiance à Djibouti',
      subtitle: 'Reliez rapidement et en toute sécurité les travailleurs qualifiés aux employeurs.',
      workerCta: 'Trouver un emploi',
      employerCta: 'Recruter des travailleurs'
    },
    common: { search: 'Rechercher', apply: 'Postuler', contact: 'Contactez-nous', language: 'Langue' }
  },
  ar: {
    brand: 'XAMALI',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      jobs: 'الوظائف',
      workers: 'العمال',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      signup: 'إنشاء حساب'
    },
    hero: {
      title: 'منصة جيبوتي الموثوقة للتوظيف في قطاع البناء',
      subtitle: 'اربط بين العمال المهرة وأصحاب العمل بسرعة وأمان واحترافية.',
      workerCta: 'ابحث عن وظائف',
      employerCta: 'وظّف عمالاً'
    },
    common: { search: 'بحث', apply: 'قدّم الآن', contact: 'تواصل معنا', language: 'اللغة' }
  }
} as const;

export const getMessages = (locale: Locale) => messages[locale] ?? messages.en;
