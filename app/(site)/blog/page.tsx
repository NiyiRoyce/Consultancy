import React from 'react';
import { Calendar, ExternalLink, Clock } from 'lucide-react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/rss';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getBlogPosts();
    console.log(`✅ Blog page loaded ${posts.length} posts`);
    
    // Debug: Log first post to verify title extraction
    if (posts.length > 0) {
      console.log('First post preview:', {
        title: posts[0].title,
        slug: posts[0].slug,
        link: posts[0].link
      });
    }
  } catch (e) {
    console.error('❌ Failed to load posts:', e);
    error = e instanceof Error ? e.message : 'Failed to load blog posts';
    posts = [];
  }

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              Writing
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            Blog
          </h1>
          <p className="text-gray-500 text-base font-light max-w-2xl leading-relaxed">
            Technical articles, tutorials, and thoughts on software engineering, distributed systems, and building scalable applications.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-12 p-6 border border-red-900 bg-red-950/20 text-red-400 rounded-2xl">
            <p className="text-sm font-semibold mb-2">Failed to load blog posts</p>
            <p className="text-xs text-red-500">{error}</p>
            <p className="text-xs mt-3 text-red-400">
              Check that the Medium RSS feed is accessible at: 
              <a 
                href="https://medium.com/feed/@niyi.py" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                https://medium.com/feed/@niyi.py
              </a>
            </p>
          </div>
        )}

        {/* No Posts Message */}
        {!error && posts.length === 0 && (
          <div className="mb-12 p-12 border border-gray-800 text-center rounded-2xl">
            <p className="text-gray-400 mb-4">No blog posts found.</p>
            <p className="text-sm text-gray-600">
              Make sure your Medium RSS feed is accessible and contains posts.
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-10 h-full flex flex-col transition-all duration-500 relative hover:bg-white hover:border-gray-900 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                
                {/* Topic Header */}
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium group-hover:text-gray-600 transition-colors duration-300">
                    {post.categories && post.categories.length > 0 ? post.categories[0] : 'Article'}
                  </span>
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold tracking-tight !text-black transition-colors duration-300 line-clamp-2">
                      {post.title || 'Untitled Post'}
                    </h2>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>

                {/* Description */}
                {post.description && (
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow font-light line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                    {post.description}
                  </p>
                )}

                {/* Additional Categories */}
                {post.categories && post.categories.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.slice(1, 4).map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-medium rounded transition-colors duration-300 group-hover:bg-gray-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-6 border-t border-gray-200 mt-auto group-hover:border-gray-300 transition-colors duration-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 group-hover:text-gray-700 transition-colors duration-300" />
                    <span className="font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {new Date(post.pubDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 group-hover:text-gray-700 transition-colors duration-300" />
                    <span className="font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">5 min read</span>
                  </div>
                </div>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-32 text-center border-t border-gray-900 pt-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              More on Medium
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Want to read more?
          </h2>
          <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Check out my Medium profile for additional articles, tutorials, and technical deep dives.
          </p>
          <a
            href="https://medium.com/@niyi.py"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Visit Medium Profile
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}