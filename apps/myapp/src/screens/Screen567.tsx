import { Pressable, Text, View } from 'react-native';

import { copy567 } from '../generated/copy/copy567';
import { layout567 } from '../generated/layouts/layout567';
import { palette567 } from '../generated/palettes/palette567';

export function Screen567() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout567.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy567.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy567.detail} / {palette567.name}
			</Text>
		</View>
	);
}
