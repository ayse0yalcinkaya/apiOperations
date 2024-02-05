function SearchHeader({ search }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search('can');
    }
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>What are you looking for?</label>
                <input type="text" />
            </form>
        </div>
    );
}

export default SearchHeader;