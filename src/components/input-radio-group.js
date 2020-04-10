const InputRadioGroup = ({question, options, name, value, onInputChange, required}) => (
  <div className="input-group">
    <label htmlFor={name}>{question}</label>
    {
      options.map((option, optionIndex) => (
        <label className="input-radio" key={optionIndex}>
          <input type="radio" name={name} value={option} checked={value[0] === option[0]} onChange={onInputChange} required={!!required}/>
          <span>{option}</span>
        </label>
      ))
    }
  </div>
)

export default InputRadioGroup
