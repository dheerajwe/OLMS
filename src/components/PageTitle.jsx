function PageTitle({ title, breadcrumb, onHomeClick }) {
  const handleHomeClick = (event) => {
    event.preventDefault(); 
    if (onHomeClick) {
      onHomeClick(); 
    }
  };

  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" onClick={handleHomeClick}>Home</a>
          </li>
          <li className="breadcrumb-item active">{breadcrumb}</li>
        </ol>
      </nav>
    </div>
  );
}

export default PageTitle;
