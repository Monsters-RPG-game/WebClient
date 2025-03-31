import { useDispatch, useSelector } from 'react-redux';
import type { MainDispatch, RootMainState } from '../store/types.js';
import type { TypedUseSelectorHook } from 'react-redux';

/**
 * UseDispatch function with proper interfaces for redux store. That way you can simply create additional store, separated from this one.
 * @returns Disaptch.
 */
export const useMainDispatch = (): MainDispatch => useDispatch<MainDispatch>();

/**
 * UseSelector function with proper interfaces for redux store. That way you can simply create additional store, separated from this one.
 * @returns Selector with proper types.
 */
export const useMainSelector: TypedUseSelectorHook<RootMainState> = useSelector;
