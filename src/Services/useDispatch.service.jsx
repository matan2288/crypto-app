import { useDispatch } from 'react-redux';

export const dispatchIt = () => {
    const dispatch = useDispatch();
    return dispatch;
}