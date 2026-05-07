import { Pressable, Text, View } from 'react-native';

import { copy311 } from '../generated/copy/copy311';
import { layout311 } from '../generated/layouts/layout311';
import { palette311 } from '../generated/palettes/palette311';

export function Screen311() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout311.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy311.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy311.detail} / {palette311.name}
			</Text>
		</View>
	);
}
