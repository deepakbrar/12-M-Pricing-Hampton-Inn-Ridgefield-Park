
import React, { useState, useCallback } from 'react';
import { calculateTotalCost } from './services/pricingService';
import type { CalculationResult, Rate } from './types';
import { CalendarIcon, UsersIcon, InfoIcon } from './components/icons';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const InputField: React.FC<{ id: string; label: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; icon: React.ReactNode; min?: string }> = ({ id, label, type, value, onChange, icon, min }) => (
  <div className="relative">
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        className="block w-full rounded-md border-slate-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
      />
    </div>
  </div>
);

const ResultsDisplay: React.FC<{ result: CalculationResult }> = ({ result }) => {
  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-slate-200 animate-fade-in">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">Quote Summary</h3>
      
      {result.isDiscuss && (
        <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-r-lg flex items-start">
          <InfoIcon className="h-5 w-5 mr-3 mt-0.5 text-yellow-500"/>
          <div>
            <h4 className="font-bold">Manual Quote Required</h4>
            <p className="text-sm">Some or all of the selected dates fall into a 'discuss' pricing tier for the requested number of rooms. Please contact us for a custom quote.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-slate-500">Total Nights</p>
          <p className="text-2xl font-bold text-slate-900">{result.totalNights}</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-slate-500">Avg. Rate / Night / Room</p>
          <p className="text-2xl font-bold text-indigo-600">{result.isDiscuss ? "N/A" : formatCurrency(result.averageRatePerNight)}</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-slate-500">Estimated Total</p>
          <p className="text-2xl font-bold text-indigo-600">{result.isDiscuss ? "Contact for price" : formatCurrency(result.totalCost)}</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium text-slate-700 mb-2">Rate Breakdown</h4>
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Month/Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Weekday Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Weekend Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"># Weekdays</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"># Weekend Days</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {Array.from(result.rateDetails.entries()).map(([key, detail]) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{key.replace('-', ' ')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{typeof detail.rate.weekday === 'number' ? formatCurrency(detail.rate.weekday) : <span className="font-semibold text-yellow-600">Discuss</span>}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{typeof detail.rate.weekend === 'number' ? formatCurrency(detail.rate.weekend) : <span className="font-semibold text-yellow-600">Discuss</span>}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{detail.weekdays}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{detail.weekendDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [startDate, setStartDate] = useState(formatDateForInput(today));
  const [endDate, setEndDate] = useState(formatDateForInput(tomorrow));
  const [rooms, setRooms] = useState('10');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleCalculate = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    // Simulate async calculation
    setTimeout(() => {
      const calcResult = calculateTotalCost(startDate, endDate, Number(rooms));
      if ('error' in calcResult) {
        setError(calcResult.error);
      } else {
        setResult(calcResult);
      }
      setIsLoading(false);
    }, 500);
  }, [startDate, endDate, rooms]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Hotel Rate Calculator</h1>
          <p className="mt-2 text-lg text-slate-600">Instantly get a price quote for your group booking.</p>
        </header>

        <main>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField 
                id="start-date"
                label="Check-in Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                icon={<CalendarIcon className="h-5 w-5 text-gray-400" />}
                min={formatDateForInput(new Date('2025-01-01'))}
              />
              <InputField 
                id="end-date"
                label="Check-out Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                icon={<CalendarIcon className="h-5 w-5 text-gray-400" />}
                min={startDate}
              />
              <InputField 
                id="rooms"
                label="Number of Rooms"
                type="number"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                icon={<UsersIcon className="h-5 w-5 text-gray-400" />}
                min="1"
              />
            </div>
            {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            <div className="mt-6">
              <button
                onClick={handleCalculate}
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? 'Calculating...' : 'Calculate Quote'}
              </button>
            </div>
          </div>
          
          {result && <ResultsDisplay result={result} />}
          
        </main>
      </div>
    </div>
  );
}
