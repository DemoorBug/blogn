// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'blogn' // 例如：my-next-app

module.exports = {
  output: 'export', // 启用静态导出
  basePath: isProd ? `/${repoName}` : '', // 生产环境路径前缀
  assetPrefix: isProd ? `/${repoName}/` : '', // 资源路径前缀
}