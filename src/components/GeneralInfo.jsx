import SectionForm from './SectionForm.jsx';

function GeneralInfo() {
  const fields = [
    { name: 'fullName', type: 'text', label: 'Full Name' },
    { name: 'phone', type: 'tel', label: 'Phone' },
    { name: 'email', type: 'text', label: 'Email' },
  ];

  return (
    <>
      <h2 className="section-title">General Information</h2>
      <SectionForm fields={fields} />
    </>
  );
}

export default GeneralInfo;
