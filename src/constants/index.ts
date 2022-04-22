interface menuItemInterface {
  name: string;
  link: string;
  key: string;
}
const menu: menuItemInterface[] = [
  {
    name: 'About',
    key: 'about',
    link: '/'
  },
  {
    name: 'Experience',
    key: 'xp',
    link: '/'
  },
  {
    name: 'Contact',
    key: 'contact',
    link: '/'
  }
];

export { menu };
