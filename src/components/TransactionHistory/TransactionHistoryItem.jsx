import css from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency}) => {
  return (
    <tr className={css.transactionTableValues}>
      <td className={css.transactionTableValuesSell}>{type}</td>
      <td className={css.transactionTableValuesSell}>{amount}</td>
      <td className={css.transactionTableValuesSell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;