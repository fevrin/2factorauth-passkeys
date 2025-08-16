//
// This is a basic ESLint flat configuration file.
// It is the recommended format for ESLint v9.0.0 and above.
//
// To use this file, you must either:
// 1. Add "type": "module" to your package.json file. (Recommended)
// 2. Or, change this file's extension from .js to .mjs.
//
// It enables core ESLint recommended rules and is designed to work
// out-of-the-box for most JavaScript projects.
//
// For more information on configuring ESLint, see:
// https://eslint.org/docs/latest/use/configure/
//

// Import the recommended rules from ESLint core.
import eslint from '@eslint/js';

export default [
  // This is a default configuration that ignores common build folders
  // and other non-source files to avoid linting them.
  {
    ignores: [
      "dist/",
      "build/",
      "node_modules/",
      "coverage/",
      "*.min.js"
    ]
  },
  // The ESLint recommended ruleset contains a number of common rules
  // that help catch mistakes and enforce best practices.
  eslint.configs.recommended,
  {
    // This is a custom configuration block where you can add,
    // modify, or disable specific rules.
    rules: {
      // Examples of custom rules:
      // "semi": ["error", "always"],
      // "quotes": ["error", "single"],
    }
  },
  // We need to tell ESLint about the environment your code runs in.
  // This configuration block enables global variables and functions
  // from both Node.js and browser environments.
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      // Use the 'globals' property to define global variables.
      // Setting them to 'readonly' tells ESLint they exist but cannot be reassigned.
      globals: {
        require: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly'
      }
    }
  }
];
