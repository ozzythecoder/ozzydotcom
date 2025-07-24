import createMdx from '@next/mdx'

const withMdx = createMdx({
    extension: /\.mdx?$/,
})

const nextConfig = withMdx({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})

export default nextConfig;
