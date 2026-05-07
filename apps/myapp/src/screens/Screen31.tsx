import { Pressable, Text, View } from 'react-native';

import { copy31 } from '../generated/copy/copy31';
import { layout31 } from '../generated/layouts/layout31';
import { palette31 } from '../generated/palettes/palette31';

export function Screen31() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout31.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy31.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy31.detail} / {palette31.name}
			</Text>
		</View>
	);
}
