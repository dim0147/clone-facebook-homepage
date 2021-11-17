import styled from 'styled-components';

import { RootState, useAppDisPatch, useAppSelector } from '@/stores/store';
import { changeTheme, ThemeState } from '@/features/theme/ThemeSlice';

const Button = styled.button`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
`;

export default function Header() {
    const dispatch = useAppDisPatch();
    const themeState = useAppSelector((state) => state.theme);

    return (
        <div>
            <button
                onClick={() =>
                    dispatch(
                        changeTheme(
                            themeState.value === 'light' ? 'dark' : 'light'
                        )
                    )
                }
            >
                Click
            </button>
        </div>
    );
}
