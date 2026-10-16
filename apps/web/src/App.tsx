import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppShell } from '@/components/layout/AppShell';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Heavier pages are code-split.
const LearnPage = lazy(() => import('@/pages/LearnPage').then((m) => ({ default: m.LearnPage })));
const LessonPage = lazy(() => import('@/pages/LessonPage').then((m) => ({ default: m.LessonPage })));
const QuizPage = lazy(() => import('@/pages/QuizPage').then((m) => ({ default: m.QuizPage })));
const FlashcardsPage = lazy(() => import('@/pages/FlashcardsPage').then((m) => ({ default: m.FlashcardsPage })));
const DashboardPage = lazy(() => import('@/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const LoginPage = lazy(() => import('@/pages/AuthPage').then((m) => ({ default: () => <m.AuthPage mode="login" /> })));
const RegisterPage = lazy(() => import('@/pages/AuthPage').then((m) => ({ default: () => <m.AuthPage mode="register" /> })));

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'learn', element: <LearnPage /> },
      { path: 'learn/:slug', element: <LessonPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'flashcards', element: <FlashcardsPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
