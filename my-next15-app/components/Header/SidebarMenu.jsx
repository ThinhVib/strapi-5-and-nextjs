import styles from './SidebarMenu.module.scss';

export default function SidebarMenu({ isOpen, onClose, sidebarData, lang }) {


  // Define grouping keywords based on language
  const groupingKeywords = lang === 'vi' 
    ? { 'Thẻ': 'the', 'Vay': 'vay', 'Tài Khoản': 'tai-khoan' }
    : { 'Card': 'the', 'Loan': 'vay', 'Account': 'tai-khoan' };

  // Group items dynamically
  const groupedItems = Object.keys(groupingKeywords).reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {});

  sidebarData?.data?.navigations
    ?.filter(item => item.location === 'sidebar')
    .sort((a, b) => a.order - b.order)
    .forEach(item => {
      const href = item.href?.toLowerCase();
      if (!href) return;

      for (const [group, keyword] of Object.entries(groupingKeywords)) {
        if (href.includes(keyword)) {
          groupedItems[group].push(item);
          break;
        }
      }
    });

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`}>
      <div className={styles.menu}>
        <button 
          className={styles.close} 
          onClick={onClose} 
          aria-label="Close sidebar menu"
        >
          ✕
        </button>

        <button className={styles.loginBtn}>
          {sidebarData?.data?.title}
        </button>

        <nav className={styles.links}>
          {Object.entries(groupedItems).map(([sectionTitle, items]) => (
            <div className={styles.section} key={sectionTitle}>
              <p>{sectionTitle}</p>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <a href={item.href.trim()}>{item.label.trim()}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}