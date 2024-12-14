import SectionForm from './SectionForm.jsx';

function Education() {
  const fields = [
    { name: 'schoolName', type: 'text', label: 'School name' },
    { name: 'studyTitle', type: 'text', label: 'Study title' },
    { name: 'fromDate', type: 'month', label: 'From date' },
    { name: 'untilDate', type: 'month', label: 'Until date' },
  ];

  return (
    <>
      <h2 className="section-title">Education</h2>
      <SectionForm fields={fields} />
    </>
  );
}

export default Education;
