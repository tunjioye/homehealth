import Link from 'next/link'
import './styles/list-item.scss'

const ListItem = ({title, desc, href, hash}) => (
  <Link href={`${href || ``}` + `${hash ? `#${hash}` : ``}`}>
    <a href={`${href || ``}` + `${hash ? `#${hash}` : ``}`} className="list-item">
      <span className="list-item-title">{title || 'Infromation or Service Title'}</span>
      <span className="list-item-desc">{desc || 'Infromation or Service Description'}</span>
    </a>
  </Link>
)

export default ListItem
