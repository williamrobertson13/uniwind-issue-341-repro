import { Pressable, Text, View } from 'react-native';

import { copy1168 } from '../generated/copy/copy1168';
import { layout1168 } from '../generated/layouts/layout1168';
import { palette1168 } from '../generated/palettes/palette1168';

export function Screen1168() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1168.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1168.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1168.detail} / {palette1168.name}
			</Text>
		</View>
	);
}
