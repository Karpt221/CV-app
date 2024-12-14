import SectionForm from './SectionForm.jsx';

function PracticalExperience() {
  const fields = [
    { name: 'companyName', type: 'text', label: 'Company name' },
    { name: 'positionTitle', type: 'text', label: 'Position title' },
    { name: 'responsibilities', type: 'textarea', label: 'Main responsibilities' },
    { name: 'dateFrom', type: 'date', label: 'Date from' },
    { name: 'dateUntil', type: 'date', label: 'Date until' },
  ];

  return (
    <>
      <h2 className="section-title">Practical experience</h2>
      <SectionForm fields={fields} />
    </>
  );
}

export default PracticalExperience;
