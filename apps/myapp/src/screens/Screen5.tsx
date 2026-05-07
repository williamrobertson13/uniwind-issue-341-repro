import { Pressable, Text, View } from 'react-native';

import { copy5 } from '../generated/copy/copy5';
import { layout5 } from '../generated/layouts/layout5';
import { palette5 } from '../generated/palettes/palette5';

export function Screen5() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout5.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy5.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy5.detail} / {palette5.name}
			</Text>
		</View>
	);
}
