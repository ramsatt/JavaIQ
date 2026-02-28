import { Tutorial } from '../tutorial.model';
import { JAVA_FUNDAMENTALS_TUTORIAL } from './java-fundamentals';
import { SPRING_FRAMEWORK_TUTORIAL } from './spring-framework';
import { SPRING_BOOT_TUTORIAL } from './spring-boot-tutorial';

export const ALL_TUTORIALS: Tutorial[] = [
  JAVA_FUNDAMENTALS_TUTORIAL,
  SPRING_FRAMEWORK_TUTORIAL,
  SPRING_BOOT_TUTORIAL
];

export const TUTORIAL_MAP: Record<string, Tutorial> = {
  'java-fundamentals': JAVA_FUNDAMENTALS_TUTORIAL,
  'spring-framework': SPRING_FRAMEWORK_TUTORIAL,
  'spring-boot': SPRING_BOOT_TUTORIAL
};
