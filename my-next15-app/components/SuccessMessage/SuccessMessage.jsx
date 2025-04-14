import styles from './SuccessMessage.module.scss';
import Image from 'next/image';

export default function SuccessMessage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>✅</div>
        <h2>Cảm ơn bạn đã đăng ký!</h2>
        <p>
          Vui lòng theo dõi điện thoại, nhân viên VIB sẽ liên hệ với bạn để xác nhận nhu cầu vay
          trong 24 giờ làm việc (trừ thứ 7, chủ nhật và ngày nghỉ lễ).
        </p>
        <hr />
        <p>
          Nếu cần hỗ trợ, vui lòng liên hệ <strong>1900 2200</strong> (1.000đ/phút)
        </p>
      </div>

      <div className={styles.recommendations}>
        <h3>Gợi ý cho bạn</h3>
        <div className={styles.cards}>
          <div className={styles.cardItem}>
            <Image src="/suggestion1.jpg" width={300} height={200} alt="Tiết kiệm" />
            <p><strong>Lãi suất ưu đãi hấp dẫn</strong><br />khi gửi tiết kiệm trực tuyến trên MyVIB</p>
          </div>
          <div className={styles.cardItem}>
            <Image src="/suggestion2.jpg" width={300} height={200} alt="Thẻ thanh toán" />
            <p><strong>Thẻ thanh toán VIB Platinum</strong><br />hoàn tiền 2% cho giao dịch trực tuyến</p>
          </div>
          <div className={styles.cardItem}>
            <Image src="/suggestion3.jpg" width={300} height={200} alt="Ưu đãi" />
            <p><strong>Mở 1 được 3 với nhiều ưu đãi</strong><br />Tận hưởng hơn 100 tiện ích trên MyVIB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
