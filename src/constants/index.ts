interface menuItemInterface {
  name: string;
  link: string;
  key: string;
}
const menu: menuItemInterface[] = [
  {
    name: 'sobre',
    key: 'about',
    link: '/'
  },
  {
    name: 'experiência',
    key: 'xp',
    link: '/'
  },
  {
    name: 'contato',
    key: 'contact',
    link: '/'
  }
];

export { menu };
