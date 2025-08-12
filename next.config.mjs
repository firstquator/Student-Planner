/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // webpack 경고 억제 및 최적화
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // webpack 캐시 경고 억제
      config.infrastructureLogging = {
        level: 'error',
      }
      
      // 메모리 최적화
      config.cache = {
        ...config.cache,
        maxMemoryGenerations: 1,
      }
    }

    return config
  },
  // 개발 환경 성능 최적화
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // 컴파일 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 로깅 레벨 조정
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
}

export default nextConfig