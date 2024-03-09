import addNotification from 'react-push-notification'
import logo from '../../assets/logo.png'

type Notification = {
    title: string
    message: string
    subtitle?: string
    native?: boolean
}

export const toggleNotification = ({ ...props }: Notification) =>
    addNotification({
        title: props.title,
        subtitle: props.subtitle || '',
        message: props.message,
        native: props.native || true, // when using native, your OS will handle theming.
        icon: logo,
    })
