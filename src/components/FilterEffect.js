import { useEffect, useContext } from "react";
import { DataContext } from "../data/Data";

function FilterEffect(search, setFilteredData) {
    const { DataControl } = useContext(DataContext);

    useEffect(() => {
        let filterS = DataControl.fetchData.slice();

        if (search.filterInput) {
            filterS = filterS.filter((item) =>
                item.name
                    .toLowerCase()
                    .includes(search.filterInput.toLowerCase())
            );
        }
        if (search.filterMark) {
            filterS = filterS.filter((item) =>
                item.type
                    .toLowerCase()
                    .includes(search.filterMark.toLowerCase())
            );
        }
        if (search.filterPrice) {
            filterS = filterS.filter((item) =>
                item.price.toString().includes(search.filterPrice.toString())
            );
        }

        setFilteredData(filterS);
    }, [
        search.filterInput,
        DataControl.fetchData,
        search.filterMark,
        search.filterPrice,
        setFilteredData,
        search,
    ]);
}
export default FilterEffect;
