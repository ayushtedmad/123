import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DocPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Fetch documentation content based on the slug
      const fetchContent = async () => {
        const response = await fetch(`/api/docs/${slug}`);
        const data = await response.json();
        setContent(data);
        setLoading(false);
      };

      fetchContent();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Documentation not found.</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </div>
  );
};

export default DocPage;