import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
   <img className={styles.img}src='/img/cafeLogo.png'/>
  </div>
);
}