import { Pressable, Text, View } from 'react-native';

import { copy1339 } from '../generated/copy/copy1339';
import { layout1339 } from '../generated/layouts/layout1339';
import { palette1339 } from '../generated/palettes/palette1339';

export function Screen1339() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1339.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1339.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1339.detail} / {palette1339.name}
			</Text>
		</View>
	);
}
