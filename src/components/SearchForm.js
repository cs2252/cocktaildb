import React from "react";

export default function SearchForm({searchTerm,setSearchTerm}) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return <section className="section">
    <h2 className="section-title">Search Cocktails</h2>
        <div className="form-control form search-form">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={e=>setSearchTerm(e.target.value)}
          />
        </div>
     
  </section>
}

