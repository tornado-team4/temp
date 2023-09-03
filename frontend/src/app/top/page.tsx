'use client';
import { useBreakpointValue } from '@chakra-ui/react';

import { Mobile } from '@/app/top/components/Mobile';
import { TopPage } from '@/app/top/components/TopPage';

export default function Top() {
  const mediaType = useBreakpointValue({ base: 'phone', md: 'pc' });

  return mediaType === 'pc' ? <TopPage roomId="" /> : <Mobile />;
}
