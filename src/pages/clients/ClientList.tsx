import React, { useState } from 'react';
import { Building2, Phone, Mail, Plus, Search } from 'lucide-react';

// Mock data - would come from API/database in production
const clients = [
  {
    id: '1',
    name: 'Acme Construction',
    type: 'General Contractor',
    contact: 'John Smith',
    email: 'john@acme.com',
    phone: '(555) 123-4567',
    activeProjects: 3,
    totalValue: 1250000,
  },
  {
    id: '2',
    name: 'BuildRight Inc',
    type: 'Subcontractor',
    contact: 'Sarah Johnson',
    email: 'sarah@buildright.com',
    phone: '(555) 234-5678',
    activeProjects: 2,
    totalValue: 750000,
  },
];

export function ClientList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-xl font-semibold text-gray-900">Clients</h2>
            <p className="mt-2 text-sm text-gray-700">
              A list of all clients and their key information.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </button>
          </div>
        </div>

        <div className="mt-4 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 overflow-hidden border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <li key={client.id} className="py-5 hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {client.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{client.type}</p>
                    <div className="mt-1 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 mr-1" />
                        {client.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="h-4 w-4 mr-1" />
                        {client.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-sm text-gray-500">
                    <span>{client.activeProjects} Active Projects</span>
                    <span className="font-medium text-gray-900">
                      ${client.totalValue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}