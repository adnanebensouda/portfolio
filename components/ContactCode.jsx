import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'adnanebensouda.me',
    href: 'https://adnanebensouda.me',
  },
  {
    social: 'email',
    link: 'bensouda.adnane.dev@gmail.com',
    href: 'mailto:bensouda.adnane.dev@gmail.com',
  },
  {
    social: 'github',
    link: 'adnanenet',
    href: 'https://github.com/adnanenet',
  },
  {
    social: 'linkedin',
    link: 'adnanebensouda',
    href: 'https://www.linkedin.com/in/adnanebensouda',
  },
  {
    social: 'codepen',
    link: 'adnanenet',
    href: 'https://codepen.io/adnanenet',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
