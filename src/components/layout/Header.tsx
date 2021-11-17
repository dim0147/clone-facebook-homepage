import styled from 'styled-components';

import Friend from '@/components/icons/SeeMore';
import CovidImg from '@img/Covid19.png';

import { RootState, useAppDisPatch, useAppSelector } from '@/stores/store';
import { changeTheme, ThemeState } from '@/features/theme/ThemeSlice';

export default function Header() {
    const dispatch = useAppDisPatch();
    const themeState = useAppSelector((state) => state.theme);

    return (
        <div>
            <Friend fill='red' />
            <img src={CovidImg} alt="" />
        </div>
    );
}
