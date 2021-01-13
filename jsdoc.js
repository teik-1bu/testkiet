const pkg = require('./package.json');
const IS_PROD = process.env.NODE_ENV === 'production';
console.log(IS_PROD)
module.exports = {
  tags: {
    allowUnknownTags: 'category'
  },
  source: {
    include: ['./src'],
    includePattern: '\\.(jsx|js|ts|tsx)$',
    excludePattern: '(node_modules/|docs)'
  },
  plugins: [
    'plugins/markdown',
    'node_modules/kida-docs/category',
    'node_modules/kida-docs/component',
    'node_modules/kida-docs/typescript'
  ],
  opts: {
    template: 'node_modules/kida-docs',
    encoding: 'utf8',
    destination: './docs',
    recurse: true,
    verbose: true
  },
  templates: {
    'better-docs': {
      name: 'Documentation',
      logo: '/images/logo.png',
      version: 'v1.0.0',
      head: IS_PROD ? `<script src="https://h5.zdn.vn/jssdk/${pkg.version}/lib.js?t="></script>` : `<script src="./dist/lib.js?t="></script>`
    },
    search: true
  }
};
