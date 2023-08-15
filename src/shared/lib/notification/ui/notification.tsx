import { toast, ToastOptions } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../react';
import { clearNotification } from '../index';
import { getNotifications } from '../model/selectors';

export function Notification() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(getNotifications);

  const renderNotifications = () => {
    notifications.forEach((notification) => {
      const notificationOptions: ToastOptions = {
        position: notification.position,
        theme: notification.theme,
        autoClose: notification.duration,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id))
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, notificationOptions);
          break;
        case 'warning':
          toast.error(notification.message, notificationOptions);
          break;
        case 'success':
          toast.error(notification.message, notificationOptions);
          break;
        case 'info':
          toast.error(notification.message, notificationOptions);
          break;
        default:
          toast(notification.message, notificationOptions);
      }
    });
  };

  renderNotifications();

  return null;
}