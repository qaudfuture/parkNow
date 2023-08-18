import { SafeAreaView, StyleSheet, Platform, KeyboardAvoidingViewProps } from 'react-native';
import React from 'react';
import { Container, Content, Header } from './Layout.Styles';

type BaseProps = {
    header?: React.ReactNode;
    keyboardAvoidingProps?: KeyboardAvoidingViewProps;
    footer?: React.ReactNode;
    children?: React.ReactNode;
};
const Base: React.FC<BaseProps> = (props: BaseProps) => {
    const { header = null, footer = null, keyboardAvoidingProps = {}, children = null } = props;

    const defaultKeyboardAvoidingProps = {
        behavior: 'padding',
        keyboardVerticalOffset: Platform.select({ ios: 0, android: 20 }),
        style: { flex: 1 },
        ...keyboardAvoidingProps,
    } as KeyboardAvoidingViewProps;

    return (
        <>
            <SafeAreaView style={style.safeArea} />
            <Container>
                <Header {...defaultKeyboardAvoidingProps}>
                    {header}
                    <Content>{children}</Content>
                </Header>
                {footer}
            </Container>
            <SafeAreaView style={style.safeArea} />
        </>
    );
};

const style = StyleSheet.create({
    safeArea: {
        backgroundColor: '#0D0D0D',
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    keyboardAvoid: {
        flex: 1,
    },
    appBody: {
        flex: 1,
        paddingBottom: 24,
        flexGrow: 1,
    },
});

export default Base;
