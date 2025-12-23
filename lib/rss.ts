// lib/rss.ts or utils/rss.ts
import Parser from 'rss-parser';

interface MediumPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string | null;
  author: string;
  content: string;
}

// Helper to extract image from content
function extractImageFromContent(content: string): string | null {
  if (!content) return null;
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

// Helper to create slug from title or link
function createSlug(title: string, link: string): string {
  // Try to get slug from the Medium URL
  const urlParts = link.split('/');
  const lastPart = urlParts[urlParts.length - 1];
  
  // Medium URLs often end with slug-hash format
  if (lastPart && lastPart.length > 0) {
    return lastPart.split('?')[0]; // Remove query params
  }
  
  // Fallback: create slug from title
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper to clean HTML content and get excerpt
function getExcerpt(content: string, maxLength: number = 200): string {
  if (!content) return '';
  
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, ' ');
  // Clean up whitespace
  const cleaned = text.replace(/\s+/g, ' ').trim();
  
  if (cleaned.length <= maxLength) return cleaned;
  
  return cleaned.substring(0, maxLength).trim() + '...';
}

export async function getBlogPosts(): Promise<MediumPost[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'contentEncoded'],
          ['dc:creator', 'creator']
        ]
      }
    });

    const feed = await parser.parseURL('https://medium.com/feed/@niyi.py');
    
    console.log('Feed fetched:', feed.title);
    console.log('Total items:', feed.items?.length || 0);
    
    if (!feed.items || feed.items.length === 0) {
      console.log('No items found in feed');
      return [];
    }

    return feed.items.map((item, index) => {
      const link = item.link || '';
      const content = item.contentEncoded || item.content || '';
      const slug = createSlug(item.title || '', link);
      
      console.log(`Post ${index + 1}:`, {
        title: item.title,
        slug: slug,
        link: link
      });

      return {
        id: item.guid || `post-${index}`,
        title: item.title || 'Untitled',
        slug: slug,
        description: item.contentSnippet || getExcerpt(content),
        link: link,
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        categories: item.categories || [],
        thumbnail: item.enclosure?.url || extractImageFromContent(content),
        author: item.creator || 'Niyi',
        content: content
      };
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<MediumPost | null> {
  try {
    const posts = await getBlogPosts();
    
    console.log('Looking for slug:', slug);
    console.log('Available slugs:', posts.map(p => p.slug));
    
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      console.log('Post not found for slug:', slug);
      return null;
    }
    
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}