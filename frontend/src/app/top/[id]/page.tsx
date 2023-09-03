'use client';

import { usePathname } from 'next/navigation';

import { TopPage } from '../components/TopPage';

export default function TopId() {
  const pathname = usePathname();
  const roomId = pathname.replace('/top/', '');

  return <TopPage roomId={roomId} />;
}
