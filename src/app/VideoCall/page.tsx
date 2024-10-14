"use client"
import { Calendar, Focus, Plus, Settings, User } from 'lucide-react';
import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  actions: string[];
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  // State to manage the selected item
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Dummy data for the list in the first column
  const items: Item[] = [
    { id: 1, name: 'Dashboard', icon: <Focus />, description: 'Details for Item One', actions: ['Action 1', 'Action 2'] },
    { id: 2, name: 'My Appointments', icon: <Calendar />, description: 'Details for Item Two', actions: ['Action 3', 'Action 4'] },
    { id: 3, name: 'My patients', icon: <User />, description: 'Details for Item Three', actions: ['Action 5', 'Action 6'] },
     { id: 3, name: 'Create New Patient', icon: <Plus />, description: 'Details for Item Three', actions: ['Action 5', 'Action 6'] },
         { id: 3, name: 'Settings', icon: <Settings />, description: 'Details for Item Three', actions: ['Action 5', 'Action 6'] },



  ];

  // Handle item selection from Column 1
  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: List of Items */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className='flex justify-center text-2xl font-bold p-10'>Health Node</h1>
            <div className='w-[355px] h-[80px] bg-[#6A3CB9] p-2 rounded-md text-white'><h1>Reason for visit : general health check up
            and lab report review and consultation.</h1></div>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className={`p-2 mb-2 text-black cursor-pointer rounded ${
                  selectedItem?.id === item.id ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className='flex gap-3'>
                {item.icon}
                {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Item Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Item Details</h2>
          {selectedItem ? (
            // <div>
            //   <h3 className="text-lg text-black font-semibold">{selectedItem.name}</h3>
            //   <p className="mt-2 text-black">{selectedItem.description}</p>
            // </div>
            <>            <div>
              <img src='/vid.svg' height={450} width={620} alt='' />
            </div>
            <div>
                <div>
                  <div className='flex gap-2'>
                    <img src='/lab.svg' height={34.66} width={34.66} alt='lab' className='bg-[#6A3CB9] rounded-full' />
                    <div className='items-center'>
                      <h1 className='text-sm font-bold'>Lab Test</h1>
                      <p className='text-xs text-gray-700'>2 scheduled tests</p>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                    <h1 className='text-xs'>Full Blood</h1>
                    <h1 className='text-xl font-bold'>Test</h1>
                    </div>
                    <div><img src='Mail.svg' height={30.33} width={21.66} alt='mail'/></div>
                    </div>
                    <div className='flex justify-between'>
                    <div>
                    <h1 className='text-xs'>NCCT Brain</h1>
                    <h1 className='text-xl font-bold'>Test</h1>
                    </div>
                    <div><img src='Mail.svg' height={30.33} width={21.66} alt='mail'/></div>
                    </div>
                  <div></div>
                  <div></div>
                </div>
                <div>

                </div>
            </div>
            </>

          ) : (
            ("")
          )}
        </div>

        {/* Column 3: Related Actions */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          {/* <h2 className="text-xl font-semibold mb-4 text-black">Related Actions</h2>
          {selectedItem ? (
            <ul>
              {selectedItem.actions.map((action, index) => (
                <li key={index} className="p-2 mb-2 bg-white rounded">
                  {action}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black">Select an item to see related actions</p>
          )} */}
          <div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
