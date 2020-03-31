import Link from 'next/link'
import './styles/list-item.scss'

const ListItem = ({title, desc, link}) => (
  <Link href={link || ''}>
    <a href={link || ''} className="list-item">
      <span className="list-item-title">{title || 'Infromation or Service Title'}</span>
      <span className="list-item-desc">{desc || 'Infromation or Service Description'}</span>
    </a>
  </Link>
)

export default ListItem
