import { Content, ContentType } from './assets/blogImages';
import { Article, Section, BlogImage, BlogVideo } from './styles/image.styles';

const LazyImage = ({ content }: { content: Content }) => {
  if (content.contentType === ContentType.MP4) {
    return (
      <Article>
        <Section>
          <BlogVideo loop autoPlay playsInline muted>
            <source src={content.src} type={content.contentType} />
            <meta itemProp="name" content={content.alt}></meta>
          </BlogVideo>
        </Section>
      </Article>
    );
  }

  return (
    <Article>
      <Section>
        <BlogImage src={content.src} alt={content.alt} />
      </Section>
    </Article>
  );
};

export default LazyImage;
