import styles from './Footer.module.css';
interface FooterProps {
  firstPara: string;
  secondPara: string;
}
function Footer({ firstPara, secondPara }: FooterProps) {
  return (
    <div className={styles['footer']}>
      <p>{firstPara}</p>
      <p>{secondPara}</p>
    </div>
  );
}

export default Footer;
