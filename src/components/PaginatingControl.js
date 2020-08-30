function PaginatingControl({ page, LimitControl, DataControl, setPage }) {
    const Length = page * LimitControl;
    const Post = Length - LimitControl;
    const ContextView = DataControl.fetchData.slice(Post, Length);
    const paginate = (index) => setPage(index);
    return { ContextView, paginate };
}

export default PaginatingControl;
