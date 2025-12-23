import React from 'react';
import { Calendar, ArrowLeft, ExternalLink, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { getBlogPost } from '@/lib/rss'; // Adjust path as needed

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">
            The blog post you're looking for doesn't exist or couldn't be loaded.
          </p>
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-100 transition-all"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Back Navigation */}
      <div className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-16">
          {/* Topic Header */}
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              {post.categories && post.categories.length > 0 ? post.categories[0] : 'Article'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
              {post.description}
            </p>
          )}
        </div>

        {/* Meta Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-900 mb-16">
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase font-medium">Published</span>
            </div>
            <div className="text-sm font-medium text-gray-400">
              {new Date(post.pubDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
          
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase font-medium">Read Time</span>
            </div>
            <div className="text-2xl font-semibold">5 min</div>
          </div>
          
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Tag className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase font-medium">Topics</span>
            </div>
            <div className="text-2xl font-semibold">{post.categories.length}</div>
          </div>
          
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <span className="text-xs tracking-wider uppercase font-medium">Author</span>
            </div>
            <div className="text-xl font-semibold">{post.author}</div>
          </div>
        </div>

        {/* Categories/Tags */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.3em] uppercase text-gray-600 font-medium mb-6">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-gray-800 text-gray-400 text-sm font-light hover:border-gray-600 hover:text-white transition-all"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content Preview Card */}
        <div className="bg-white text-black p-8 mb-16">
          <h3 className="text-sm tracking-[0.2em] uppercase font-medium mb-6 text-gray-900">
            Read Full Article
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
            This article was originally published on Medium. Click the button below to read the full article with all images, code examples, and interactive content.
          </p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all group"
          >
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Read on Medium</span>
          </a>
        </div>

        {/* Author Info Card */}
        <div className="bg-white text-black p-8 mb-16">
          <h3 className="text-sm tracking-[0.2em] uppercase font-medium mb-6 text-gray-900">
            About the Author
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            <strong className="text-black">{post.author}</strong> writes about software engineering, distributed systems, and building scalable applications. Follow for more technical articles and tutorials.
          </p>
        </div>

        {/* Call to Action */}
        <div className="border-t border-gray-900 pt-16 mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-semibold tracking-tight mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-gray-500 text-base font-light mb-8 max-w-xl mx-auto">
              Check out more articles on Medium or get in touch if you'd like to discuss these topics further.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                Read on Medium
              </a>
              <Link
                href="/blog"
                className="px-8 py-4 border border-gray-800 text-white text-sm font-medium tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}