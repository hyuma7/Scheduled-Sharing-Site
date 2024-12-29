import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ScheduleCard } from './components/ScheduleCard';
import { NewScheduleForm } from './components/NewScheduleForm';

interface Schedule {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
}

function App() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: 1,
      title: '週次ミーティング',
      date: '2024-03-20',
      time: '14:00',
      location: '会議室A',
      organizer: '田中太郎'
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddSchedule = (data: Omit<Schedule, 'id'>) => {
    setSchedules(prev => [...prev, { ...data, id: prev.length + 1 }]);
    setShowForm(false);
  };

  // 環境変数をコンソールに表示
  console.log('Current Environment:', process.env.REACT_APP_ENV);
  console.log('Current Environment2:', process.env.REACT_APP_ENV2);
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <CalendarIcon className="h-8 w-8 text-indigo-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">予定共有サイト</h1>
              </div>
              {process.env.REACT_APP_ENV && (
                <span className="text-sm text-gray-500 mt-1">
                  環境: {process.env.REACT_APP_ENV}
                </span>
              )}
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              {showForm ? '閉じる' : '新しい予定を追加'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {showForm && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">新しい予定を追加</h2>
            <NewScheduleForm onSubmit={handleAddSchedule} />
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schedules.map(schedule => (
            <ScheduleCard key={schedule.id} {...schedule} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;