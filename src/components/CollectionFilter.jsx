function CollectionFilter({
  label,
  value,
  onChange,
  options,
  defaultLabel,
  isDecade,
}) {
  return (
    <div className="col-md-4">
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{defaultLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {isDecade ? `${option}s` : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CollectionFilter;
