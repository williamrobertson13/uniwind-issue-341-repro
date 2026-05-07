import { Pressable, Text, View } from 'react-native';

import { copy749 } from '../generated/copy/copy749';
import { layout749 } from '../generated/layouts/layout749';
import { palette749 } from '../generated/palettes/palette749';

export function Screen749() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout749.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy749.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy749.detail} / {palette749.name}
			</Text>
		</View>
	);
}
