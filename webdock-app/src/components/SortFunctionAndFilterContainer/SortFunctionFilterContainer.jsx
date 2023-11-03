import '../SortFunctionAndFilterContainer/SortFunctionFilterContainer.scss';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import SortFunction from './SortFunction/SortFunction';'./SortFunction/SortFunction.jsx'

export default function SortFunctionAndFilterContainer() {
    return (
        <div className="sort-function-and-filter-container">
            <SortFunction/>
            <CategoryFilter />
            <SortFunction />   
        </div>
    )
}