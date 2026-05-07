import { Pressable, Text, View } from 'react-native';

import { copy629 } from '../generated/copy/copy629';
import { layout629 } from '../generated/layouts/layout629';
import { palette629 } from '../generated/palettes/palette629';

export function Screen629() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout629.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy629.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy629.detail} / {palette629.name}
			</Text>
		</View>
	);
}
