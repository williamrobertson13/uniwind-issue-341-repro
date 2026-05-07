import { Pressable, Text, View } from 'react-native';

import { copy781 } from '../generated/copy/copy781';
import { layout781 } from '../generated/layouts/layout781';
import { palette781 } from '../generated/palettes/palette781';

export function Screen781() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout781.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy781.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy781.detail} / {palette781.name}
			</Text>
		</View>
	);
}
