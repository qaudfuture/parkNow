import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, ToastView, Row, CustomText, SubText } from './CustomToast.style';
import { CustomToastProps } from './type';

const CustomToast: React.FC<CustomToastProps> = ({ status, instantPopOut }) => {
    const windowHeight = Dimensions.get('window').height;
    const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

    useEffect(() => {
        if (status) {
            Animated.timing(popAnim, {
                toValue: 0, // Translate the view to the top
                duration: 100,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    instantPopOut();
                }, 10000);
            });
        } else {
            // Hide the toast when status is null
            Animated.timing(popAnim, {
                toValue: windowHeight * -1, // Translate the view back out of sight
                duration: 100,
                useNativeDriver: true,
            }).start();
        }
    }, [status, popAnim, instantPopOut, windowHeight]);

    const successColor = '#6dcf81';
    const failColor = '#bf6060';

    return (
        <Container style={{ transform: [{ translateY: popAnim }] }}>
            {status && (
                <ToastView backgroundColor={status === 'success' ? successColor : failColor}>
                    <Row>
                        {/* <FontAwesome
                            name={status === 'success' ? 'checkcircleo' : 'closecircleo'}
                            size={24}
                            color='white'
                        /> */}
                        <CustomText color='white'>{status === 'success' ? 'Success!' : 'Failed!'}</CustomText>
                        <SubText color='white'>{status === 'success' ? 'success' : 'Operation Failed...'}</SubText>
                        <TouchableOpacity onPress={instantPopOut}>
                            <Text>Close</Text>
                            {/* <FontAwesome name='cross' size={24} color='white' /> */}
                        </TouchableOpacity>
                    </Row>
                </ToastView>
            )}
        </Container>
    );
};

export default CustomToast;
