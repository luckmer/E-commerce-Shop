import { useEffect } from "react";
import { useSelector } from "react-redux";

function FilterEffect(search, setFilteredData) {

    const state = useSelector(state => state.Context.fetchData)
    
    useEffect(() =>{
        let filterS = state.slice();

        if (search.filterInput) {
            filterS = filterS.filter((item) =>
                item.name
                    .toLowerCase()
                    .includes(
                        search.filterInput
                            .toLowerCase()
                            .trim()
                    ),
            );
        }

        if (search.filterMark) {
            filterS = filterS.filter((item) =>
                item.type
                    .toLowerCase()
                    .includes(
                        search.filterMark
                            .toLowerCase()
                            .trim()
                    )
            );
        }
        
        if (search.filterPrice) {
            filterS = filterS.filter((item) =>
                item.price
                    .toString()
                    .includes(
                        search.filterPrice
                            .toString()
                            .trim()
                    )
            );
        }

        setFilteredData(filterS);
    }, [
        search.filterInput,
        search.filterMark,
        search.filterPrice,
        setFilteredData,
        search,
        state,
    ]);
}
export default FilterEffect;
