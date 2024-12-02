import React from 'react';
import { TrendingUp, Download, AlertCircle } from 'lucide-react';
import { DrawProjectionsChart } from '../../components/charts/DrawProjectionsChart';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';

export function DrawProjections() {
  const projectData = [
    { month: 'Jan', estimated: 150000, actual: 145000 },
    { month: 'Feb', estimated: 180000, actual: 195000 },
    { month: 'Mar', estimated: 220000, actual: 205000 },
    { month: 'Apr', estimated: 250000, actual: 285000 },
    { month: 'May', estimated: 280000, actual: 260000 },
    { month: 'Jun', estimated: 310000 },
    { month: 'Jul', estimated: 340000 },
    { month: 'Aug', estimated: 360000 },
  ];

  const totalEstimated = projectData.reduce((sum, d) => sum + d.estimated, 0);
  const totalActual = projectData.reduce((sum, d) => sum + (d.actual || 0), 0);
  const completedMonths = projectData.filter(d => d.actual).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Draw Projections</h2>
            <p className="text-sm text-gray-500">Estimated vs actual payment requests</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center">
            <Download className="h-4 w-4 mr-1" />
            Export Data
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <DrawProjectionsChart data={projectData} />
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Estimated</p>
                <p className="text-xl font-semibold text-gray-900">
                  ${totalEstimated.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Total Actual ({completedMonths} months)</p>
                <p className="text-xl font-semibold text-gray-900">
                  ${totalActual.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center">
                {Math.abs(totalActual - totalEstimated) / totalEstimated > 0.1 && (
                  <div className="mr-2 flex items-center text-amber-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">High Variance</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-200 rounded mr-1" />
              <span>Estimated Draw</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-1" />
              <span>Actual (Under Budget)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-1" />
              <span>Actual (Over Budget)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}