import React from 'react';
import { Calendar, ExternalLink, Clock } from 'lucide-react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/rss'; // Adjust path as needed

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  let posts;
  let error = null;

  try {
    posts = await getBlogPosts();
    console.log('Posts loaded:', posts.length);
  } catch (e) {
    console.error('Failed to load posts:', e);
    error = 'Failed to load blog posts';
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
          <div className="mb-12 p-6 border border-red-900 bg-red-950/20 text-red-400">
            <p className="text-sm">{error}</p>
            <p className="text-xs mt-2 text-red-500">Check console for details</p>
          </div>
        )}

        {/* No Posts Message */}
        {!error && posts.length === 0 && (
          <div className="mb-12 p-12 border border-gray-800 text-center">
            <p className="text-gray-400 mb-4">No blog posts found.</p>
            <p className="text-sm text-gray-600">
              Make sure your Medium RSS feed is accessible at:{' '}
              <code className="text-gray-400">https://medium.com/feed/@niyi.py</code>
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
                className="group bg-white p-10 h-full flex flex-col transition-all duration-300 relative"
              >
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Topic Header */}
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-medium">
                    {post.categories && post.categories.length > 0 ? post.categories[0] : 'Article'}
                  </span>
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold tracking-tight text-black group-hover:opacity-70 transition-opacity duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>

                {/* Description */}
                {post.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow font-light line-clamp-3 group-hover:text-gray-500 transition-colors duration-300">
                    {post.description}
                  </p>
                )}

                {/* Additional Categories */}
                {post.categories && post.categories.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.slice(1, 4).map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium text-gray-700">
                      {new Date(post.pubDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium text-gray-700">5 min read</span>
                  </div>
                </div>

                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
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