module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended", 
    "airbnb", 
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    'airbnb-typescript', 
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname
  }, 
  plugins: ["react-refresh"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error", 
      {"devDependencies": ["**/*.test.tsx","**/*.spec.ts", "setup.ts", "playwright.config.ts"]}
    ],
    "react/require-default-props": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "tailwindcss/no-custom-classname":"off", 
    "jsx-a11y/no-autofocus":"off"
    
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],  
};
