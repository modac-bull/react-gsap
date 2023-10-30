import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';

export default function HomePage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts)" />

      <LayoutDefault>홈</LayoutDefault>
    </>
  );
}
