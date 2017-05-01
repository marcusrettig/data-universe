module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import'
  ],
  'env': {
    'browser': true,
  },
  'settings': {
    'import/resolver': 'webpack',
  },
  'rules': {
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    'brace-style': ['error', 'stroustrup'],
  },
};
