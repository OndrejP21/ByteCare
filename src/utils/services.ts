import { PriceListType, ServiceType } from '@/types/page-section.types';

export const services: Array<ServiceType> = [
  {
    header: 'Oprava hardwaru',
    text: 'Nabízíme rychlé a profesionální opravy hardwaru pro váš počítač.',
  },
  {
    header: 'Instalace softwaru',
    text: 'Potřebujete nainstalovat nový software? Jsme tu pro vás!',
  },
  {
    header: 'Čištění počítače',
    text: 'Zajistíme profesionální čištění vašeho počítače od prachu a nečistot.',
  },
  {
    header: 'Nastavení počítačové sítě',
    text: 'Pomůžeme vám s nastavením a údržbou vaší domácí nebo firemní počítačové sítě.',
  },
  {
    header: 'Odvirování',
    text: 'Zajistíme odstranění všech virů a škodlivého softwaru z vašeho zařízení.',
  },
  {
    header: 'Optimalizace výkonu',
    text: 'Zvýšíme výkon vašeho počítače a zajistíme, že bude běžet rychleji a efektivněji.',
  },
  {
    header: 'Záloha a obnova dat',
    text: 'Nabízíme profesionální zálohování a obnovu ztracených dat z vašeho zařízení.',
  },
  {
    header: 'Poradenství a konzultace',
    text: 'Poskytujeme odborné poradenství v oblasti technologií a IT řešení na míru.',
  },
  {
    header: 'Instalace zabezpečovacího softwaru',
    text: 'Pomůžeme vám vybrat a nainstalovat nejlepší bezpečnostní software pro ochranu vašeho počítače a dat.',
  },
];

export const priceList: Array<PriceListType> = [
  {
    name: 'Oprava hardwaru',
    price: 1500,
  },
  {
    name: 'Instalace softwaru',
    price: 800,
  },
  {
    name: 'Reinstalace počítače',
    price: 2500,
  },
  {
    name: 'Čištění počítače',
    price: 600,
  },
  {
    name: 'Nastavení počítačové sítě',
    price: 1200,
  },
  {
    name: 'Odvirování počítače',
    price: 1000,
  },
  {
    name: 'Záloha a obnova dat',
    price: 2000,
  },
];
