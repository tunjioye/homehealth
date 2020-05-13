const InputRadioGroup = ({question, options, name, value, onInputChange, required}) => (
  <div className="input-group">
    <label htmlFor={name}>{question}</label>
    {
      options.map((option, optionIndex) => {
        const {key, label} = option
        return (
          <label className="input-radio" key={optionIndex}>
            <input type="radio" name={name} value={key} checked={value === key} onChange={onInputChange} required={!!required}/>
            <span>{label}</span>
          </label>
        )
      })
    }
  </div>
)

export default InputRadioGroup
