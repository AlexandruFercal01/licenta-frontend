import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react'
import { toggleNotification } from '../common/Notification'

interface Notification {
    message: string
    title: string
}

interface NotificationContextState {
    notificationCount: number
    setNotificationCount: Dispatch<SetStateAction<number>>
    currentNotification: Notification
    setCurrentNotification: Dispatch<SetStateAction<Notification>>
    notifications: Notification[]
    addNotification: (newNotification: Notification) => void
    clearNotifications: () => void
}

const initialContextState: NotificationContextState = {
    notificationCount: 0,
    setNotificationCount: () => {},
    currentNotification: { message: '', title: '' },
    setCurrentNotification: () => {},
    notifications: [],
    addNotification: () => {},
    clearNotifications: () => {},
}

export const NotificationContext =
    createContext<NotificationContextState>(initialContextState)

export const useNotificationContext = () => useContext(NotificationContext)

type NotificationContextProviderProps = {
    children: ReactNode
}

export const NotificationContextProvider: React.FC<
    NotificationContextProviderProps
> = ({ children }) => {
    const [notificationCount, setNotificationCount] = useState<number>(0)
    const [currentNotification, setCurrentNotification] =
        useState<Notification>({message: '', title: '' })
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = (newNotification: Notification) => {
        // Check if the notification with the same message_id already exists
        let isDuplicate = false;
        setNotifications((prevNotifications) => {
            // Check if the notification with the same message_id already exists
            isDuplicate = prevNotifications.some(notification => notification.title === newNotification.title);
            if (document.visibilityState !== 'visible' && !isDuplicate) {
                toggleNotification({
                    title: newNotification.title,
                    message: newNotification.message,
                    native: false,
                })
            }
            // If it's a duplicate, return the previous state to avoid adding it again
            if (isDuplicate) {
                return prevNotifications;
            }
            
            // If it's not a duplicate, add the new notification to the array
            return [
                ...prevNotifications,
                newNotification,
            ];
        });
        // Only increment the notification count if it's not a duplicate
        setNotificationCount((prevCount) => isDuplicate ? prevCount : prevCount + 1);
    };
    

    const clearNotifications = () => {
        setNotifications((prevNotifications) => prevNotifications.slice(0, 0));
        setNotificationCount(0);
    }

    const value: NotificationContextState = {
        notificationCount,
        setNotificationCount,
        currentNotification,
        setCurrentNotification,
        notifications,
        addNotification,
        clearNotifications,
    }

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    )
}
