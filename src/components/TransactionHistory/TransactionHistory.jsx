import { TransactionTable } from './TransactionHistory.styled';
import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionHistoryItems';

export const TransactionsHistory = ({ items }) => {
    return <TransactionTable>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
    {items.map(({id,type,amount,currency}) => 
        <TransactionItem key={id} type={type} amount={amount} currency={currency} >
        </TransactionItem> ) }
    </tbody>
    </TransactionTable>
}
TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}
