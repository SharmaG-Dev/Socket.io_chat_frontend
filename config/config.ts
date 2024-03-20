import { dev } from './dev'
import { prod } from './prod'

const config = () => {
    const mode = process.env.PROJECT_DEVCHAT_APP_ENV || 'production'

    if (mode === 'development') return dev
    if (mode === 'production') return prod
}

export default config()