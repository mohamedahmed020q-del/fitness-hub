import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fitnesshub.app',
  appName: 'Fitness Hub',
  webDir: 'dist',
  android: { allowMixedContent: false },
  backgroundColor: '#f5f7f4',
};

export default config;
