import { Canvas, Circle } from '@shopify/react-native-skia';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Svg, { Circle as SvgCircle, Path, Rect } from 'react-native-svg';
import { Text, View } from 'react-native';

export function HeavyScreen() {
	const offset = useSharedValue(0);
	const animStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
	}));
	const tap = Gesture.Tap().onEnd(() => {
		offset.value = withSpring(offset.value === 0 ? 50 : 0);
	});

	return (
		<GestureHandlerRootView className="flex-1">
			<View className="flex-col gap-4 p-6 bg-amber-50 rounded-2xl">
				<Text className="text-xl font-bold text-amber-900">Heavy Screen</Text>

				<Canvas style={{ width: 100, height: 100 }}>
					<Circle cx={50} cy={50} r={40} color="orange" />
				</Canvas>

				<Svg width="100" height="100" viewBox="0 0 100 100">
					<Rect x="10" y="10" width="80" height="80" fill="purple" />
					<SvgCircle cx="50" cy="50" r="30" fill="cyan" />
					<Path d="M 10 10 L 90 90" stroke="black" strokeWidth="2" />
				</Svg>

				<GestureDetector gesture={tap}>
					<Animated.View
						style={animStyle}
						className="size-16 bg-pink-500 rounded-full active:bg-pink-600"
					/>
				</GestureDetector>
			</View>
		</GestureHandlerRootView>
	);
}
