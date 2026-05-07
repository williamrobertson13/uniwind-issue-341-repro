import { Pressable, Text, View } from 'react-native';

import { copy523 } from '../generated/copy/copy523';
import { layout523 } from '../generated/layouts/layout523';
import { palette523 } from '../generated/palettes/palette523';

export function Screen523() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout523.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy523.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy523.detail} / {palette523.name}
			</Text>
		</View>
	);
}
