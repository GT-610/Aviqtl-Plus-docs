import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ScreenshotPlaceholder from './components/ScreenshotPlaceholder.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ScreenshotPlaceholder', ScreenshotPlaceholder)
  }
} satisfies Theme
