function CollectionStatCard({ title, count }) {
  return (
    <div className="card w-100 h-100">
      <div className="card-body">
        <div className="card-title countHeader">
          <h4>{title}</h4>
        </div>
        <div className="count">{count}</div>
      </div>
    </div>
  );
}

export default CollectionStatCard;
