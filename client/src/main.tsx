import '@rasenganjs/image/css';
import '@/styles/index.css';
import { type AppProps } from 'rasengan';
import './i18n';

export default function App({ Component, children }: AppProps) {
  return <Component>{children}</Component>;
}
