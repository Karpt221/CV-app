import { useState } from 'react';

function SectionForm({ fields }) {
  const [mode, setMode] = useState('edit');
  const initialCV = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});
  const [cv, setCV] = useState(initialCV);
  function handleSumbit(event) {
    event.preventDefault();
    if (mode === 'edit') {
      const formData = new FormData(event.target);

      const nextCV = {};
      const validKeys = Object.keys(initialCV);
      for (const [key, value] of formData.entries()) {
        if (validKeys.includes(key)) {
          nextCV[key] = value;
        } else {
          throw new Error('Key' + key + ' is invalid!');
        }
      }
      setCV(nextCV);
    }
    setMode(mode === 'edit' ? 'watch' : 'edit');
  }
  return (
    <form onSubmit={handleSumbit} className="section-form" action="">
      {fields.map(({ name, type, label }) => (
        <label
          className={type === 'textarea' ? 'textarea-label' : ''}
          key={name}
          htmlFor={name}
        >
          <div className="input-title">{label}</div>
          {mode === 'edit' ? (
            type === 'textarea' ? (
              <textarea
                defaultValue={cv[name]}
                name={name}
                id={name}
                cols="30"
                rows="10"
              ></textarea>
            ) : (
              <input
                defaultValue={cv[name]}
                type={type}
                name={name}
                id={name}
              />
            )
          ) : (
            <div className='watch-div'>
              {cv[name]}
            </div>
          )}
        </label>
      ))}
      <button className="form-btn" type="submit">
        {mode === 'edit' ? 'Submit' : 'Edit'}
      </button>
    </form>
  );
}

export default SectionForm;
