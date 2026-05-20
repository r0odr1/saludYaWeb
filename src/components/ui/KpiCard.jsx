const KpiCard = ({ number, label, color, icon }) => (
  <div className="kpi-card">
    {icon && <div className="kpi-card__icon">{icon}</div>}
    <div className="kpi-card__number" style={color ? { color } : {}}>
      {number}
    </div>
    <div className="kpi-card__label">{label}</div>
  </div>
);

export default KpiCard;
