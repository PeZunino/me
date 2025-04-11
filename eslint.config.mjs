import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const compat = new FlatCompat({baseDirectory: __dirname,});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			'@stylistic': stylistic,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			semi: 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					'args': 'all',
					'argsIgnorePattern': '^_',
					'caughtErrors': 'all',
					'caughtErrorsIgnorePattern': '^_',
					'destructuredArrayIgnorePattern': '^_',
					'varsIgnorePattern': '^_',
					'ignoreRestSiblings': true
				}
			],
			'@stylistic/object-curly-newline': [
				'error', 
				{
					'ObjectExpression': {
						'multiline': true,
						'minProperties': 2 
					},
					'ObjectPattern': {
						'multiline': true,
						'minProperties': 2 
					}
				}
			],
			'@stylistic/array-bracket-newline': [
				'error', {'minItems':1}
			],
			'@stylistic/brace-style': [
				'error', '1tbs'
			],
			'@stylistic/newline-per-chained-call': [
				'error', {'ignoreChainWithDepth': 1}
			],
			'@stylistic/indent': [
				'error', 'tab'
			],
			'@stylistic/quotes': [
				'error', 'single'
			],
			
			'@stylistic/object-property-newline': 'error',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/padding-line-between-statements':[
				'error',{
					blankLine: 'always',
					prev: '*',
					next: '*'
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: '*'
				},
			],
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						[
							'^\\u0000', '^node:', '^@?\\w', '^', '^\\.'
						]
					]
				},
			],
		},
	}
];

export default eslintConfig;
