import { FirebaseStorageContent } from './firebase/storage';
import { Article, BlogImage, BlogVideo, Section } from './styles/image.styles';

enum ContentType {
  MP4 = 'video/mp4',
}

const LazyImage = ({ content }: { content: FirebaseStorageContent }) => {
  console.log(content.metadata.cacheControl);
  if (content.metadata.contentType === ContentType.MP4) {
    return (
      <Article>
        <Section>
          <BlogVideo loop autoPlay playsInline muted>
            <source
              src={content.downloadUrl}
              type={content.metadata.contentType}
            />
            <meta itemProp="name" content={content.metadata.name}></meta>
          </BlogVideo>
        </Section>
      </Article>
    );
  }

  return (
    <Article>
      <Section>
        <BlogImage src={content.downloadUrl} alt={content.metadata.name} />
      </Section>
    </Article>
  );
};

export default LazyImage;
