function FilterBar({
  technologies,
  selectedTechnology,
  onTechnologyChange
}) {
  const filters = ['All', ...technologies];

  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {filters.map((technology) => (
        <button
          key={technology}
          type="button"
          className={
            selectedTechnology === technology
              ? 'filter-button active'
              : 'filter-button'
          }
          aria-pressed={selectedTechnology === technology}
          onClick={() => onTechnologyChange(technology)}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
