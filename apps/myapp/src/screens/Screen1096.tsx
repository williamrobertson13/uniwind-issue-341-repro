import { Pressable, Text, View } from 'react-native';

import { copy1096 } from '../generated/copy/copy1096';
import { layout1096 } from '../generated/layouts/layout1096';
import { palette1096 } from '../generated/palettes/palette1096';

export function Screen1096() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1096.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1096.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1096.detail} / {palette1096.name}
			</Text>
		</View>
	);
}
