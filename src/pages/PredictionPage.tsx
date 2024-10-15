import { useState } from 'react';

interface Features {
  age: string;
  gender: string;
  tb: string;
  db: string;
  alkphos: string;
  sgpt: string;
  sgot: string;
  tp: string;
  alb: string;
  agRatio: string;
}

function PredictionPage() {
  const [features, setFeatures] = useState<Features>({
    age: '',
    gender: 'Male',
    tb: '',
    db: '',
    alkphos: '',
    sgpt: '',
    sgot: '',
    tp: '',
    alb: '',
    agRatio: '',
  });
  const [prediction, setPrediction] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeatures((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genderEncoded = features.gender === 'Female' ? 1 : 0;
    const featureArray = [
      Number(features.age),
      genderEncoded,
      Number(features.tb),
      Number(features.db),
      Number(features.alkphos),
      Number(features.sgpt),
      Number(features.sgot),
      Number(features.tp),
      Number(features.alb),
      Number(features.agRatio)
    ];
    
    try {
      const response = await fetch('http://localhost:3001/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: featureArray }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction(null);
    }
  };

  const inputClass = "w-full p-2 text-sm border border-gray-300 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-200";

  const getPredictionMessage = (pred: number | null) => {
    if (pred === null) return { message: "No prediction available", color: "text-gray-600" };
    
    switch(pred) {
      case 1:
        return { message: "Diseased", color: "text-red-600" };
      case 2:
        return { message: "Healthy", color: "text-green-600" };
      default:
        return { message: "Invalid prediction", color: "text-gray-600" };
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Liver Cirrhosis Prediction</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="number" name="age" value={features.age} onChange={handleChange} placeholder="Age" className={inputClass} required />
        <select name="gender" value={features.gender} onChange={handleChange} className={inputClass} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="number" name="tb" value={features.tb} onChange={handleChange} placeholder="Total Bilirubin" step="0.01" className={inputClass} required />
        <input type="number" name="db" value={features.db} onChange={handleChange} placeholder="Direct Bilirubin" step="0.01" className={inputClass} required />
        <input type="number" name="alkphos" value={features.alkphos} onChange={handleChange} placeholder="Alkaline Phosphatase" className={inputClass} required />
        <input type="number" name="sgpt" value={features.sgpt} onChange={handleChange} placeholder="SGPT" className={inputClass} required />
        <input type="number" name="sgot" value={features.sgot} onChange={handleChange} placeholder="SGOT" className={inputClass} required />
        <input type="number" name="tp" value={features.tp} onChange={handleChange} placeholder="Total Protein" step="0.01" className={inputClass} required />
        <input type="number" name="alb" value={features.alb} onChange={handleChange} placeholder="Albumin" step="0.01" className={inputClass} required />
        <input type="number" name="agRatio" value={features.agRatio} onChange={handleChange} placeholder="A/G Ratio" step="0.01" className={inputClass} required />
        <button type="submit" className="col-span-full bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300">
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div className="mt-6 text-center p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold mb-2">Prediction Result:</h3>
          <p className={`text-2xl font-bold ${getPredictionMessage(prediction).color}`}>
            {getPredictionMessage(prediction).message}
          </p>
        </div>
      )}
    </div>
  );
}

export default PredictionPage;
