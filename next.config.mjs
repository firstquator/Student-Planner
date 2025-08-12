import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App Router는 기본적으로 활성화됨 (Next.js 15에서는 appDir 설정 불필요)
  },
  // 이미지 최적화 설정
  images: {
    domains: ['localhost'],
  },
  // Webpack 캐시 최적화 설정
  webpack: (config, { dev, isServer }) => {
    // 개발 환경에서 캐시 성능 최적화
    if (dev) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: join(__dirname, '.next/cache/webpack'),
        // 큰 문자열 직렬화 성능 개선
        store: 'pack',
        version: '1.0.0',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        compression: 'brotli', // 압축 사용
      }
      
      // 큰 모듈에 대한 캐시 최적화
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      }
    }
    
    return config
  },
}

export default nextConfig