import { Article, Section, BlogImage } from './styles/image.styles';

const LazyImage = ({ src }: { src: string }) => (
  <Article>
    <Section>
      <BlogImage src={src} alt="blog post" />
    </Section>
  </Article>
);

export default LazyImage;
