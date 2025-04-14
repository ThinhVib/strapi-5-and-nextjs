'use client';

import styles from './Footer.module.scss';
import { FaFacebookF, FaYoutube, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import Cookies from 'js-cookie';

export default function Footer() {

  const toggleLanguage = () => {
    const currentLang = Cookies.get('lang') || 'vi';
    const nextLang = currentLang === 'vi' ? 'en' : 'vi';
  
    Cookies.set('lang', nextLang, { expires: 30 });
    window.location.reload(); // reload to reapply language everywhere
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h4>Sản phẩm</h4>
          <ul>
            <li>Thẻ tín dụng</li>
            <li>Thẻ thanh toán</li>
            <li>Tài khoản</li>
            <li>Tài khoản lương</li>
            <li>Tiết kiệm</li>
            <li>Vay</li>
            <li>Bảo hiểm</li>
            <li>Nguồn vốn và ngoại hối</li>
            <li>Ngân hàng số</li>
          </ul>
        </div>

        <div>
          <h4>Thông tin khác</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Nhà đầu tư</li>
            <li>Tuyển dụng</li>
            <li>Ưu đãi</li>
            <li>Tin tức</li>
          </ul>
        </div>

        <div>
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Liên hệ</li>
            <li>Tỷ giá</li>
            <li>Điều khoản sử dụng</li>
            <li>An toàn bảo mật</li>
            <li>Sơ đồ trang</li>
          </ul>
        </div>

        <div className={styles.contactBoxes}>
          <div className={styles.box}>
            <p>ATM & Chi nhánh</p>
            <p>Tổng đài 1900 2200</p>
          </div>
          <div className={styles.box}>
            <p>Ngân hàng di động MyVIB</p>
            <div className={styles.icons}>
              <FaApple />
              <FaGooglePlay />
            </div>
            <p>Theo dõi chúng tôi</p>
            <div className={styles.icons}>
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Bản quyền © Ngân hàng Quốc Tế Việt Nam (VIB)</p>
        <p style={{ cursor: 'pointer' }} onClick={toggleLanguage}>
           English
        </p>
      </div>
    </footer>
  );
}
