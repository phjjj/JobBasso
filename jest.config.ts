/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // next.config.ts와 .env 파일을 찾을 경로
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // TypeScript path mapping을 Jest에서 사용할 수 있도록 설정
    '^@/(.*)$': '<rootDir>/src/$1', // @/로 시작하는 모든 경로를 src/로 매핑
  },
  // 각각의 테스트를 실행하기 전에 추가 설정 옵션 추가
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
