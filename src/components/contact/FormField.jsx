import { Alert } from '../../assets/icons/index.jsx';

/**
 * One field, one contract: label, control, help text, error message.
 * Wires up aria-describedby / aria-invalid so errors are announced properly.
 *
 * @param {'text'|'email'|'tel'|'select'|'textarea'|'file'} type
 */
export default function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  help,
  required = false,
  optional = false,
  placeholder,
  autoComplete,
  rows = 6,
  options = [],
  accept,
  fileName,
  full = false,
  inputMode
}) {
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;
  const describedBy = [error ? errorId : '', help ? helpId : ''].filter(Boolean).join(' ') || undefined;

  const shared = {
    id,
    name,
    value: type === 'file' ? undefined : value,
    onChange,
    onBlur,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    placeholder
  };

  return (
    <div className={`field${error ? ' has-error' : ''}${full ? ' field--full' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? (
          <span className="field__req" aria-hidden="true">
            *
          </span>
        ) : null}
        {optional ? <span className="field__opt">Optional</span> : null}
      </label>

      {type === 'select' ? (
        <select className="select" autoComplete={autoComplete} {...shared}>
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea className="textarea" rows={rows} {...shared} />
      ) : type === 'file' ? (
        <div className="filedrop">
          <input
            id={id}
            name={name}
            type="file"
            accept={accept}
            onChange={onChange}
            aria-describedby={describedBy}
          />
          <span className="filedrop__label">Choose a file</span>
          <span className="filedrop__name">{fileName || 'No file selected'}</span>
        </div>
      ) : (
        <input
          className="input"
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          {...shared}
        />
      )}

      {help ? (
        <p className="field__help" id={helpId}>
          {help}
        </p>
      ) : null}

      <p className="field__error" id={errorId}>
        {error ? (
          <>
            <Alert size={14} />
            {error}
          </>
        ) : null}
      </p>
    </div>
  );
}
