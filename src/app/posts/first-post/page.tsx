import Link from 'next/link';

export default function FirstPost() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/posts" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">First Blog Post</h1>
      <p className="text-gray-600 mb-6">Published on October 1, 2025</p>
      
      <div className="prose max-w-none">
        <p className="mb-4">Welcome to my first blog post! This is where you can share your thoughts, ideas, and experiences with the world.</p>
        
        <p className="mb-4">This blog post demonstrates the clean, minimalist design that focuses on content and readability. The layout is responsive and looks great on all devices.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Why Blogging Matters</h2>
        <p className="mb-4">Blogging allows you to connect with your audience, share knowledge, and establish yourself as an authority in your field.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Getting Started</h2>
        <p className="mb-4">Creating great content is just the beginning. You'll want to focus on SEO, engagement, and consistency to build a successful blog.</p>
      </div>
    </div>
  );
}