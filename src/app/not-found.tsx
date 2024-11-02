import { ErrorMessage } from '@/components/ErrorMessage';

export default function NotFound() {
  return <ErrorMessage />;
}

export const generateMetadata = () => {
  return {
    title: '404',
    description: 'Page not found',
    alternates: { canonical: '/404' },
  };
};
