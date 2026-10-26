export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'ДСК', to: '/dsk' },
  { label: 'АБЗ', to: '/abz' },
  { label: 'Сервис и комплектующие', to: '/service' },
  { label: 'Контакты', to: '/#contacts' },
];
