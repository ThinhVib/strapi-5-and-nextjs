'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './LoanForm.module.scss';
import { useRouter } from 'next/navigation';


const schema = z.object({
  loanAmount: z.string().nonempty(),
  loanPurpose: z.string().nonempty(),
  collateral: z.string().nonempty(),
  monthlyIncome: z.string().nonempty(),
  gender: z.enum(['Nam', 'Nữ']),
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  location: z.string().nonempty(),
  branch: z.string().nonempty(),
});



export default function LoanForm({ options }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Inside your component:
const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    alert('Đăng ký thành công!');

    setTimeout(() => {
      router.push('/vay-mua-nha/thanh-cong');
    }, 300);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Đăng ký vay bất động sản</h2>
          <p>Lãi suất 5.9%, trả góp từ 0.1%</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Loan Info Section */}
          <h3>Thông tin nhu cầu vay</h3>
          <div className={styles.grid}>
            <div>
              <label>Số tiền cần vay</label>
              <select {...register('loanAmount')}>
                <option value="">-- Chọn --</option>
                {options?.loanAmounts?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.loanAmount?.message}</span>
            </div>

            <div>
              <label>Mục đích vay</label>
              <select {...register('loanPurpose')}>
                <option value="">-- Chọn --</option>
                {options?.loanPurposes?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.loanPurpose?.message}</span>
            </div>

            <div>
              <label>Tài sản thế chấp</label>
              <select {...register('collateral')}>
                <option value="">-- Chọn --</option>
                {options?.collaterals?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.collateral?.message}</span>
            </div>

            <div>
              <label>Thu nhập hàng tháng</label>
              <select {...register('monthlyIncome')}>
                <option value="">-- Chọn --</option>
                {options?.incomes?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.monthlyIncome?.message}</span>
            </div>
          </div>

          {/* Contact Info Section */}
          <h3>Thông tin liên lạc</h3>

          <div className={styles.radioGroup}>
            <label>
              <input type="radio" value="Nam" {...register('gender')} /> Nam
            </label>
            <label>
              <input type="radio" value="Nữ" {...register('gender')} /> Nữ
            </label>
            <span>{errors.gender?.message}</span>
          </div>

          <div className={styles.grid}>
            <div>
              <label>Họ và tên</label>
              <input type="text" {...register('fullName')} />
              <span>{errors.fullName?.message}</span>
            </div>

            <div>
              <label>Số ĐTDD</label>
              <input type="text" {...register('phone')} />
              <span>{errors.phone?.message}</span>
            </div>

            <div>
              <label>Email</label>
              <input type="email" {...register('email')} />
              <span>{errors.email?.message}</span>
            </div>

            <div>
              <label>Tỉnh/TP sinh sống</label>
              <select {...register('location')}>
                <option value="">-- Chọn --</option>
                {options?.locations?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.location?.message}</span>
            </div>

            <div className={styles.fullWidth}>
              <label>Chi nhánh tư vấn</label>
              <select {...register('branch')}>
                <option value="">-- Chọn --</option>
                {options?.branches?.map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
              <span>{errors.branch?.message}</span>
            </div>
          </div>

          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </div>
  );
}
