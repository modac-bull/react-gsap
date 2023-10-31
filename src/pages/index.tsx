import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MutableRefObject, useLayoutEffect, useRef } from 'react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';

export default function HomePage() {
  /* 
    GSAP 애니메이션 사전 작업
    - ref 설정
    - useLayoutEffect 에서 호출
    - (!! 단점 ) 요소가 많아지면 반복 작업해야 하는 이슈 있음
  */
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef) return;
    gsap.to(boxRef.current, { x: 300, rotation: '180deg' });
  }, []);

  return (
    <>
      <HeadPageMeta title="React 애니메이션 라이브러리 리서치" />

      <LayoutDefault>
        <Section>
          {/* Framer Motion - 기본 애니메이션 적용 구문 */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 100, y: 100 }}
            transition={{ duration: 1.5 }}
          >
            <Box />
          </motion.div>

          {/* GSAP */}
          <Box ref={boxRef} />
        </Section>

        {/* Framer Motion - Scroll-trigger 애니메이션 */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 100, y: 100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <Box />
        </motion.div>
      </LayoutDefault>
    </>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: black;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: gold;
`;
