import "./ExpenseFilter.css";
const ExpenseFilter = ({ selected, onChangeFilter }) => {
  const filterChange = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenseFilter">
      <label>
        <select value={selected} onChange={filterChange}>
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </label>
    </div>
  );
};

export default ExpenseFilter;
