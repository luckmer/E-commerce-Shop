function PaginatingControl({ page, LimitControl, filteredData, setPage }) {
    const Length = page * LimitControl;
    const Post = Length - LimitControl;
    const ContextView = filteredData.slice(Post, Length);
    const paginate = (index) => setPage(index);
    return { ContextView, paginate };
}

export default PaginatingControl;
