import { useEffect } from "react";
function FilterEffect(content, search, setFilteredData) {
    useEffect(() => {
        const filter = content.filter((state) => {
            return state.name
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
        });
        setFilteredData(filter);
    }, [search, content, setFilteredData]);
}
export default FilterEffect;
