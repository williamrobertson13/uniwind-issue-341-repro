import { Pressable, Text, View } from 'react-native';

import { copy925 } from '../generated/copy/copy925';
import { layout925 } from '../generated/layouts/layout925';
import { palette925 } from '../generated/palettes/palette925';

export function Screen925() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout925.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy925.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy925.detail} / {palette925.name}
			</Text>
		</View>
	);
}
