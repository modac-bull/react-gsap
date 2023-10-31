import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';

export default function HomePage() {
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
