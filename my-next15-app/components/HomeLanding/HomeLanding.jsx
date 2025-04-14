import styles from "./HomeLanding.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomeLanding( { data }) {

  if (!data) {
    return <div>Loading...</div>;
  }

  function formatCell(text) {
    if (!text) return null;
  
    // Auto-link "Biểu phí..." row as in your original code
    const isFeeRow = text.trim().includes('Biểu phí');
  
    if (isFeeRow) {
      return <a href="#">{text.trim()}</a>;
    }
  
    // Support line breaks (optional if data is clean)
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroMainSection}>
          <div className={styles.heroText}>
            <h1>{data.banner_img.title}</h1>
            <p>{data.banner_img.subtitle}</p>
            <Link href={data?.banner_img?.navigation?.href || ""} className={styles.cta}>
              {data?.banner_img?.navigation?.label}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
      <h2>{data?.benifit_vay_mua_nha.title}</h2>

      <div className={styles.tabs}>
        <button className={styles.active}>{data?.benifit_vay_mua_nha.subtitle1}</button>
        <button>{data?.benifit_vay_mua_nha.subtitle2}</button>
      </div>

      <div className={styles.table}>
        {data?.benifit_vay_mua_nha.infor_list?.map((item) => (
          <div className={styles.row} key={item.id}>
            <div className={styles.cellHead}>{item.title}</div>
            <div>{formatCell(item.subtitle1)}</div>
            <div>{formatCell(item.subtitle3)}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}


