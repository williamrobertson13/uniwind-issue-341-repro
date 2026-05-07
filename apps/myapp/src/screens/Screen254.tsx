import { Pressable, Text, View } from 'react-native';

import { copy254 } from '../generated/copy/copy254';
import { layout254 } from '../generated/layouts/layout254';
import { palette254 } from '../generated/palettes/palette254';

export function Screen254() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout254.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy254.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy254.detail} / {palette254.name}
			</Text>
		</View>
	);
}
