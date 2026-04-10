/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'sora-regular': ['Sora'],
        'sora-medium': ['Sora_Medium'],
        'sora-semibold': ['Sora_SemiBold'],
        'sora-bold': ['Sora_Bold'],

        'inter-regular': ['Inter'],
        'inter-medium': ['Inter_Medium'],
        'inter-semibold': ['Inter_SemiBold'],
        'inter-bold': ['Inter_Bold'],
      },
    },
  },
  plugins: [],
};
