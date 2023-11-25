const Label: React.FC<{ label?: string }> = ({ label }) => (
  label && <label className="block text-sm font-medium text-gray-700">{ label }</label>
)

export default Label