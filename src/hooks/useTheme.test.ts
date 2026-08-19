import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
    it('should toggle theme correctly', () => {
        const { result } = renderHook(() => useTheme());
        
        const initialTheme = result.current.theme;
        
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).not.toBe(initialTheme);
        
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe(initialTheme);
    });
});