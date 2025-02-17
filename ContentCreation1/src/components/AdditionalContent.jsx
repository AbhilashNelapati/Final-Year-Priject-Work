import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdditionalContent() {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([{ title: '', content: '' }]);

  const handleAddMaterial = () => {
    setMaterials([...materials, { title: '', content: '' }]);
  };

  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/assignments');
  };

  return (
    <div className="bg-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Additional Content</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {materials.map((material, index) => (
          <div key={index} className="space-y-4 p-4 border border-gray-200 rounded-lg">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Material Title
              </label>
              <input
                type="text"
                value={material.title}
                onChange={(e) => handleMaterialChange(index, 'title', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Content
              </label>
              <textarea
                value={material.content}
                onChange={(e) => handleMaterialChange(index, 'content', e.target.value)}
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddMaterial}
          className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Add More Material
        </button>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default AdditionalContent;