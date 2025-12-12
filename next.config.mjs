import withMDX from '@next/mdx'

const mdx = withMDX({ extension: /\.mdx?$/ })

/** @type {import('next').NextConfig} */
const nextConfig = mdx({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
})

export default nextConfig
