import { Pressable, Text, View } from 'react-native';

import { copy1024 } from '../generated/copy/copy1024';
import { layout1024 } from '../generated/layouts/layout1024';
import { palette1024 } from '../generated/palettes/palette1024';

export function Screen1024() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1024.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1024.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1024.detail} / {palette1024.name}
			</Text>
		</View>
	);
}
