'use client';
import { useBreakpointValue } from '@chakra-ui/react';
import { TopPage } from './components/TopPage';
import { Mobile } from '@/app/top/components/Mobile';

export default function Top() {
  const mediaType = useBreakpointValue({ base: 'phone', md: 'pc' });

  return mediaType === 'pc' ? <TopPage roomId="" /> : <Mobile />;
}
