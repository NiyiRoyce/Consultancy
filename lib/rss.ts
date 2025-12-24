// lib/rss.ts
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

/**
 * Clean Medium titles
 * Medium RSS titles often contain newlines + preview text
 * Example: "The Real Power in Power Query\nIsn't Just Cleaning Data..."
 */
function cleanTitle(title: string): string {
  if (!title) return 'Untitled';
  
  // Handle multiple newline formats and trim whitespace
  // Split on any form of newline and take only the first part
  let cleanedTitle = title
    .split(/[\r\n]+/)[0]  // Split on \n, \r\n, \r, or multiple newlines
    .trim()
    .replace(/\s+/g, ' ');  // Normalize whitespace
  
  // Additional safety: remove any remaining literal \n strings
  cleanedTitle = cleanedTitle.replace(/\\n/g, ' ').trim();
  
  // Fallback if empty after cleaning
  return cleanedTitle || 'Untitled';
}

/**
 * Create a stable slug from the Medium URL (NOT the title)
 * Medium URLs look like: https://medium.com/@username/article-title-abc123def456
 * We want just: article-title
 */
function createSlug(link: string): string {
  try {
    const url = new URL(link);
    const parts = url.pathname.split('/').filter(Boolean);
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart) return '';
    
    // Remove query params and Medium's hash suffix
    return lastPart
      .split('?')[0]
      .replace(/-[a-f0-9]{10,}$/, '') // remove Medium hash (e.g., -abc123def456)
      .toLowerCase();
  } catch (error) {
    console.error('Error creating slug:', error);
    return '';
  }
}

/**
 * Extract first image from HTML content
 */
function extractImageFromContent(content: string): string | null {
  if (!content) return null;
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

/**
 * Strip HTML and create a readable excerpt
 */
function getExcerpt(content: string, maxLength: number = 200): string {
  if (!content) return '';
  
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, ' ');
  
  // Clean up whitespace
  const cleaned = text.replace(/\s+/g, ' ').trim();
  
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength).trim() + '...';
}

/**
 * Fetch and parse Medium RSS feed
 */
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
    
    if (!feed.items || feed.items.length === 0) {
      console.warn('No items found in Medium RSS feed');
      return [];
    }
    
    console.log(`✅ Loaded ${feed.items.length} posts from Medium`);
    
    const posts = feed.items.map((item, index) => {
      const link = item.link || '';
      const content = item.contentEncoded || item.content || '';
      const rawTitle = item.title || 'Untitled';
      const cleanedTitle = cleanTitle(rawTitle);
      
      // Debug logging for first post
      if (index === 0) {
        console.log('Sample post raw title:', rawTitle);
        console.log('Sample post cleaned title:', cleanedTitle);
        console.log('Sample post link:', link);
        console.log('Sample post slug:', createSlug(link));
      }
      
      // Warn about titles with newlines that weren't cleaned
      if (cleanedTitle.includes('\n')) {
        console.warn(`⚠️ Post ${index} still has newline in title:`, cleanedTitle);
      }
      
      return {
        id: item.guid || `post-${index}`,
        title: cleanedTitle,
        slug: createSlug(link),
        description: item.contentSnippet || getExcerpt(content),
        link,
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        categories: item.categories || [],
        thumbnail: item.enclosure?.url || extractImageFromContent(content),
        author: item.creator || 'Niyi',
        content
      };
    });
    
    // Final verification
    console.log('Sample titles after cleaning:', posts.slice(0, 3).map(p => p.title));
    
    return posts;
  } catch (error) {
    console.error('❌ Error fetching RSS feed:', error);
    throw error; // Re-throw to let the page component handle it
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<MediumPost | null> {
  try {
    const posts = await getBlogPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      console.warn(`Post not found for slug: ${slug}`);
      console.log('Available slugs:', posts.map(p => p.slug));
    }
    
    return post || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}