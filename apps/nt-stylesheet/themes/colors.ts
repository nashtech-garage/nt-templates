import { ThemeConfig } from 'tailwindcss/types/config'

export const colors: ThemeConfig['colors'] = {
    black: '#000000',
    white: '#FFFFFF',
    text: '#28292B',
    grey: '#C9CCD4',
    red: '#D6001C',
    orange: '#FF8800',
    purple: '#6A1F7A',
    blue: {
        DEFAULT: '#0094D5',
    },
    primary: '#D6001C',
    'shade-secondary-1': {
        '190': '#0B030C',
        '180': '#150618',
        '170': '#200925',
        '160': '#2A0C31',
        '150': '#35103D',
        '140': '#401349',
        '130': '#4A1655',
        '120': '#551962',
        '110': '#5F1C6E',
        DEFAULT: '#6A1F7A',
        90: '#793587',
        80: '#884C95',
        70: '#9762A2',
        60: '#A679AF',
        50: '#B58FBD',
        40: '#C3A5CA',
        30: '#D2BCD7',
        20: '#E1D2E4',
        10: '#F0E9F2',
    },
    'shade-secondary-2': {
        DEFAULT: '#0094D5',
        90: '#1A9FD9',
        80: '#33A9DD',
        70: '#4DB4E2',
        60: '#66BFE6',
        50: '#80CAEA',
        40: '#99D4EE',
        30: '#B3DFF2',
        20: '#CCEAF7',
        10: '#E6F4FB',
        9: '#F0F5FE',
    },
    'shade-secondary-3': {
        DEFAULT: '#E31C79',
        90: '#E63386',
        80: '#E94994',
        70: '#EB60A1',
        60: '#EE77AF',
        50: '#F18EBC',
        40: '#F4A4C9',
        30: '#F7BBD7',
        20: '#F9D2E4',
        10: '#FCE8F2',
    },
    'shade-secondary-4': {
        DEFAULT: '#F4AD33',
        90: '#F5B547',
        80: '#F6BD5C',
        70: '#F7C670',
        60: '#F8CE85',
        50: '#FAD699',
        40: '#FBDEAD',
        30: '#FCE6C2',
        20: '#FDEFD6',
        10: '#FEF7EB',
    },
    'shade-neutral': {
        DEFAULT: '#28292B',
        90: '#3E3E40',
        80: '#535455',
        70: '#69696B',
        60: '#7E7F80',
        50: '#949495',
        40: '#A9A9AA',
        30: '#BFBFBF',
        20: '#D4D4D5',
        10: '#EAEAEA',
        9: '#F6F6F6',
    },
    yellow: {
        DEFAULT: '#F4AD33',
        90: '#F5B547',
        80: '#F6BD5C',
        70: '#F7C670',
        60: '#F8CE85',
        50: '#FAD699',
        40: '#FBDEAD',
        30: '#FCE6C2',
        20: '#FDEFD6',
        10: '#FEF7EB',
    },
    'shade-primary': {
        DEFAULT: '#E31C79',
        10: '#C10019',
        20: '#AB0016',
        30: '#960014',
        40: '#800011',
        50: '#6B000E',
        60: '#56000B',
        70: '#400008',
        80: '#2B0006',
        90: '#150003',
    },
    success: {
        bold: '#359000',
        DEFAULT: '#6CD430',
        light: '#ABE38B',
        thin: '#E4FFD5',
    },
    warning: {
        bold: '#DF7700',
        DEFAULT: '#FFB92E',
        light: '#FED496',
        thin: '#FFF0DA',
    },
    danger: {
        bold: '#E51010',
        DEFAULT: '#FA5151',
        light: '#F9BBBB',
        thin: '#FFE9E9',
    },
    info: {
        bold: '#0094D5',
        DEFAULT: '#33A9DD',
        light: '#B3DFF2',
        thin: '#E6F4FB',
    },
    line: {
        dark: '#E6E6E6',
        DEFAULT: '#F0F5FE',
        light: '#F6F6F6',
        white: '#FFFFFF',
        diabled: '#C9CCD4',
    },
}

export const boxShadow = {
    primary: '0 0.125rem 0.25rem rgba(214, 0, 28, 0.15)',
    'secondary-1': '0 0.25rem 0.375rem rgba(106, 31, 122, 0.15)',
    'secondary-2': '0 0.25rem 0.375rem rgba(0, 148, 213, 0.15)',
    'secondary-3': '0 0.25rem 0.375rem rgba(227, 28, 121, 0.15)',
    'secondary-4': '0 0.25rem 0.375rem rgba(244, 173, 51, 0.15)',
    secondary: '0 0.25rem 0.375rem rgba(106, 31, 122, 0.15)',
    success: '0 0.25rem 0.375rem rgba(53, 144, 0, 0.15)',
    warning: '0 0.25rem 0.375rem rgba(223, 119, 0, 0.15)',
    danger: '0 0.25rem 0.375rem rgba(229, 16, 16, 0.15)',
    info: '0 0.25rem 0.375rem rgba(0, 148, 213, 0.15);',
}

export const backgroundColor = {
    dark: '#E6E6E6',
    DEFAULT: '#F0F5FE',
    light: '#F6F6F6',
    white: '#FFFFFF',
    disabled: '#C9CCD4',
}
