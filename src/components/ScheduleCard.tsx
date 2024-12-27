import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

interface ScheduleProps {
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
}

export function ScheduleCard({ title, date, time, location, organizer }: ScheduleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <User className="w-5 h-5 mr-2" />
          <span>{organizer}</span>
        </div>
      </div>
    </div>
  );
}