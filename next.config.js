/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CONTENTFUL_SPACE_ID: "92c0k0dv5vva",
        CONTENTFUL_ACCESS_KEY: "XPHZk-4F77QzdA2AnsKPuvbJxHkT22I5U6_T4CUQzZk"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
