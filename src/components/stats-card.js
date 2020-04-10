import './styles/stats-card.scss'

const StatsCard = ({value, title, classNames}) => (
  <div className={`stats-card${classNames ? ` ${classNames}` : ``}`}>
    <div className="stats-card-value">{value}</div>
    <div className="stats-card-title">{title}</div>
  </div>
)

export default StatsCard
