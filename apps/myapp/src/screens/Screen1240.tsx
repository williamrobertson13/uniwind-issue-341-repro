import { Pressable, Text, View } from 'react-native';

import { copy1240 } from '../generated/copy/copy1240';
import { layout1240 } from '../generated/layouts/layout1240';
import { palette1240 } from '../generated/palettes/palette1240';

export function Screen1240() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1240.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1240.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1240.detail} / {palette1240.name}
			</Text>
		</View>
	);
}
