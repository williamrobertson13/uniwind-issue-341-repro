import { Pressable, Text, View } from 'react-native';

import { copy385 } from '../generated/copy/copy385';
import { layout385 } from '../generated/layouts/layout385';
import { palette385 } from '../generated/palettes/palette385';

export function Screen385() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout385.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy385.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy385.detail} / {palette385.name}
			</Text>
		</View>
	);
}
