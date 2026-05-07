import { Pressable, Text, View } from 'react-native';

import { copy667 } from '../generated/copy/copy667';
import { layout667 } from '../generated/layouts/layout667';
import { palette667 } from '../generated/palettes/palette667';

export function Screen667() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout667.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy667.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy667.detail} / {palette667.name}
			</Text>
		</View>
	);
}
