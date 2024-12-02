import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TweetInput from './TweetInput'
import TweetList from './TweetList'
import Tweet from './Tweet'

createRoot(getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>)


