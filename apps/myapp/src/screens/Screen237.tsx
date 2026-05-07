import { Pressable, Text, View } from 'react-native';

import { copy237 } from '../generated/copy/copy237';
import { layout237 } from '../generated/layouts/layout237';
import { palette237 } from '../generated/palettes/palette237';

export function Screen237() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout237.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy237.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy237.detail} / {palette237.name}
			</Text>
		</View>
	);
}
