import { Pressable, Text, View } from 'react-native';

import { copy757 } from '../generated/copy/copy757';
import { layout757 } from '../generated/layouts/layout757';
import { palette757 } from '../generated/palettes/palette757';

export function Screen757() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout757.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy757.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy757.detail} / {palette757.name}
			</Text>
		</View>
	);
}
