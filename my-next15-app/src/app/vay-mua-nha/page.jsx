import LoanForm from "../../../components/LoanForm/LoanForm";
 

async function getOptions() {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        loanAmounts: ["500 triệu", "1 tỷ", "1.5 tỷ"],
        loanPurposes: ["Mua nhà", "Xây dựng", "Sửa chữa"],
        collaterals: ["Bất động sản", "Ô tô"],
        incomes: ["Dưới 10 triệu", "10-20 triệu", "20-30 triệu", "Trên 30 triệu"],
        locations: ["TP.HCM", "Hà Nội", "Đà Nẵng"],
        branches: ["Chi nhánh 1", "Chi nhánh 2", "Chi nhánh 3"]
      });
    }, 2000); // 2 seconds delay
  });

  
}


export default async function LoanRegistrationPage() {
  const options = await getOptions();

  console.log("Options rendering on Backend: ", options);


  return <LoanForm options={options} />;
}
