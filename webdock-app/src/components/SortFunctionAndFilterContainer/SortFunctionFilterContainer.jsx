import '../SortFunctionAndFilterContainer/SortFunctionFilterContainer.scss';
import SortFunction from './SortFunction/SortFunction';'./SortFunction/SortFunction.jsx'

export default function SortFunctionAndFilterContainer() {
    return (
        <div className="sort-function-and-filter-container">
            <SortFunction/>
            <SortFunction />
            <SortFunction />   
        </div>
    )
}