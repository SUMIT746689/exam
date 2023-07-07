import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface RootState {}
interface AppDispatch {}

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;