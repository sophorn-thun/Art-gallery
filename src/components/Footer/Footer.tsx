import styles from './Footer.module.css';
interface FooterProps {
  children: string;
}
function Footer({ children }: FooterProps) {
  return (
    <div className={styles['footer']}>
      <p>{children}</p>
    </div>
  );
}

export default Footer;
