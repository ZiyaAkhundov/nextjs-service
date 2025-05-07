import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	reactStrictMode: false,
	distDir: process.env.BUILD_DIR || '.next',
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
		reactRemoveProperties: { properties: ['^data-testid$'] }
	},
	experimental: {
		scrollRestoration: true,
		optimizePackageImports: ['axios', 'ua-parser-js']
	}
}

export default withNextIntl(nextConfig)
