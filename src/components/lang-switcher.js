import './styles/lang-switcher.scss'

const LangSwitcher = ({ name, value, onChange }) => {
  return (
    <div className="lang-switcher input-group width-fit-content">
      <select className="input-select" name={name} value={value} onChange={onChange}>
        <option value="ENGLISH">ENGLISH</option>
        <option value="YORUBA">YORUBA</option>
        <option value="HAUSA">HAUSA</option>
        <option value="IGBO">IGBO</option>
      </select>
    </div>
  )
}

export default LangSwitcher
