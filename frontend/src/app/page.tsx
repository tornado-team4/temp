'use client';

import { Link } from '@chakra-ui/next-js';
import { Avatar } from '@/components/Toppage';

export default function Home() {
  return (
    <>
      <Link href="/" color="blue" _hover={{ color: 'blue.500' }}>
        aaaa
      </Link>
      <Avatar />
    </>
  );
}
