import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { InvoicesPage } from './pages/invoices/InvoicesPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ProjectDetail } from './pages/projects/ProjectDetail';
import { ClientsPage } from './pages/clients/ClientsPage';
import { ReportsPage } from './pages/reports/ReportsPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { HelpPage } from './pages/help/HelpPage';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function LandingPage() {
  return (
    <div>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <DashboardOverview />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/projects"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ProjectsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/projects/:id"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ProjectDetail />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/invoices"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <InvoicesPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/clients"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ClientsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/reports"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ReportsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <SettingsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/help"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <HelpPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" replace /> : <LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;