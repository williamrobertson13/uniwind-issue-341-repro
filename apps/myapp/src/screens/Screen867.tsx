import { Pressable, Text, View } from 'react-native';

import { copy867 } from '../generated/copy/copy867';
import { layout867 } from '../generated/layouts/layout867';
import { palette867 } from '../generated/palettes/palette867';

export function Screen867() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout867.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy867.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy867.detail} / {palette867.name}
			</Text>
		</View>
	);
}
